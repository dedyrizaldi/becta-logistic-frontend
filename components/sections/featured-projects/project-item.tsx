"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import type { Project } from "@/types/homepage";

import { mediaUrl } from "@/lib/media";

interface ProjectItemProps {
  project: Project;
  active?: boolean;
  onClick?: () => void;
}

const ProjectItem = ({
  project,
  active = false,
  onClick,
}: ProjectItemProps) => {
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
          src={mediaUrl(project.thumbnail)}
          alt={project.title}
          fill
          sizes="96px"
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
        <p className="text-[10px] uppercase tracking-widest text-[#D8A41D]">
          {project.category.name}
        </p>

        <h3
          className="
            mt-1
            line-clamp-2
            text-[13px]
            font-semibold
            leading-5
            text-white
            transition-colors

            group-hover:text-[#D8A41D]
          "
        >
          {project.title}
        </h3>

        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <MapPin size={12} className="shrink-0 text-[#D8A41D]" />

            <span className="truncate">{project.location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <CalendarDays size={12} className="shrink-0 text-[#D8A41D]" />

            <span>
              {new Date(project.completed_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Detail */}

      <Link
        href={`/projects/${project.slug}`}
        onClick={(e) => e.stopPropagation()}
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
      </Link>
    </button>
  );
};

export default ProjectItem;
