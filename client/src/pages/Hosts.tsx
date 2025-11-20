import { Instagram } from "lucide-react";
import doodleWhite from '@assets/doodle-Illustrations-assets-white_1763579577683.png';
import doodleNameTag from '@assets/doodle-Illustrations-assets-white_1763580432961.png';
import keishaPhoto from '@assets/DSCF2440_1763580329647.jpg';
import ashleePhoto from '@assets/DSCF2268_1763580792853.jpg';
import holliePhoto from '@assets/DSCF2301_1763580875491.jpg';
import katePhoto from '@assets/DSCF2172_1763580939921.jpg';
import stripedBg from '@assets/stripe-2_1763632826305.png';
import mouthIcon from '@assets/mouth-grunge_1763633213473.png';
import babyHandIcon from '@assets/hand-grunge (1)_1763633210367.png';
import rockHandIcon from '@assets/rock-on-grunge_1763633216625.png';
import laptopIcon from '@assets/laptop-grunge_1763633219405.png';
import { motion } from "framer-motion";

const hosts = [
  {
    name: "Ashlee",
    photo: ashleePhoto,
    bio: "Business woman and ADHD-advocate. Loves bed, co-sleeping with her little man, and being led astray by her mates on nights out. Will always tell it to you straight and ask you 'how your heart's feeling' if you're overwhelmed - true BFF vibes right here.",
    instagram: "https://www.instagram.com/ashleecarlile?igsh=YzN2aWpueWJ6eXR0",
  },
  {
    name: "Kate",
    photo: katePhoto,
    bio: "Podcast obsessive and generally laid-back gal. Refuses to take life too seriously, will do anything for a laff and loves a good old moan to her mates. Will dabble in gossip at any given opportunity.",
    instagram: "https://www.instagram.com/kate.akyuz?igsh=Mm8zOHJ0YmN2cGRu",
  },
  {
    name: "Keisha",
    photo: keishaPhoto,
    bio: "Music fanatic and always out on the town. You can rely on this one for a good parenting story with the most infectious laugh thrown in. She IS the devil's advocate, a safe space for all who join us on the sofa.",
    instagram: "https://www.instagram.com/her.forte?igsh=NXZpdnU3eHBnbHpj",
  },
  {
    name: "Hollie",
    photo: holliePhoto,
    bio: "Health goddess and full of love and wisdom! Loves making babies and music with her man, being Northern, and having a right old giggle. Regularly slips into Nigerian accent when putting people straight, nothing gets past our Hollie.",
    instagram: "https://www.instagram.com/hollienwagboso?igsh=MWdzNHg4YXVnOHBybg==",
  },
];

export default function Hosts() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 sm:pt-32 md:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-24 md:mb-32 relative">
            {/* Striped background behind title */}
            <img
              src={stripedBg}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl opacity-90 pointer-events-none z-0"
            />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black relative z-10">Meet Your Hosts</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative">
            {/* Floating Icons - positioned in empty spaces, go behind cards when scrolling */}
            
            {/* Baby Hand with Lollipop - Far Left */}
            <motion.img
              src={babyHandIcon}
              alt=""
              className="absolute -top-8 -left-12 w-28 md:w-36 opacity-30 pointer-events-none z-10 hidden lg:block"
              animate={{
                y: [0, 20, 0],
                rotate: [-8, 8, -8],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Mouth Icon - Far Right */}
            <motion.img
              src={mouthIcon}
              alt=""
              className="absolute top-32 -right-8 w-20 md:w-28 opacity-35 pointer-events-none z-10 hidden lg:block"
              animate={{
                y: [0, 15, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Rock Hand - Center between cards */}
            <motion.img
              src={rockHandIcon}
              alt=""
              className="absolute top-[45%] left-1/2 -translate-x-1/2 w-24 md:w-32 opacity-25 pointer-events-none z-10 hidden xl:block"
              animate={{
                y: [0, 18, 0],
                rotate: [-6, 6, -6],
              }}
              transition={{
                duration: 6.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Laptop - Far Bottom Right */}
            <motion.img
              src={laptopIcon}
              alt=""
              className="absolute -bottom-12 -right-12 w-32 md:w-40 opacity-30 pointer-events-none z-10 hidden lg:block"
              animate={{
                y: [0, 16, 0],
                rotate: [4, -4, 4],
              }}
              transition={{
                duration: 7.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />

            {/* Baby Hand - Under Keisha (bottom left card) */}
            <motion.img
              src={babyHandIcon}
              alt=""
              className="absolute bottom-0 left-[20%] w-24 md:w-32 opacity-35 pointer-events-none z-10 hidden md:block"
              animate={{
                y: [0, 18, 0],
                rotate: [6, -6, 6],
              }}
              transition={{
                duration: 7.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />

            {hosts.map((host, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all relative z-20 ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                data-testid={`card-host-${index + 1}`}
              >
                <div className="flex flex-col md:flex-row md:min-h-80">
                  {/* Photo on top (mobile) / left (desktop) */}
                  <div className="flex-shrink-0 bg-white/75 rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden md:w-80">
                    <img
                      src={host.photo}
                      alt={host.name}
                      className="w-full h-64 md:h-full object-cover grayscale"
                      data-testid={`img-host-${index + 1}`}
                    />
                  </div>
                  
                  {/* Content below (mobile) / right (desktop) */}
                  <div className="flex-1 min-w-0 p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none bg-white flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h2 className="text-2xl font-bold leading-tight text-black" data-testid={`text-host-name-${index + 1}`}>
                        {host.name}
                      </h2>
                      <a
                        href={host.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover-elevate active-elevate-2"
                        data-testid={`link-instagram-${index + 1}`}
                        aria-label={`${host.name} Instagram`}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-black leading-relaxed" data-testid={`text-bio-${index + 1}`}>
                      {host.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
