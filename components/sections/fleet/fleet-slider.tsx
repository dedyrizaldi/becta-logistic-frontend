"use client";

import useEmblaCarousel from "embla-carousel-react";

import { fleet } from "@/constants/fleet";

import FleetCard from "./fleet-card";
import FleetNavigation from "./fleet-navigation";

const FleetSlider = () => {
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
          {fleet.map((item) => (
            <div
              key={item.id}
              className="
                min-w-0
                flex-[0_0_100%]

                px-3

                md:flex-[0_0_50%]

                xl:flex-[0_0_25%]
              "
            >
              <FleetCard
                image={item.image}
                name={item.name}
                length={item.length}
                beam={item.beam}
                cargo={item.cargo}
                speed={item.speed}
                status={item.status.toString() as "available" | "chartered"}
              />
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
