import type { Fleet } from "@/types/homepage";

import FleetHeader from "./fleet-header";
import FleetSlider from "./fleet-slider";

interface FleetSectionProps {
  fleets: Fleet[];
}

const FleetSection = ({ fleets }: FleetSectionProps) => {
  if (!fleets.length) return null;

  return (
    <section
      id="fleet"
      className="
        bg-[#F8FAFC]
        py-16

        lg:py-8
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-5

          lg:px-6
        "
      >
        <FleetHeader />

        <div className="mt-12">
          <FleetSlider fleets={fleets} />
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
