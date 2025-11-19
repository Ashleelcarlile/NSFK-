import EpisodeCard from '../EpisodeCard';
import episodeImg from '@assets/generated_images/Episode_thumbnail_artwork_one_c0701a6d.png';

export default function EpisodeCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <EpisodeCard
        thumbnail={episodeImg}
        episodeNumber="Episode 01"
        host="Max Hudson"
        title="Mindful Growth in Everyday Life"
        category="Mental Health, Personal Development"
        duration="1 hr 24 mins"
        onPlay={() => console.log('Play episode clicked')}
      />
    </div>
  );
}
