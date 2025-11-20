import { motion } from "framer-motion";
import rockOnImage from "@assets/rock-on-grunge_1763564824906.png";
import laptopImage from "@assets/laptop-grunge_1763564826655.png";
import babyHandImage from "@assets/hand-grunge (1)_1763565023807.png";
import mouthImage from "@assets/mouth-grunge_1763638308397.png";
import pregnantImage from "@assets/pregnant-Illustrations-assets_1763569667487.png";
import heartsImage from "@assets/heart1-Illustrations-assets_1763569671668.png";
import flowerImage from "@assets/flower-Illustrations-assets_1763569680450.png";

export default function FloatingIcons() {
  return (
    <>
      {/* Baby on Hand - Top left of section */}
      <motion.img
        src={babyHandImage}
        alt=""
        className="absolute top-16 left-4 w-28 md:w-36 opacity-40 pointer-events-none z-0"
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

      {/* Mouth - Middle left */}
      <motion.img
        src={mouthImage}
        alt=""
        className="absolute top-64 left-12 w-24 md:w-32 opacity-35 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, 12, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Laptop - Top right of section */}
      <motion.img
        src={laptopImage}
        alt=""
        className="absolute top-20 right-8 w-32 md:w-40 opacity-35 pointer-events-none z-0"
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

      {/* Rock Hand - Center-right */}
      <motion.img
        src={rockOnImage}
        alt=""
        className="absolute top-1/2 left-1/2 translate-x-12 md:translate-x-20 -translate-y-1/2 w-32 md:w-40 opacity-35 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, 15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

    </>
  );
}
