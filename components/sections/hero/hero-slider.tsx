"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { heroSlides } from "@/constants/hero";

const HeroSlider = () => {
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

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
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
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
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

      {/* Soft Dark Overlay */}

      <div className="absolute inset-0 bg-black/5" />

      {/* Bottom Indicator */}

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
        {heroSlides.map((_, index) => (
          <button
            key={index}
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
