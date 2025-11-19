import { motion } from "framer-motion";
import pregnantBelly from '@assets/pregnant-Illustrations-assets-mellow-yellow_1763571381811.png';
import flower from '@assets/flower-Illustrations-assets-mellow-yellow_1763571379874.png';
import planet from '@assets/space-Illustrations-assets-mellow-yellow_1763571606086.png';
import cloud from '@assets/cloud-Illustrations-assets-mellow-yellow_1763571614043.png';
import doodle from '@assets/doodle-Illustrations-assets-mellow-yellow_1763571629355.png';
import teamPhoto from '@assets/Screenshot 2025-11-19 at 16.47.26_1763571625646.png';

export default function About() {
  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Floating illustrations with motion */}
      <motion.img
        src={pregnantBelly}
        alt=""
        className="fixed top-20 left-10 w-28 opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={flower}
        alt=""
        className="fixed top-40 right-20 w-24 opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, 18, 0],
          rotate: [6, -6, 6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.img
        src={planet}
        alt=""
        className="fixed top-1/3 left-1/4 w-32 opacity-60 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.img
        src={cloud}
        alt=""
        className="fixed bottom-40 right-32 w-32 opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.img
        src={pregnantBelly}
        alt=""
        className="fixed bottom-32 left-1/3 w-28 opacity-60 pointer-events-none z-0 hidden md:block"
        animate={{
          y: [0, -18, 0],
          rotate: [-6, 6, -6],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.img
        src={flower}
        alt=""
        className="fixed bottom-20 left-20 w-28 opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, 15, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />
      <motion.img
        src={planet}
        alt=""
        className="fixed bottom-1/2 right-16 w-24 opacity-60 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, -12, 0],
          rotate: [-7, 7, -7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title with doodle behind */}
            <div className="relative">
              {/* Doodle behind About Us */}
              <img
                src={doodle}
                alt=""
                className="absolute -top-16 -left-16 w-48 h-48 opacity-40 z-0"
              />
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900 relative z-10">
                About Us
              </h1>
              
              {/* Photo below About Us, offset to the left */}
              <div className="mt-12 -ml-8">
                <img
                  src={teamPhoto}
                  alt="Not Safe For Kids Podcast Team"
                  className="w-full max-w-md rounded-lg shadow-lg"
                  data-testid="img-about-team"
                />
              </div>
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
