"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface MapMarkerProps {
  city: string;
  top: string;
  left: string;
}

const MapMarker = ({ city, top, left }: MapMarkerProps) => {
  return (
    <motion.div
      className="absolute z-20"
      style={{
        top,
        left,
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="group relative flex items-center justify-center">
        {/* Pulse */}

        <span
          className="
            absolute

            h-6
            w-6

            rounded-full

            bg-[#D8A41D]/40

            animate-ping
          "
        />

        {/* Glow */}

        <span
          className="
            absolute

            h-5
            w-5

            rounded-full

            bg-[#D8A41D]/30

            blur-md
          "
        />

        {/* Pin */}

        <motion.div
          whileHover={{
            scale: 1.25,
            y: -2,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            relative

            flex

            h-8
            w-8

            items-center
            justify-center

            rounded-full

            bg-[#D8A41D]

            shadow-lg
          "
        >
          <MapPin size={16} className="text-white" fill="white" />
        </motion.div>

        {/* Tooltip */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-10
            left-1/2

            -translate-x-1/2

            whitespace-nowrap

            rounded-md

            bg-white

            px-3
            py-1

            text-xs
            font-semibold

            text-[#0B2F63]

            opacity-0

            shadow-lg

            transition-all
            duration-300

            group-hover:-translate-y-1
            group-hover:opacity-100
          "
        >
          {city}
        </div>
      </div>
    </motion.div>
  );
};

export default MapMarker;
