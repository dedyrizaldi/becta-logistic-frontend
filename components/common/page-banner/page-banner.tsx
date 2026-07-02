"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Breadcrumb from "./breadcrumb";

interface PageBannerProps {
  title: string;
  description?: string;
  image: string;
}

const PageBanner = ({ title, description, image }: PageBannerProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}

      <div className="relative h-[300px] md:h-[360px] lg:h-[420px]">
        <Image
          src={image}
          alt={title}
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
            via-[#071C3A]/70
            to-[#071C3A]/50
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

            flex-col
            justify-center

            px-6
            lg:px-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span
              className="
                inline-block

                rounded-full

                border
                border-[#D8A41D]

                bg-[#D8A41D]/10

                px-4
                py-1

                text-xs
                font-semibold
                uppercase
                tracking-[.3em]

                text-[#D8A41D]
              "
            >
              Becta Logistics
            </span>

            <h1
              className="
                mt-5

                text-4xl
                font-black

                text-white

                md:text-5xl
                lg:text-6xl
              "
            >
              {title}
            </h1>

            {description && (
              <p
                className="
                  mt-5

                  max-w-2xl

                  text-white/80

                  md:text-lg
                "
              >
                {description}
              </p>
            )}

            <div className="mt-8">
              <Breadcrumb current={title} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
