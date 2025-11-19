import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import EpisodeCard from "@/components/EpisodeCard";
import HostCard from "@/components/HostCard";
import FloatingIcons from "@/components/FloatingIcons";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/Screenshot 2025-11-19 at 12.08.57_1763561486779.png';
import host1 from '@assets/generated_images/Male_podcast_host_portrait_16783c7c.png';
import host2 from '@assets/generated_images/Female_podcast_host_portrait_4637b335.png';

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
          onClick: () => console.log('Subscribe clicked'),
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Your Hosts</h2>
            <p className="text-xl text-muted-foreground">
              The voices behind the conversations
            </p>
          </div>
          <div className="space-y-20">
            <HostCard
              image={host1}
              name="Alex Johnson"
              role="Lead Host & Founder"
              bio="Alex brings over 10 years of broadcasting experience to PodcastHub. With a passion for storytelling and a knack for asking the right questions, he creates conversations that resonate with audiences worldwide."
            />
            <HostCard
              image={host2}
              name="Sarah Mitchell"
              role="Co-Host & Producer"
              bio="Sarah's background in journalism and documentary filmmaking brings depth and nuance to every episode. She's passionate about uncovering untold stories and giving voice to diverse perspectives."
              reverse
            />
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
            <Button size="lg" data-testid="button-subscribe-home">
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
