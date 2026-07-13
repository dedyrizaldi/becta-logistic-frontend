"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import type { Hero as HeroType } from "@/types/homepage";
import { mediaUrl } from "@/lib/media";

interface HeroSliderProps {
  hero: HeroType[];
  selectedIndex: number;
  onChange: (index: number) => void;
}

const HeroSlider = ({ hero, selectedIndex, onChange }: HeroSliderProps) => {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    onChange(emblaApi.selectedScrollSnap());
  }, [emblaApi, onChange]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* Background Slider */}

      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full">
          {hero.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={mediaUrl(slide.desktop_image)}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-cover
                  object-[78%_center]
                  select-none
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/5" />

      {/* Indicator */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-5
        "
      >
        {hero.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => emblaApi?.scrollTo(index)}
            className="flex items-center gap-3"
          >
            <span
              className={`
                text-sm
                font-semibold
                transition-all
                ${selectedIndex === index ? "text-white" : "text-white/50"}
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div
              className={`
                h-[2px]
                transition-all
                duration-500
                ${
                  selectedIndex === index
                    ? "w-16 bg-[#D8A41D]"
                    : "w-8 bg-white/40"
                }
              `}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default HeroSlider;
