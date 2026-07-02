"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

const VideoModal = ({ open, onClose }: VideoModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[9998]

              bg-black/80
              backdrop-blur-sm
            "
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed

              left-1/2
              top-1/2

              z-[9999]

              w-[92vw]
              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
              {/* Close */}

              <button
                onClick={onClose}
                className="
                  absolute
                  right-4
                  top-4

                  z-20

                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-black/70

                  text-white

                  transition

                  hover:bg-[#D8A41D]
                "
              >
                <X size={20} />
              </button>

              {/* Youtube */}

              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                  title="Becta Logistics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
