"use client";

import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  titleKey: string;
}

const StatCard = ({ icon: Icon, value, suffix, titleKey }: StatCardProps) => {
  const t = useTranslations("coverage-home");

  return (
    <div
      className="
        group

        flex
        h-full
        flex-col
        items-center
        justify-center

        px-3
        py-5

        text-center

        transition-all
        duration-300
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          border
          border-white/20

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:bg-white/10
        "
      >
        <Icon size={20} strokeWidth={2} className="text-white" />
      </div>

      {/* Number */}

      <h3
        className="
          mt-4

          text-3xl
          font-black

          leading-none

          text-white

          lg:text-[36px]
        "
      >
        <CountUp end={value} duration={2} />
        {suffix}
      </h3>

      {/* Title */}

      <p
        className="
          mt-3

          max-w-[120px]

          text-[13px]
          font-medium
          leading-5

          text-white/90
        "
      >
        {t(titleKey)}
      </p>
    </div>
  );
};

export default StatCard;
