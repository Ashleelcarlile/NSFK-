import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from '@assets/generated_images/Team_photo_for_about_page_4979476b.png';

export default function About() {
  const values = [
    {
      title: "Authentic Conversations",
      description: "We believe in real, unscripted dialogue that explores ideas deeply and honestly.",
    },
    {
      title: "Diverse Perspectives",
      description: "Every episode features voices from different backgrounds, industries, and experiences.",
    },
    {
      title: "Community First",
      description: "Our listeners are at the heart of everything we do, shaping topics and driving conversations.",
    },
  ];

  return (
    <div>
      <Hero
        imageSrc={teamImage}
        title="Our Story"
        subtitle="Building a platform for meaningful dialogue"
        height="60vh"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="font-serif text-lg leading-relaxed space-y-6 text-muted-foreground">
            <p>
              PodcastHub was born from a simple idea: that the best conversations happen when
              people come together with curiosity, openness, and authenticity. In 2020, we
              started recording discussions in a small home studio, never imagining where this
              journey would take us.
            </p>
            <p>
              Today, we've grown into a community of over 10,000 listeners across the globe,
              all united by a love for thoughtful dialogue and diverse perspectives. Our
              episodes have featured entrepreneurs, artists, scientists, activists, and
              everyday people with extraordinary stories to share.
            </p>
            <p>
              What sets us apart is our commitment to depth over virality, understanding over
              controversy, and connection over content. Every episode is crafted with care,
              ensuring that both our guests and our listeners walk away with something valuable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every conversation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want to be a guest?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for interesting people with unique perspectives to join us.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2"
            data-testid="link-contact"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
