import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

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
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <div className="relative w-full -mt-16 pt-16" style={{ height }}>
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative h-full flex items-end justify-center pb-8 md:pb-12">
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
            <div className="flex flex-wrap gap-6 justify-center">
              {primaryCTA && (
                <button
                  onClick={primaryCTA.onClick}
                  onMouseEnter={() => setPrimaryHover(true)}
                  onMouseLeave={() => setPrimaryHover(false)}
                  className="relative flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group"
                  data-testid="button-hero-primary"
                  style={{ paddingRight: '4.5rem' }}
                >
                  <span className="relative z-10">{primaryCTA.label}</span>
                  <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${primaryHover ? 'scale-110' : ''}`}>
                    <ArrowUpRight className="h-6 w-6 text-black" />
                  </div>
                </button>
              )}
              {secondaryCTA && (
                <button
                  onClick={secondaryCTA.onClick}
                  onMouseEnter={() => setSecondaryHover(true)}
                  onMouseLeave={() => setSecondaryHover(false)}
                  className="relative flex items-center gap-4 bg-transparent border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group"
                  data-testid="button-hero-secondary"
                  style={{ paddingRight: '4.5rem' }}
                >
                  <span className="relative z-10">{secondaryCTA.label}</span>
                  <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 ${secondaryHover ? 'scale-110' : ''}`}>
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
