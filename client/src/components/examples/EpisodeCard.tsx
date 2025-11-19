import EpisodeCard from '../EpisodeCard';
import episodeImg from '@assets/generated_images/Episode_thumbnail_artwork_one_c0701a6d.png';

export default function EpisodeCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <EpisodeCard
        thumbnail={episodeImg}
        title="The Future of Technology"
        date="Nov 15, 2025"
        duration="45 min"
        description="Exploring emerging trends in AI, blockchain, and quantum computing with industry experts."
        onPlay={() => console.log('Play episode clicked')}
      />
    </div>
  );
}
