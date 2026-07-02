"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectItemProps {
  image: string;
  titleKey: string;
  location: string;
  date: string;
  active?: boolean;
  onClick?: () => void;
}

const ProjectItem = ({
  image,
  titleKey,
  location,
  date,
  active = false,
  onClick,
}: ProjectItemProps) => {
  const t = useTranslations("featuredProjects");

  return (
    <button
      onClick={onClick}
      className={`
        group
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        border
        p-2.5
        text-left
        transition-all
        duration-300

        ${
          active
            ? "border-[#D8A41D] bg-white/5"
            : "border-white/10 hover:border-[#D8A41D]/50 hover:bg-white/5"
        }
      `}
    >
      {/* Thumbnail */}

      <div
        className="
          relative
          h-16
          w-24
          shrink-0
          overflow-hidden
          rounded-md
        "
      >
        <Image
          src={image}
          alt={t(titleKey)}
          quality={75}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500

            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <h3
          className="
            line-clamp-2
            text-[13px]
            font-semibold
            leading-5
            text-white
            transition-colors

            group-hover:text-[#D8A41D]
          "
        >
          {t(titleKey)}
        </h3>

        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <MapPin size={12} className="shrink-0 text-[#D8A41D]" />

            <span className="truncate">{location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <CalendarDays size={12} className="shrink-0 text-[#D8A41D]" />

            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Arrow */}

      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full

          bg-[#D8A41D]

          transition-all
          duration-300

          group-hover:scale-110
        "
      >
        <ArrowRight size={14} className="text-[#071C3A]" />
      </div>
    </button>
  );
};

export default ProjectItem;
