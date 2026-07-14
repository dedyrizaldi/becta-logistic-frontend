"use client";

import { useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import type { Fleet } from "@/types/homepage";

import FleetCard from "./fleet-card";
import FleetNavigation from "./fleet-navigation";
import { FleetDetailModal } from "./modal";

interface FleetSliderProps {
  fleets: Fleet[];
}

const FleetSlider = ({ fleets }: FleetSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetail = (slug: string) => {
    setSelectedSlug(slug);
    setModalOpen(true);
  };

  return (
    <>
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
                <FleetCard fleet={fleet} onViewDetail={handleViewDetail} />
              </div>
            ))}
          </div>
        </div>

        <FleetNavigation emblaApi={emblaApi} />
      </div>

      <FleetDetailModal
        slug={selectedSlug}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};

export default FleetSlider;
