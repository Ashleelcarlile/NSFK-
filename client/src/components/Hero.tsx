import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  imageSrc: string;
  mobileImageSrc?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; onClick: () => void };
  secondaryCTA?: { label: string; onClick: () => void };
  height?: string;
}

export default function Hero({
  imageSrc,
  mobileImageSrc,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  height = "80vh",
}: HeroProps) {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const getResponsiveHeightClass = () => {
    if (height === "80vh") return "sm:h-[80vh]";
    if (height === "100vh") return "sm:h-[100vh]";
    return "";
  };
  
  const heightClass = getResponsiveHeightClass();
  
  return (
    <div className={`relative w-full -mt-16 pt-16 ${heightClass}`} style={{ height: heightClass ? undefined : height }}>
      {/* Mobile Layout - Stacked */}
      {mobileImageSrc && (
        <div className="sm:hidden flex flex-col">
          <div className="relative h-[450px]">
            <img
              src={mobileImageSrc}
              alt="Hero background"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <div className="bg-[#DADF7D] px-4 py-6 pb-8">
            {title && (
              <h1 className="text-3xl font-bold text-black mb-4 text-center">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-base text-black/90 mb-6 text-center max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col gap-3 justify-center items-center mx-auto">
                {primaryCTA && (
                  <button
                    onClick={primaryCTA.onClick}
                    className="relative flex items-center bg-black text-white pl-5 pr-14 py-3 rounded-full text-sm font-semibold overflow-hidden max-w-[220px] w-full"
                    data-testid="button-hero-primary"
                  >
                    <span className="relative z-10 mr-3">{primaryCTA.label}</span>
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight className="h-4 w-4 text-black" />
                    </div>
                  </button>
                )}
                {secondaryCTA && (
                  <button
                    onClick={secondaryCTA.onClick}
                    className="relative flex items-center bg-transparent border-2 border-black text-black pl-5 pr-14 py-3 rounded-full text-sm font-semibold overflow-hidden max-w-[220px] w-full"
                    data-testid="button-hero-secondary"
                  >
                    <span className="relative z-10 mr-3">{secondaryCTA.label}</span>
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-black rounded-full flex items-center justify-center">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Layout - Overlay */}
      <div className="hidden sm:block h-full">
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-end justify-center pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto px-4 text-center w-full">
            {title && (
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-row gap-6 justify-center">
                {primaryCTA && (
                  <button
                    onClick={primaryCTA.onClick}
                    onMouseEnter={() => setPrimaryHover(true)}
                    onMouseLeave={() => setPrimaryHover(false)}
                    className="relative flex items-center bg-black text-white pl-6 pr-14 py-3.5 rounded-full text-base font-semibold overflow-hidden group min-w-[200px]"
                    data-testid="button-hero-primary"
                  >
                    <span className="relative z-10 mr-3">{primaryCTA.label}</span>
                    <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${primaryHover ? 'scale-110' : ''}`}>
                      <ArrowUpRight className="h-5 w-5 text-black" />
                    </div>
                  </button>
                )}
                {secondaryCTA && (
                  <button
                    onClick={secondaryCTA.onClick}
                    onMouseEnter={() => setSecondaryHover(true)}
                    onMouseLeave={() => setSecondaryHover(false)}
                    className="relative flex items-center bg-transparent border-2 border-black text-black pl-6 pr-14 py-3.5 rounded-full text-base font-semibold overflow-hidden group min-w-[200px]"
                    data-testid="button-hero-secondary"
                  >
                    <span className="relative z-10 mr-3">{secondaryCTA.label}</span>
                    <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-black rounded-full flex items-center justify-center transition-transform duration-300 ${secondaryHover ? 'scale-110' : ''}`}>
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
