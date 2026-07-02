"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LoadingLogo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex items-center justify-center"
    >
      <Image
        src="/logo/logo.png"
        alt="Becta Logistics"
        width={260}
        height={80}
        priority
        className="
          h-14
          w-auto

          md:h-16

          lg:h-20
        "
      />
    </motion.div>
  );
};

export default LoadingLogo;
