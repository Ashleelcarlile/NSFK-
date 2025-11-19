import photo1 from '@assets/Screenshot 2025-11-19 at 16.47.20_1763570865707.png';
import photo2 from '@assets/Screenshot 2025-11-19 at 16.47.26_1763570868241.png';
import photo3 from '@assets/Screenshot 2025-11-19 at 16.47.32_1763570871200.png';

export default function About() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">About Us</h1>
          
          {/* Photo Collage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Large Photo - Takes full left column */}
            <div className="md:row-span-2">
              <img
                src={photo1}
                alt="Not Safe For Kids Podcast Hosts"
                className="w-full h-full object-cover rounded-lg"
                data-testid="img-about-1"
              />
            </div>
            
            {/* Two stacked photos on right */}
            <div>
              <img
                src={photo2}
                alt="Not Safe For Kids Podcast Team"
                className="w-full h-full object-cover rounded-lg"
                data-testid="img-about-2"
              />
            </div>
            <div>
              <img
                src={photo3}
                alt="Not Safe For Kids Podcast"
                className="w-full h-full object-cover rounded-lg"
                data-testid="img-about-3"
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
