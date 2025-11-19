import photo1 from '@assets/Screenshot 2025-11-19 at 16.47.20_1763570865707.png';
import photo2 from '@assets/Screenshot 2025-11-19 at 16.47.26_1763570868241.png';
import photo3 from '@assets/Screenshot 2025-11-19 at 16.47.32_1763570871200.png';
import pregnantBelly from '@assets/pregnant-Illustrations-assets_1763571216513.png';
import hearts from '@assets/heart1-Illustrations-assets_1763571221748.png';

export default function About() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Not Safe For Kids Podcast
              </h1>
            </div>

            {/* Right Column - About Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">TL;DR</h2>
              <p className="text-lg leading-relaxed">
                Not Safe For Kids is a podcast where four mums navigate the wild, wonderful, and sometimes chaotic world of parenthood. From the highs of milestones to the lows of sleepless nights, we're here to share the real, unfiltered stories that happen behind closed doors.
              </p>
              <p className="text-lg leading-relaxed">
                Join us as we laugh, cry, and commiserate over the adventures of raising kids in a world that's constantly evolving. Whether you're a parent, planning to be one, or just curious about the madness, this podcast is your safe space to embrace the messy, beautiful journey of motherhood.
              </p>
            </div>
          </div>

          {/* Photos at bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <img
              src={photo1}
              alt="Not Safe For Kids Podcast Hosts"
              className="w-full h-64 object-cover rounded-lg"
              data-testid="img-about-1"
            />
            <img
              src={photo2}
              alt="Not Safe For Kids Podcast Team"
              className="w-full h-64 object-cover rounded-lg"
              data-testid="img-about-2"
            />
            <img
              src={photo3}
              alt="Not Safe For Kids Podcast"
              className="w-full h-64 object-cover rounded-lg"
              data-testid="img-about-3"
            />
          </div>

          {/* Decorative illustrations at the very bottom */}
          <div className="flex justify-end items-end gap-8 mt-16">
            <img
              src={hearts}
              alt=""
              className="w-12 h-12 opacity-30"
            />
            <img
              src={pregnantBelly}
              alt=""
              className="w-20 h-20 opacity-30"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
