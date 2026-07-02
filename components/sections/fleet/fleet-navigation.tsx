"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";

interface FleetNavigationProps {
  emblaApi: EmblaCarouselType | undefined;
}

const FleetNavigation = ({ emblaApi }: FleetNavigationProps) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
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

  if (!emblaApi) return null;

  return (
    <>
      {/* Previous */}

      <button
        onClick={() => emblaApi.scrollPrev()}
        disabled={prevBtnDisabled}
        className="
          absolute
          left-0
          top-1/2
          z-20

          hidden
          -translate-x-1/2
          -translate-y-1/2

          lg:flex

          h-12
          w-12

          items-center
          justify-center

          rounded-full

          border
          border-slate-200

          bg-white

          shadow-lg

          transition-all
          duration-300

          hover:bg-[#D8A41D]
          hover:text-white

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}

      <button
        onClick={() => emblaApi.scrollNext()}
        disabled={nextBtnDisabled}
        className="
          absolute
          right-0
          top-1/2
          z-20

          hidden
          translate-x-1/2
          -translate-y-1/2

          lg:flex

          h-12
          w-12

          items-center
          justify-center

          rounded-full

          border
          border-slate-200

          bg-white

          shadow-lg

          transition-all
          duration-300

          hover:bg-[#D8A41D]
          hover:text-white

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
};

export default FleetNavigation;
