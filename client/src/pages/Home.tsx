import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import EpisodeCard from "@/components/EpisodeCard";
import FloatingIcons from "@/components/FloatingIcons";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/Screenshot 2025-11-19 at 12.08.57_1763561486779.png';
import hostsGroupPhoto from '@assets/Not Safe For Kids _Media Campaign Photoshoot _October 5, 2025_ BMURPHYFile 84_1763565217685.jpg';
import stripedBg from '@assets/stripe-2_1763569878970.png';

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
    <div>
      <FloatingIcons />
      <Hero
        imageSrc={heroImage}
        title=""
        primaryCTA={{
          label: "Start Listening",
          onClick: () => console.log('Start Listening clicked'),
        }}
        secondaryCTA={{
          label: "Subscribe",
          onClick: () => window.open('https://www.youtube.com/@notsafeforkidspod?sub_confirmation=1', '_blank'),
        }}
      />

      <LogoCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                  onPlay={() => console.log(`Playing episode: ${episode.title}`)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={hostsGroupPhoto}
                alt="Not Safe For Kids Podcast Hosts"
                className="w-full h-auto rounded-lg"
                data-testid="img-hosts-group"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left relative">
              <div className="relative inline-block mb-6">
                <img
                  src={stripedBg}
                  alt=""
                  className="absolute -left-8 top-1/2 -translate-y-1/2 w-64 h-24 object-cover opacity-40 -z-10"
                />
                <h2 className="text-4xl md:text-5xl font-bold relative z-10">
                  Meet Your Hosts
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Get to know the voices behind the conversations
              </p>
              <Link href="/hosts">
                <button
                  onMouseEnter={() => setHostsButtonHover(true)}
                  onMouseLeave={() => setHostsButtonHover(false)}
                  className="relative flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group"
                  data-testid="button-meet-hosts"
                  style={{ paddingRight: '4.5rem' }}
                >
                  <span className="relative z-10">Meet the Hosts</span>
                  <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${hostsButtonHover ? 'scale-110' : ''}`}>
                    <ArrowUpRight className="h-6 w-6 text-black" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to get the latest episodes and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border bg-background"
              data-testid="input-newsletter"
            />
            <Button size="lg" className="bg-black text-white hover:bg-black/90" data-testid="button-subscribe-home">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ listeners already subscribed
          </p>
        </div>
      </section>
    </div>
  );
}
