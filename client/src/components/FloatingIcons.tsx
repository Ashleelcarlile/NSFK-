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
      {/* Baby on Hand - Section 3: Discovery, left side */}
      <motion.img
        src={babyHandImage}
        alt=""
        className="fixed top-[110vh] left-4 w-28 md:w-36 opacity-40 pointer-events-none z-0"
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

      {/* Laptop - Section 3: Discovery, right side */}
      <motion.img
        src={laptopImage}
        alt=""
        className="fixed top-[115vh] right-8 w-32 md:w-40 opacity-35 pointer-events-none z-0"
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

      {/* Baby Hand - Section 3/4: Mid episodes, center left */}
      <motion.img
        src={babyHandImage}
        alt=""
        className="fixed top-[140vh] left-12 w-32 md:w-40 opacity-35 pointer-events-none z-0 hidden lg:block"
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

      {/* Laptop - Section 4: Hosts section, center right */}
      <motion.img
        src={laptopImage}
        alt=""
        className="fixed top-[180vh] left-2/3 w-32 md:w-40 opacity-30 pointer-events-none z-0 hidden lg:block"
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

      {/* Baby Hand - Section 4: Hosts section, right */}
      <motion.img
        src={babyHandImage}
        alt=""
        className="fixed top-[195vh] right-16 w-32 md:w-40 opacity-35 pointer-events-none z-0 hidden lg:block"
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

      {/* Laptop - Lower sections */}
      <motion.img
        src={laptopImage}
        alt=""
        className="fixed top-[220vh] left-12 w-40 md:w-48 opacity-40 pointer-events-none z-0"
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
    </>
  );
}
