import { motion } from "framer-motion";
import rockOnImage from "@assets/rock-on-grunge_1763564824906.png";
import laptopImage from "@assets/laptop-grunge_1763564826655.png";

export default function FloatingIcons() {
  return (
    <>
      {/* Rock On Hand - Top Right */}
      <motion.img
        src={rockOnImage}
        alt=""
        className="fixed top-20 right-10 w-32 md:w-40 opacity-20 pointer-events-none z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Laptop - Bottom Left */}
      <motion.img
        src={laptopImage}
        alt=""
        className="fixed bottom-20 left-10 w-40 md:w-48 opacity-15 pointer-events-none z-10"
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

      {/* Rock On Hand - Bottom Right (smaller) */}
      <motion.img
        src={rockOnImage}
        alt=""
        className="fixed bottom-32 right-20 w-24 md:w-32 opacity-10 pointer-events-none z-10 hidden lg:block"
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
