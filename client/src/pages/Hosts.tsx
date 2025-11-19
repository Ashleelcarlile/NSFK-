import Hero from "@/components/Hero";
import HostCard from "@/components/HostCard";
import { Card, CardContent } from "@/components/ui/card";
import btsImage from '@assets/generated_images/Behind_the_scenes_photo_07cfc24c.png';
import host1 from '@assets/generated_images/Male_podcast_host_portrait_16783c7c.png';
import host2 from '@assets/generated_images/Female_podcast_host_portrait_4637b335.png';

export default function Hosts() {
  return (
    <div>
      <Hero
        imageSrc={btsImage}
        title="Meet Your Hosts"
        subtitle="The people bringing you conversations that matter"
        height="50vh"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          <HostCard
            image={host1}
            name="Alex Johnson"
            role="Lead Host & Founder"
            bio="Alex brings over 10 years of broadcasting experience to PodcastHub. Starting his career in community radio, he developed a deep appreciation for storytelling and authentic conversation. His background in journalism and philosophy informs his interviewing style—curious, thoughtful, and always seeking to understand the human element behind every story. When he's not recording, you'll find Alex reading, hiking, or exploring new coffee shops around the city."
          />

          <HostCard
            image={host2}
            name="Sarah Mitchell"
            role="Co-Host & Producer"
            bio="Sarah's journey into podcasting came through her work as a documentary filmmaker and investigative journalist. She has a talent for creating spaces where guests feel comfortable sharing their most profound insights and vulnerable moments. Her production expertise ensures every episode sounds as good as it feels. Sarah is passionate about amplifying underrepresented voices and exploring the intersection of culture, technology, and social change."
            reverse
          />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Behind the Scenes</h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into how we create the show
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every episode begins with extensive research and conversation prep. We spend
                  hours getting to know our guests, understanding their work, and crafting
                  questions that go beyond the surface. Our goal is always to create space for
                  genuine connection and discovery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Fun Fact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We record every episode twice—once as a test run where we work out technical
                  kinks and build rapport, and then the actual recording. This approach helps our
                  guests feel more comfortable and often leads to deeper, more meaningful
                  conversations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
