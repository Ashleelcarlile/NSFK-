import { motion } from "framer-motion";
import rockOnImage from "@assets/rock-on-grunge_1763564824906.png";
import laptopImage from "@assets/laptop-grunge_1763564826655.png";
import babyHandImage from "@assets/hand-grunge (1)_1763565023807.png";
import mouthImage from "@assets/mouth-grunge_1763565026374.png";
import pregnantImage from "@assets/pregnant-Illustrations-assets_1763569667487.png";
import heartsImage from "@assets/heart1-Illustrations-assets_1763569671668.png";
import flowerImage from "@assets/flower-Illustrations-assets_1763569680450.png";

export default function FloatingIcons() {
  return (
    <>
      {/* Mouth - Much lower to avoid carousel */}
      <motion.img
        src={mouthImage}
        alt=""
        className="fixed top-3/4 left-1/4 w-24 md:w-32 opacity-12 pointer-events-none z-0 hidden md:block"
        animate={{
          y: [0, -12, 0],
          rotate: [-6, 6, -6],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Baby on Hand - Middle Left (below carousel area) */}
      <motion.img
        src={babyHandImage}
        alt=""
        className="fixed top-1/2 left-4 w-28 md:w-36 opacity-15 pointer-events-none z-0"
        animate={{
          y: [0, 20, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Laptop - Middle Center Right */}
      <motion.img
        src={laptopImage}
        alt=""
        className="fixed top-1/2 left-2/3 w-32 md:w-40 opacity-10 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, 18, 0],
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 7.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Mouth with Piercing - Lower Middle Right (away from top) */}
      <motion.img
        src={mouthImage}
        alt=""
        className="fixed top-3/5 right-8 w-24 md:w-32 opacity-15 pointer-events-none z-0"
        animate={{
          y: [0, -18, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Rock On - Lower Middle Left */}
      <motion.img
        src={rockOnImage}
        alt=""
        className="fixed bottom-1/3 left-1/4 w-28 md:w-36 opacity-12 pointer-events-none z-0 hidden md:block"
        animate={{
          y: [0, -16, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 7.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Baby Hand - Lower Right */}
      <motion.img
        src={babyHandImage}
        alt=""
        className="fixed bottom-32 right-16 w-32 md:w-40 opacity-14 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, 14, 0],
          rotate: [-7, 7, -7],
        }}
        transition={{
          duration: 6.9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
      />

      {/* Laptop - Bottom Left */}
      <motion.img
        src={laptopImage}
        alt=""
        className="fixed bottom-16 left-12 w-40 md:w-48 opacity-15 pointer-events-none z-0"
        animate={{
          y: [0, 15, 0],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Rock On Hand - Bottom Right */}
      <motion.img
        src={rockOnImage}
        alt=""
        className="fixed bottom-32 right-20 w-24 md:w-32 opacity-10 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </>
  );
}
