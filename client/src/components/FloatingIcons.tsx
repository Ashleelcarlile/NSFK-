import { motion } from "framer-motion";
import rockOnImage from "@assets/rock-on-grunge_1763564824906.png";
import laptopImage from "@assets/laptop-grunge_1763564826655.png";
import babyHandImage from "@assets/hand-grunge (1)_1763565023807.png";
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

      {/* Rock Hand - Bottom right corner */}
      <motion.img
        src={rockOnImage}
        alt=""
        className="absolute bottom-4 right-12 w-28 md:w-36 opacity-40 pointer-events-none z-0 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
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

    </>
  );
}
