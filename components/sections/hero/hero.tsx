"use client";

import { useState } from "react";

import type { Hero as HeroType } from "@/types/homepage";

import HeroContent from "./hero-content";
import HeroSlider from "./hero-slider";

interface HeroProps {
  hero: HeroType[];
}

const Hero = ({ hero }: HeroProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        w-full

        h-[500px]
        sm:h-[520px]
        md:h-[560px]
        lg:h-[580px]
        xl:h-[620px]
      "
    >
      <HeroSlider
        hero={hero}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(255,255,255,.96) 0%,
              rgba(255,255,255,.90) 20%,
              rgba(255,255,255,.72) 35%,
              rgba(255,255,255,.30) 52%,
              rgba(255,255,255,0) 72%
            )
          `,
        }}
      />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          w-full
          max-w-[1400px]
          items-center
          px-5
          md:px-10
          xl:px-14
        "
      >
        <div className="w-full max-w-[560px]">
          <HeroContent hero={hero} selectedIndex={selectedIndex} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
