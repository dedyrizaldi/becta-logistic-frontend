"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CTAContent from "./cta-content";
import VideoButton from "./video-button";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden
        mt-1 sm:mt-0
        mb-1 sm:mt-0
        lg:py-2
        h-[170px]
        md:h-[220px]
        lg:h-[280px]
        "
    >
      {/* Background */}

      <div
        className="relative h-[170px]
        md:h-[220px]
        lg:h-[280px]"
      >
        <Image
          src="/cta/cta-bg.png"
          alt="Becta Logistics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r

            from-[#071C3A]/90
            via-[#071C3A]/45
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            absolute
            inset-0

            mx-auto

            flex

            max-w-7xl

            items-center
            justify-between

            px-6
            lg:px-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <CTAContent />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <VideoButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
