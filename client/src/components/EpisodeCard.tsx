import { Card, CardContent } from "@/components/ui/card";
import { Mic, Clock, ArrowRight } from "lucide-react";

interface EpisodeCardProps {
  youtubeId?: string;
  thumbnail?: string;
  episodeNumber: string;
  host: string;
  title: string;
  duration: string;
  onPlay?: () => void;
}

export default function EpisodeCard({
  youtubeId,
  thumbnail,
  episodeNumber,
  host,
  title,
  duration,
  onPlay,
}: EpisodeCardProps) {
  const thumbnailSrc = youtubeId 
    ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
    : thumbnail;

  const youtubeUrl = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '#';
  
  return (
    <a 
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      data-testid="link-episode"
    >
      <Card className="overflow-hidden hover-elevate bg-white/75 cursor-pointer">
        <CardContent className="p-6">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <img
                src={thumbnailSrc}
                alt={title}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mic className="h-4 w-4" />
                  <span data-testid="text-episode-number">{episodeNumber}</span>
                </div>
                <span className="text-sm font-medium" data-testid="text-episode-host">{host}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 line-clamp-2" data-testid="text-episode-title">
                {title}
              </h3>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span data-testid="text-episode-duration">{duration}</span>
                </div>
                
                <div
                  className="h-10 w-10 rounded-full border-2 border-black flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
                  data-testid="button-play-episode"
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
