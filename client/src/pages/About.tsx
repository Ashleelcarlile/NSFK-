import pregnantBelly from '@assets/pregnant-Illustrations-assets-mellow-yellow_1763571381811.png';
import flower from '@assets/flower-Illustrations-assets-mellow-yellow_1763571379874.png';
import planet from '@assets/space-Illustrations-assets-mellow-yellow_1763571606086.png';
import cloud from '@assets/cloud-Illustrations-assets-mellow-yellow_1763571614043.png';

export default function About() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Scattered illustrations throughout the page - more visible */}
      <img
        src={pregnantBelly}
        alt=""
        className="absolute top-20 left-10 w-28 h-28 opacity-70 z-0"
      />
      <img
        src={flower}
        alt=""
        className="absolute top-40 right-20 w-24 h-24 opacity-70 z-0"
      />
      <img
        src={planet}
        alt=""
        className="absolute top-60 left-1/4 w-32 h-32 opacity-60 z-0"
      />
      <img
        src={cloud}
        alt=""
        className="absolute bottom-40 right-32 w-32 h-32 opacity-70 z-0"
      />
      <img
        src={pregnantBelly}
        alt=""
        className="absolute bottom-32 right-1/3 w-28 h-28 opacity-60 z-0"
      />
      <img
        src={flower}
        alt=""
        className="absolute bottom-20 left-20 w-28 h-28 opacity-70 z-0"
      />
      <img
        src={planet}
        alt=""
        className="absolute bottom-60 left-1/3 w-24 h-24 opacity-60 z-0"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900">
                About Us
              </h1>
            </div>

            {/* Right Column - About Text with line */}
            <div className="relative">
              {/* Short thick vertical line */}
              <div className="hidden lg:block absolute -left-8 top-0 w-1 h-32 bg-gray-800"></div>
              
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
          </div>
        </div>
      </section>
    </div>
  );
}
