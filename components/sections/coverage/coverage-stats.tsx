"use client";

import { coverageStats } from "@/constants/coverage";
import StatCard from "./stat-card";

const CoverageStats = () => {
  return (
    <div
      className="
        flex
        h-[160px]
        sm:h-[330px]
        lg:h-[330px]
        bg-[#D8A41D]
        
      "
    >
      {coverageStats.map((item, index) => (
        <div
          key={item.titleKey}
          className={`
            flex-1
            flex
            items-center
            justify-center

            ${
              index !== coverageStats.length - 1
                ? "border-r border-white/20"
                : ""
            }
          `}
        >
          <StatCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default CoverageStats;
