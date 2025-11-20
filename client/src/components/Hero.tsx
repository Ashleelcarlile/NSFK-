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

  const getResponsiveHeightClass = () => {
    if (height === "80vh") return "h-[480px] sm:h-[80vh]";
    if (height === "100vh") return "h-[480px] sm:h-[100vh]";
    return "";
  };
  
  const heightClass = getResponsiveHeightClass();
  
  return (
    <div className={`relative w-full -mt-16 pt-16 ${heightClass}`} style={{ height: heightClass ? undefined : height }}>
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative h-full flex items-end justify-center pb-4 sm:pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:max-w-none mx-auto mt-16 sm:mt-0">
              {primaryCTA && (
                <button
                  onClick={primaryCTA.onClick}
                  onMouseEnter={() => setPrimaryHover(true)}
                  onMouseLeave={() => setPrimaryHover(false)}
                  className="relative flex items-center bg-black text-white pl-6 sm:pl-8 pr-16 sm:pr-16 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden group max-w-xs sm:max-w-none mx-auto sm:mx-0 w-full sm:w-auto"
                  data-testid="button-hero-primary"
                >
                  <span className="relative z-10 mr-4 sm:mr-4">{primaryCTA.label}</span>
                  <div className={`absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${primaryHover ? 'scale-110' : ''}`}>
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </button>
              )}
              {secondaryCTA && (
                <button
                  onClick={secondaryCTA.onClick}
                  onMouseEnter={() => setSecondaryHover(true)}
                  onMouseLeave={() => setSecondaryHover(false)}
                  className="relative flex items-center bg-transparent border-2 border-black text-black pl-6 sm:pl-8 pr-16 sm:pr-16 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden group max-w-xs sm:max-w-none mx-auto sm:mx-0 w-full sm:w-auto"
                  data-testid="button-hero-secondary"
                >
                  <span className="relative z-10 mr-4 sm:mr-4">{secondaryCTA.label}</span>
                  <div className={`absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 ${secondaryHover ? 'scale-110' : ''}`}>
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
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
