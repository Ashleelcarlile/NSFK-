import spotifyLogo from '@assets/generated_images/Spotify_podcast_logo_76968f68.png';
import appleLogo from '@assets/generated_images/Apple_Podcasts_logo_e1c46c12.png';
import googleLogo from '@assets/generated_images/Google_Podcasts_logo_13020d90.png';
import youtubeLogo from '@assets/generated_images/YouTube_logo_dbc444ca.png';
import amazonLogo from '@assets/generated_images/Amazon_Music_logo_7dd6a06f.png';

export default function LogoCarousel() {
  const logos = [
    { src: spotifyLogo, alt: "Spotify" },
    { src: appleLogo, alt: "Apple Podcasts" },
    { src: googleLogo, alt: "Google Podcasts" },
    { src: youtubeLogo, alt: "YouTube" },
    { src: amazonLogo, alt: "Amazon Music" },
  ];

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-12 px-4 bg-background border-y">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Available On
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
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
