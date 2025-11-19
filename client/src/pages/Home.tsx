import Hero from "@/components/Hero";
import EpisodeCard from "@/components/EpisodeCard";
import HostCard from "@/components/HostCard";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/Screenshot 2025-11-19 at 12.08.57_1763561486779.png';
import episode1 from '@assets/generated_images/Episode_thumbnail_artwork_one_c0701a6d.png';
import episode2 from '@assets/generated_images/Episode_thumbnail_artwork_two_8052833c.png';
import episode3 from '@assets/generated_images/Episode_thumbnail_artwork_three_820ed418.png';
import host1 from '@assets/generated_images/Male_podcast_host_portrait_16783c7c.png';
import host2 from '@assets/generated_images/Female_podcast_host_portrait_4637b335.png';

export default function Home() {
  const episodes = [
    {
      id: 1,
      thumbnail: episode1,
      title: "The Future of Technology",
      date: "Nov 15, 2025",
      duration: "45 min",
      description: "Exploring emerging trends in AI, blockchain, and quantum computing with industry experts.",
    },
    {
      id: 2,
      thumbnail: episode2,
      title: "Creative Entrepreneurship",
      date: "Nov 10, 2025",
      duration: "38 min",
      description: "How creators are building sustainable businesses in the digital age.",
    },
    {
      id: 3,
      thumbnail: episode3,
      title: "Mindful Leadership",
      date: "Nov 5, 2025",
      duration: "52 min",
      description: "Leading with empathy and authenticity in modern organizations.",
    },
  ];

  return (
    <div>
      <Hero
        imageSrc={heroImage}
        title=""
        primaryCTA={{
          label: "Listen Now",
          onClick: () => console.log('Listen Now clicked'),
        }}
        secondaryCTA={{
          label: "Browse Episodes",
          onClick: () => console.log('Browse Episodes clicked'),
        }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Episodes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into our most popular conversations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                {...episode}
                onPlay={() => console.log(`Playing episode: ${episode.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
