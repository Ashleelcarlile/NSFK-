import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EpisodeCardProps {
  thumbnail: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  onPlay?: () => void;
}

export default function EpisodeCard({
  thumbnail,
  title,
  date,
  duration,
  description,
  onPlay,
}: EpisodeCardProps) {
  return (
    <Card className="overflow-hidden group hover-elevate">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <Button
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity h-16 w-16 rounded-full"
            onClick={onPlay}
            data-testid="button-play-episode"
          >
            <Play className="h-8 w-8" />
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span data-testid="text-episode-date">{date}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span data-testid="text-episode-duration">{duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2" data-testid="text-episode-title">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2" data-testid="text-episode-description">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
