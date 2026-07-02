"use client";

import { AnimatePresence, motion } from "framer-motion";

import LoadingLogo from "./loading-logo";

interface LoadingScreenProps {
  show?: boolean;
}

const LoadingScreen = ({ show = true }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            fixed
            inset-0
            z-[99999]

            flex
            items-center
            justify-center

            bg-white
          "
        >
          <LoadingLogo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
