"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import VideoModal from "./video-modal";

const VideoButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Play Company Profile Video"
        className="
          group
          relative

          flex
          items-center
          justify-center

          h-20
          w-20

          md:h-24
          md:w-24
        "
      >
        {/* Ripple 1 */}

        <motion.span
          className="
            absolute
            inset-0

            rounded-full

            border
            border-white/40
          "
          animate={{
            scale: [1, 1.6],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Ripple 2 */}

        <motion.span
          className="
            absolute
            inset-0

            rounded-full

            border
            border-white/20
          "
          animate={{
            scale: [1, 1.9],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Glow */}

        <div
          className="
            absolute

            h-20
            w-20

            rounded-full

            bg-white/10

            blur-xl
          "
        />

        {/* Main Button */}

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            relative
            z-10

            flex

            h-16
            w-16

            items-center
            justify-center

            rounded-full

            bg-white

            shadow-[0_10px_35px_rgba(0,0,0,.25)]

            transition-all
          "
        >
          <Play size={28} fill="#D8A41D" className="ml-1 text-[#D8A41D]" />
        </motion.div>
      </button>

      {/* Modal */}

      <VideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default VideoButton;
