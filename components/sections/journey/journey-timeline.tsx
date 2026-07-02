"use client";

import JourneyItem from "./journey-item";

import { journey } from "@/constants/journey";

const JourneyTimeline = () => {
  return (
    <div
      className="
        relative
        overflow-x-auto
        pb-2

        scrollbar-hide
      "
    >
      {/* Main Container */}

      <div
        className="
          relative
          flex
          min-w-[850px]
          items-start
          justify-between

          lg:min-w-0
        "
      >
        {/* Horizontal Line */}

        <div
          className="
            absolute
            left-0
            right-0
            top-7

            hidden
            h-[2px]

            bg-slate-300

            lg:block
          "
        />

        {journey.map((item, index) => (
          <JourneyItem
            key={item.year}
            year={item.year}
            titleKey={item.titleKey}
            icon={item.icon}
            isLast={index === journey.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
