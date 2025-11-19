import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/youtube/latest-episodes", async (req, res) => {
    try {
      let channelId = req.query.channelId as string;
      const channelHandle = req.query.channelHandle as string;
      const maxResults = req.query.maxResults ? parseInt(req.query.maxResults as string) : 4;
      
      const apiKey = process.env.YOUTUBE_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "YouTube API key not configured" });
      }

      // If a handle is provided instead of channelId, resolve it first
      if (channelHandle && !channelId) {
        const handleUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forHandle=${channelHandle}&part=id`;
        const handleResponse = await fetch(handleUrl);
        const handleData = await handleResponse.json();

        if (!handleResponse.ok || !handleData.items || handleData.items.length === 0) {
          console.error("YouTube handle resolution error:", handleData);
          return res.status(404).json({ error: "Channel not found for handle: " + channelHandle });
        }

        channelId = handleData.items[0].id;
      }

      if (!channelId) {
        return res.status(400).json({ error: "channelId or channelHandle query parameter is required" });
      }

      // Fetch latest 50 videos (to ensure we get 4 non-shorts)
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=50`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      if (!searchResponse.ok) {
        console.error("YouTube API error:", searchData);
        return res.status(searchResponse.status).json({ error: searchData.error?.message || "Failed to fetch videos" });
      }

      // Get video IDs
      const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

      if (!videoIds) {
        return res.json({ episodes: [] });
      }

      // Fetch detailed video information including duration
      const videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,contentDetails`;
      const videosResponse = await fetch(videosUrl);
      const videosData = await videosResponse.json();

      if (!videosResponse.ok) {
        console.error("YouTube API error:", videosData);
        return res.status(videosResponse.status).json({ error: videosData.error?.message || "Failed to fetch video details" });
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

      res.json({ episodes: regularEpisodes });
    } catch (error) {
      console.error("Error fetching YouTube episodes:", error);
      res.status(500).json({ error: "Internal server error" });
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

// Helper function to determine if a video is a short (under 60 seconds)
function isShortVideo(isoDuration: string): boolean {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return false;

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds <= 60;
}
