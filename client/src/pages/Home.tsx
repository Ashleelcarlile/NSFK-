import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import EpisodeCard from "@/components/EpisodeCard";
import FloatingIcons from "@/components/FloatingIcons";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/Screenshot 2025-11-19 at 12.08.57_1763561486779.png';
import heroImageMobile from '@assets/20251102-nfsk-artwork-3000x3000px-RGB_1763637645404.jpg';
import hostsGroupPhoto from '@assets/Not Safe For Kids _Media Campaign Photoshoot _October 5, 2025_ BMURPHYFile 84_1763565217685.jpg';
import stripedBg from '@assets/stripe-2_1763569878970.png';
import corner1 from '@assets/corner1-Illustrations-assets_1763570596737.png';
import corner2 from '@assets/corner2-Illustrations-assets_1763570594330.png';
import rockOnImage from '@assets/rock-on-grunge_1763564824906.png';
import babyHandImage from '@assets/hand-grunge (1)_1763565023807.png';
import tongueImage from '@assets/mouth-grunge_1763638747697.png';
import { motion } from "framer-motion";

interface Episode {
  id: number;
  youtubeId: string;
  title: string;
  host: string;
  publishedAt: string;
  thumbnail: string;
  duration: string;
}

const YOUTUBE_CHANNEL_HANDLE = "notsafeforkidspod";

export default function Home() {
  const [hostsButtonHover, setHostsButtonHover] = useState(false);
  
  const { data, isLoading, error } = useQuery<{ episodes: Episode[] }>({
    queryKey: ['/api/youtube/latest-episodes', YOUTUBE_CHANNEL_HANDLE],
    queryFn: async () => {
      const response = await fetch(`/api/youtube/latest-episodes?channelHandle=${YOUTUBE_CHANNEL_HANDLE}&maxResults=4`);
      if (!response.ok) {
        throw new Error('Failed to fetch episodes');
      }
      return response.json();
    },
  });

  const episodes = data?.episodes || [];

  return (
    <div className="relative">
      <Hero
        imageSrc={heroImage}
        mobileImageSrc={heroImageMobile}
        title=""
        primaryCTA={{
          label: "Listen",
          onClick: () => window.open('https://podcasts.apple.com/us/podcast/not-safe-for-kids-pilot/id1821373205', '_blank'),
        }}
        secondaryCTA={{
          label: "Subscribe",
          onClick: () => window.open('https://www.youtube.com/@notsafeforkidspod?sub_confirmation=1', '_blank'),
        }}
      />

      <div className="hidden sm:block">
        <LogoCarousel />
      </div>

      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 z-20">
        <div className="hidden sm:block">
          <FloatingIcons />
        </div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Discover the Latest Episodes<br />and Featured Highlights
            </h2>
          </div>
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Loading latest episodes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-xl text-destructive">Failed to load episodes. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {episodes.map((episode, index) => (
                <EpisodeCard
                  key={episode.id}
                  youtubeId={episode.youtubeId}
                  episodeNumber={`Episode ${String(episodes.length - index).padStart(2, '0')}`}
                  host={episode.host}
                  title={episode.title}
                  duration={episode.duration}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Floating Baby Hand with Lollipop - Right side */}
        <motion.img
          src={babyHandImage}
          alt=""
          className="absolute -top-4 md:top-0 right-8 w-40 md:w-48 lg:w-56 opacity-40 pointer-events-none z-10 hidden sm:block"
          animate={{
            y: [0, 20, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="w-full lg:w-1/2 relative">
              {/* Floating Tongue - Top Left */}
              <motion.img
                src={tongueImage}
                alt=""
                className="absolute -top-12 -left-8 w-24 md:w-32 opacity-40 pointer-events-none z-20 hidden sm:block"
                animate={{
                  y: [0, -12, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Top Left Corner */}
              <img
                src={corner1}
                alt=""
                className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 z-10"
              />
              {/* Top Right Corner */}
              <img
                src={corner2}
                alt=""
                className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 z-10 rotate-90"
              />
              {/* Bottom Left Corner */}
              <img
                src={corner2}
                alt=""
                className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 z-10 -rotate-90"
              />
              {/* Bottom Right Corner */}
              <img
                src={corner1}
                alt=""
                className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 z-10 rotate-180"
              />
              <img
                src={hostsGroupPhoto}
                alt="Not Safe For Kids Podcast Hosts"
                className="w-full h-auto rounded-lg object-cover max-h-[400px] md:max-h-[500px] lg:max-h-none"
                data-testid="img-hosts-group"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left relative">
              <div className="relative inline-block mb-6">
                <img
                  src={stripedBg}
                  alt=""
                  className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 w-48 md:w-64 h-20 md:h-24 object-cover opacity-40 -z-10 hidden sm:block"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative z-10">
                  Meet Your Hosts
                </h2>
              </div>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Four Mums. No Filter. Get to know the voices behind the conversations.
              </p>
              <Link href="/hosts">
                <button
                  onMouseEnter={() => setHostsButtonHover(true)}
                  onMouseLeave={() => setHostsButtonHover(false)}
                  className="relative flex items-center bg-black text-white pl-6 sm:pl-8 pr-20 sm:pr-16 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden group w-full sm:w-auto"
                  data-testid="button-meet-hosts"
                >
                  <span className="relative z-10 mr-6 sm:mr-4">Hiya</span>
                  <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${hostsButtonHover ? 'scale-110' : ''}`}>
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Up to Date</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Follow us on social media for the latest episodes and exclusive content
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://instagram.com/notsafeforkidspod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover-elevate active-elevate-2"
              data-testid="link-instagram-home"
            >
              <SiInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@notsafeforkidspod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover-elevate active-elevate-2"
              data-testid="link-youtube-home"
            >
              <SiYoutube className="h-5 w-5" />
              <span>YouTube</span>
            </a>
            <a
              href="https://tiktok.com/notsafeforkidspod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover-elevate active-elevate-2"
              data-testid="link-tiktok-home"
            >
              <SiTiktok className="h-5 w-5" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
