import { useRef, useState } from 'react';
import spotifyLogo from '@assets/spotify.png';
import appleLogo from '@assets/apple-podcasts.png';
import youtubeLogo from '@assets/youtube.png';
import amazonLogo from '@assets/amazon-music.png';
import iheartLogo from '@assets/iheartradio.png';
import podbeanLogo from '@assets/podbean.png';
import playerFmLogo from '@assets/player-fm.png';
import boomplayLogo from '@assets/boomplay.png';
import listenNotesLogo from '@assets/listen-notes.png';

export default function LogoCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const logos = [
    { src: spotifyLogo, alt: "Spotify" },
    { src: appleLogo, alt: "Apple Podcasts" },
    { src: youtubeLogo, alt: "YouTube" },
    { src: amazonLogo, alt: "Amazon Music" },
    { src: iheartLogo, alt: "iHeartRadio" },
    { src: podbeanLogo, alt: "Podbean" },
    { src: playerFmLogo, alt: "Player FM" },
    { src: boomplayLogo, alt: "Boomplay" },
    { src: listenNotesLogo, alt: "Listen Notes" },
  ];

  // Create multiple duplicates for seamless infinite loop
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
    <section className="py-4 md:py-6 px-4 mb-8 md:mb-12 lg:mb-16 relative">
      {/* Background banner */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 select-none"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-8 w-auto object-contain pointer-events-none"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
