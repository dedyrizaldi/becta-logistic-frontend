"use client";

import useEmblaCarousel from "embla-carousel-react";

import type { Fleet } from "@/types/homepage";

import FleetCard from "./fleet-card";
import FleetNavigation from "./fleet-navigation";

interface FleetSliderProps {
  fleets: Fleet[];
}

const FleetSlider = ({ fleets }: FleetSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  return (
    <div className="relative">
      {/* Slider */}

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {fleets.map((fleet) => (
            <div
              key={fleet.id}
              className="
                min-w-0
                flex-[0_0_100%]

                px-3

                md:flex-[0_0_50%]

                xl:flex-[0_0_25%]
              "
            >
              <FleetCard fleet={fleet} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}

      <FleetNavigation emblaApi={emblaApi} />
    </div>
  );
};

export default FleetSlider;
