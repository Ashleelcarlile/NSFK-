import HostCard from '../HostCard';
import hostImg from '@assets/generated_images/Male_podcast_host_portrait_16783c7c.png';

export default function HostCardExample() {
  return (
    <div className="p-6 max-w-4xl">
      <HostCard
        image={hostImg}
        name="Alex Johnson"
        role="Lead Host & Founder"
        bio="Alex brings over 10 years of broadcasting experience to PodcastHub. With a passion for storytelling and a knack for asking the right questions, he creates conversations that resonate with audiences worldwide."
      />
    </div>
  );
}
