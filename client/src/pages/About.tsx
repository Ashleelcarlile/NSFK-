import { useState } from "react";
import photo1 from '@assets/Screenshot 2025-11-19 at 16.47.20_1763570865707.png';
import photo2 from '@assets/Screenshot 2025-11-19 at 16.47.26_1763570868241.png';
import photo3 from '@assets/Screenshot 2025-11-19 at 16.47.32_1763570871200.png';

export default function About() {
  const photos = [photo1, photo2, photo3];
  const [centerIndex, setCenterIndex] = useState(1); // Start with middle photo (index 1)

  // Arrange photos so the selected one is in the center
  const getPhotoOrder = () => {
    const order = [];
    // Left photo
    order.push((centerIndex - 1 + photos.length) % photos.length);
    // Center photo
    order.push(centerIndex);
    // Right photo
    order.push((centerIndex + 1) % photos.length);
    return order;
  };

  const photoOrder = getPhotoOrder();

  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">About Us</h1>
          
          {/* Interactive Photo Carousel */}
          <div className="flex items-center justify-center gap-4 mb-16 px-4">
            {/* Left Photo - Smaller */}
            <div 
              className="w-1/4 cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setCenterIndex(photoOrder[0])}
              data-testid={`img-about-${photoOrder[0]}`}
            >
              <img
                src={photos[photoOrder[0]]}
                alt="Not Safe For Kids Podcast"
                className="w-full h-64 object-cover rounded-lg opacity-60 hover:opacity-80"
              />
            </div>

            {/* Center Photo - Larger */}
            <div className="w-1/2" data-testid={`img-about-center-${photoOrder[1]}`}>
              <img
                src={photos[photoOrder[1]]}
                alt="Not Safe For Kids Podcast Hosts"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Right Photo - Smaller */}
            <div 
              className="w-1/4 cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setCenterIndex(photoOrder[2])}
              data-testid={`img-about-${photoOrder[2]}`}
            >
              <img
                src={photos[photoOrder[2]]}
                alt="Not Safe For Kids Podcast"
                className="w-full h-64 object-cover rounded-lg opacity-60 hover:opacity-80"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/75 rounded-lg p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                Not Safe For Kids is a podcast where four mums navigate the wild, wonderful, and sometimes chaotic world of parenthood. From the highs of milestones to the lows of sleepless nights, we're here to share the real, unfiltered stories that happen behind closed doors. Join us as we laugh, cry, and commiserate over the adventures of raising kids in a world that's constantly evolving. Whether you're a parent, planning to be one, or just curious about the madness, this podcast is your safe space to embrace the messy, beautiful journey of motherhood.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
