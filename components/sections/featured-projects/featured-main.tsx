"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import type { Project } from "@/types/homepage";

import { mediaUrl } from "@/lib/media";

interface FeaturedMainProps {
  projects: Project[];
  activeProject: number;
}
const FeaturedMain = ({ projects, activeProject }: FeaturedMainProps) => {
  const project = projects[activeProject];
  if (!project) return null;

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
        src={mediaUrl(project.thumbnail)}
        alt={project.title}
        width={900}
        height={600}
        priority
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
        {project.category.name}
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
          {project.title}
        </h3>

        {/* Client */}

        <p className="mt-3 text-sm text-[#D8A41D] font-semibold">
          {project.client}
        </p>

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

            {project.location}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={14} className="text-[#D8A41D]" />

            {new Date(project.completed_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Button */}

        <Link
          href={`/projects/${project.slug}`}
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
        </Link>
      </div>
    </article>
  );
};

export default FeaturedMain;
