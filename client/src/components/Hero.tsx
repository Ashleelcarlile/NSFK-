import { Button } from "@/components/ui/button";

interface HeroProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; onClick: () => void };
  secondaryCTA?: { label: string; onClick: () => void };
  height?: string;
}

export default function Hero({
  imageSrc,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  height = "80vh",
}: HeroProps) {
  return (
    <div className="relative w-full" style={{ height }}>
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-wrap gap-4 justify-center">
              {primaryCTA && (
                <Button
                  size="lg"
                  onClick={primaryCTA.onClick}
                  className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-lg px-8"
                  data-testid="button-hero-primary"
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={secondaryCTA.onClick}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
                  data-testid="button-hero-secondary"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
