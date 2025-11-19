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

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Listen Now
        </h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-16">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
