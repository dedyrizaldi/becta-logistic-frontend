"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const FeaturedMain = () => {
  const t = useTranslations("featuredProjects");

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/10
      "
    >
      {/* Image */}

      <Image
        src="/projects/project-1.png"
        alt={t("morowali")}
        width={900}
        height={600}
        className="
          h-full
          min-h-[300px]
          lg:min-h-[330px]
          xl:min-h-[360px]
          w-full
          object-cover
          transition-transform
          duration-700

          group-hover:scale-105
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#071C3A]/95
          via-[#071C3A]/30
          to-transparent
        "
      />

      {/* Badge */}

      <div
        className="
          absolute
          left-5
          top-5

          rounded-full

          bg-[#D8A41D]

          px-3
          py-1

          text-[9px]
          font-bold
          uppercase
          tracking-[0.25em]

          text-[#071C3A]
        "
      >
        FEATURED
      </div>

      {/* Content */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0

          p-5

          lg:p-6
        "
      >
        <h3
          className="
            max-w-md

            text-[22px]
            font-bold
            leading-tight
            text-white

            lg:text-[26px]
          "
        >
          {t("morowali")}
        </h3>

        {/* Meta */}

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-5

            text-[12px]
            text-slate-300
          "
        >
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#D8A41D]" />
            Morowali, Sulawesi Tengah
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={14} className="text-[#D8A41D]" />
            May 2024
          </div>
        </div>

        {/* Arrow */}

        <button
          className="
            absolute

            bottom-5
            right-5

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            bg-[#D8A41D]

            transition-all
            duration-300

            hover:scale-110
          "
        >
          <ArrowRight size={18} className="text-[#071C3A]" />
        </button>
      </div>
    </article>
  );
};

export default FeaturedMain;
