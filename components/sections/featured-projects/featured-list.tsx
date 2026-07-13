"use client";

import type { Project } from "@/types/homepage";

import ProjectItem from "./project-item";

interface FeaturedListProps {
  projects: Project[];
  activeProject: number;
  onSelect: (index: number) => void;
}

const FeaturedList = ({
  projects,
  activeProject,
  onSelect,
}: FeaturedListProps) => {
  return (
    <div
      className="
          flex
          max-h-[430px]
          flex-col
          gap-5
          overflow-y-auto
          pr-2
          scrollbar-thin
          scrollbar-thumb-[#D8A41D]
          scrollbar-track-white/10
          mb-5
        "
    >
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          active={index === activeProject}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default FeaturedList;
