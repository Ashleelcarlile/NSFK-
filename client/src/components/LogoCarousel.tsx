import { useRef, useState } from 'react';
import spotifyLogo from '@assets/spotify.png';
import appleLogo from '@assets/apple-podcasts.png';
import youtubeLogo from '@assets/youtube.png';
import amazonLogo from '@assets/amazon-music.png';
import iheartLogo from '@assets/iheartradio.png';
import podbeanLogo from '@assets/podbean.png';
import playerFmLogo from '@assets/player-fm.png';
import boomplayLogo from '@assets/boomplay.png';

export default function LogoCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const logos = [
    { src: spotifyLogo, alt: "Spotify", url: "https://open.spotify.com/show/78YroXH545Wk9luVTz91X8" },
    { src: appleLogo, alt: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/not-safe-for-kids-pilot/id1821373205" },
    { src: youtubeLogo, alt: "YouTube", url: "https://www.youtube.com/@notsafeforkidspod" },
    { src: amazonLogo, alt: "Amazon Music", url: "https://music.amazon.com/podcasts/364c65d9-a2ed-495a-9dcf-9603eaf08b6a" },
    { src: iheartLogo, alt: "iHeartRadio", url: "https://iheart.com/podcast/281793884" },
    { src: podbeanLogo, alt: "Podbean", url: "https://www.podbean.com/pw/pbblog-kvnid-13d4f1f" },
    { src: playerFmLogo, alt: "Player FM", url: "https://player.fm/series/3672504" },
    { src: boomplayLogo, alt: "Boomplay", url: "https://www.boomplaymusic.com/podcasts/133881" },
  ];

  // Create multiple sets for seamless scrolling loop
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-6 px-4 mb-8 md:mb-12 lg:mb-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-4 md:mb-6 uppercase tracking-wider">
          Listen Now
        </h3>
        <div 
          ref={scrollContainerRef}
          className="relative overflow-x-auto overflow-y-hidden scrollbar-hide group cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          <div className={`flex gap-8 ${!isDragging ? 'animate-scroll group-hover:[animation-play-state:paused]' : ''}`}>
            {allLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 select-none"
                data-testid={`link-platform-${logo.alt.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 w-auto object-contain pointer-events-none"
                  draggable="false"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
