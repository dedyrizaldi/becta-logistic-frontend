"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface JourneyItemProps {
  year: string;
  titleKey: string;
  icon: string;
  isLast?: boolean;
}

const JourneyItem = ({
  year,
  titleKey,
  icon,
  isLast = false,
}: JourneyItemProps) => {
  const t = useTranslations("journey");

  return (
    <div className="relative flex flex-1 flex-col items-center group">
      {/* Line */}

      {!isLast && (
        <div
          className="
            absolute
            top-7
            left-1/2

            hidden
            h-[2px]
            w-full

            bg-slate-300

            lg:block
          "
        />
      )}

      {/* Circle */}

      <div
        className="
          relative
          z-10

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          bg-[#0B2F63]

          shadow-lg

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:bg-[#D8A41D]
        "
      >
        <Image
          src={icon}
          alt={t(titleKey)}
          width={30}
          height={30}
          className="
            h-[40px]
            w-[40px]
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
            background-transparent
          "
        />
      </div>

      {/* Year */}

      <h3
        className="
          mt-5

          text-lg
          font-bold

          text-[#0B2F63]
        "
      >
        {year}
      </h3>

      {/* Title */}

      <p
        className="
          mt-2

          max-w-[110px]

          text-center

          text-[15px]
          leading-5
          text-slate-500
        "
      >
        {t(titleKey)}
      </p>
    </div>
  );
};

export default JourneyItem;
