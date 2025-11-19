import pregnantBelly from '@assets/pregnant-Illustrations-assets-mellow-yellow_1763571381811.png';
import flower from '@assets/flower-Illustrations-assets-mellow-yellow_1763571379874.png';

export default function About() {
  return (
    <div className="bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title and Illustration */}
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900">
                About Us
              </h1>
              
              {/* Decorative illustration below title */}
              <div className="mt-12">
                <img
                  src={pregnantBelly}
                  alt=""
                  className="w-32 h-32"
                />
              </div>
            </div>

            {/* Vertical divider line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

            {/* Right Column - About Text */}
            <div className="space-y-6 text-gray-900">
              <h2 className="text-2xl font-bold">TL;DR</h2>
              <p className="text-lg leading-relaxed">
                Not Safe For Kids is a podcast where four mums navigate the wild, wonderful, and sometimes chaotic world of parenthood. From the highs of milestones to the lows of sleepless nights, we're here to share the real, unfiltered stories that happen behind closed doors.
              </p>
              <p className="text-lg leading-relaxed">
                Join us as we laugh, cry, and commiserate over the adventures of raising kids in a world that's constantly evolving. Whether you're a parent, planning to be one, or just curious about the madness, this podcast is your safe space to embrace the messy, beautiful journey of motherhood.
              </p>
            </div>
          </div>

          {/* Decorative flower at bottom right */}
          <div className="flex justify-end mt-20">
            <img
              src={flower}
              alt=""
              className="w-24 h-24"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
