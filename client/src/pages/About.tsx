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

      {/* Join Our Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Connect with fellow parents, share your stories, and never miss an episode. Follow us on social media and become part of the Not Safe For Kids family!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/notsafeforkidspod/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover-elevate active-elevate-2 transition-all"
              data-testid="link-instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@notsafeforkidspod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover-elevate active-elevate-2 transition-all"
              data-testid="link-youtube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
