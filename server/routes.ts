import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Simple in-memory cache for YouTube episodes
interface CachedEpisodes {
  data: any[];
  timestamp: number;
}

let episodesCache: CachedEpisodes | null = null;
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

// Fallback episodes to show when API quota is exceeded
const FALLBACK_EPISODES = [
  {
    id: 1,
    youtubeId: "8c9mfhPUu0A",
    title: "Episode: Working Mums vs Stay-at-Home Mums",
    host: "Not Safe For Kids Podcast",
    publishedAt: "2024-11-18T12:00:00Z",
    thumbnail: "https://i.ytimg.com/vi/8c9mfhPUu0A/hqdefault.jpg",
    duration: "45 mins",
  },
  {
    id: 2,
    youtubeId: "placeholder2",
    title: "Recent Episode",
    host: "Not Safe For Kids Podcast",
    publishedAt: "2024-11-15T12:00:00Z",
    thumbnail: "https://via.placeholder.com/480x360?text=Episode+2",
    duration: "38 mins",
  },
  {
    id: 3,
    youtubeId: "placeholder3",
    title: "Recent Episode",
    host: "Not Safe For Kids Podcast",
    publishedAt: "2024-11-12T12:00:00Z",
    thumbnail: "https://via.placeholder.com/480x360?text=Episode+3",
    duration: "42 mins",
  },
  {
    id: 4,
    youtubeId: "placeholder4",
    title: "Recent Episode",
    host: "Not Safe For Kids Podcast",
    publishedAt: "2024-11-08T12:00:00Z",
    thumbnail: "https://via.placeholder.com/480x360?text=Episode+4",
    duration: "50 mins",
  },
];

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/youtube/latest-episodes", async (req, res) => {
    try {
      let channelId = req.query.channelId as string;
      const channelHandle = req.query.channelHandle as string;
      const maxResults = req.query.maxResults ? parseInt(req.query.maxResults as string) : 4;
      
      // Check if we have valid cached data (less than 6 hours old)
      const now = Date.now();
      if (episodesCache && (now - episodesCache.timestamp) < CACHE_DURATION) {
        console.log("Returning cached YouTube episodes");
        return res.json({ episodes: episodesCache.data });
      }

      const apiKey = process.env.YOUTUBE_API_KEY;
      if (!apiKey) {
        // If no API key but we have cached data, return it
        if (episodesCache) {
          console.log("No API key, returning cached episodes");
          return res.json({ episodes: episodesCache.data });
        }
        // Return fallback episodes
        console.log("No API key, returning fallback episodes");
        return res.json({ episodes: FALLBACK_EPISODES });
      }

      // If a handle is provided instead of channelId, resolve it first
      if (channelHandle && !channelId) {
        const handleUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forHandle=${channelHandle}&part=id`;
        const handleResponse = await fetch(handleUrl);
        const handleData = await handleResponse.json();

        if (!handleResponse.ok || !handleData.items || handleData.items.length === 0) {
          console.error("YouTube handle resolution error:", handleData);
          // Return cached data if available, even if old
          if (episodesCache) {
            console.log("Handle resolution failed, returning cached episodes");
            return res.json({ episodes: episodesCache.data });
          }
          // Return fallback episodes
          console.log("Handle resolution failed, returning fallback episodes");
          return res.json({ episodes: FALLBACK_EPISODES });
        }

        channelId = handleData.items[0].id;
      }

      if (!channelId) {
        // Return cached data if available
        if (episodesCache) {
          console.log("No channel ID, returning cached episodes");
          return res.json({ episodes: episodesCache.data });
        }
        // Return fallback episodes
        console.log("No channel ID, returning fallback episodes");
        return res.json({ episodes: FALLBACK_EPISODES });
      }

      // Fetch latest 50 videos (to ensure we get 4 non-shorts)
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=50`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      if (!searchResponse.ok) {
        console.error("YouTube API error:", searchData);
        // If API fails (quota exceeded), return cached data if available
        if (episodesCache) {
          console.log("API quota exceeded, returning cached episodes");
          return res.json({ episodes: episodesCache.data });
        }
        // Return fallback episodes
        console.log("API quota exceeded, returning fallback episodes");
        return res.json({ episodes: FALLBACK_EPISODES });
      }

      // Get video IDs
      const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

      if (!videoIds) {
        // Return cached data if available
        if (episodesCache) {
          return res.json({ episodes: episodesCache.data });
        }
        return res.json({ episodes: FALLBACK_EPISODES });
      }

      // Fetch detailed video information including duration
      const videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,contentDetails`;
      const videosResponse = await fetch(videosUrl);
      const videosData = await videosResponse.json();

      if (!videosResponse.ok) {
        console.error("YouTube API error:", videosData);
        // If API fails, return cached data if available
        if (episodesCache) {
          console.log("Video details fetch failed, returning cached episodes");
          return res.json({ episodes: episodesCache.data });
        }
        // Return fallback episodes
        console.log("Video details fetch failed, returning fallback episodes");
        return res.json({ episodes: FALLBACK_EPISODES });
      }

      // Filter out shorts (<=60 seconds) and keep only regular episodes
      const regularEpisodes = videosData.items
        .filter((item: any) => !isShortVideo(item.contentDetails.duration))
        .slice(0, maxResults)
        .map((item: any, index: number) => ({
          id: index + 1,
          youtubeId: item.id,
          title: item.snippet.title,
          host: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails.high.url,
          duration: formatDuration(item.contentDetails.duration),
        }));

      // Cache the successful response
      episodesCache = {
        data: regularEpisodes,
        timestamp: now,
      };
      console.log("Fetched and cached new YouTube episodes");

      res.json({ episodes: regularEpisodes });
    } catch (error) {
      console.error("Error fetching YouTube episodes:", error);
      // If any error occurs, return cached data if available
      if (episodesCache) {
        console.log("Error occurred, returning cached episodes");
        return res.json({ episodes: episodesCache.data });
      }
      // Return fallback episodes
      console.log("Error occurred, returning fallback episodes");
      res.json({ episodes: FALLBACK_EPISODES });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Helper function to convert ISO 8601 duration to readable format
function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "Unknown";

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  const parts = [];
  if (hours > 0) parts.push(`${hours} hr${hours !== 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} min${minutes !== 1 ? 's' : ''}`);
  if (seconds > 0 && hours === 0) parts.push(`${seconds} sec${seconds !== 1 ? 's' : ''}`);

  return parts.join(' ') || "Unknown";
}

// Helper function to determine if a video is a short (under 5 minutes)
function isShortVideo(isoDuration: string): boolean {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return false;

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds < 300; // Less than 5 minutes
}
