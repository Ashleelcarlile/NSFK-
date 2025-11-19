import Hero from '../Hero';
import heroImage from '@assets/generated_images/Podcast_studio_hero_image_937d5396.png';

export default function HeroExample() {
  return (
    <Hero
      imageSrc={heroImage}
      title="Welcome to PodcastHub"
      subtitle="Engaging conversations, inspiring stories, unfiltered insights"
      primaryCTA={{
        label: "Listen Now",
        onClick: () => console.log('Listen Now clicked'),
      }}
      secondaryCTA={{
        label: "Browse Episodes",
        onClick: () => console.log('Browse Episodes clicked'),
      }}
    />
  );
}
