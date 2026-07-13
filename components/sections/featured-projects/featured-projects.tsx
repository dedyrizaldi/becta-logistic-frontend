"use client";

import { useState } from "react";

import type { Project } from "@/types/homepage";

import FeaturedHeader from "./featured-header";
import FeaturedMain from "./featured-main";
import FeaturedList from "./featured-list";

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const [activeProject, setActiveProject] = useState(0);

  if (!projects.length) return null;

  return (
    <section
      id="projects"
      className="
        bg-[#071C3A]
        py-14
        lg:py-16
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
        <div
          className="
            grid
            items-center
            gap-5

            lg:grid-cols-[240px_minmax(0,1fr)_240px]

            xl:grid-cols-[250px_minmax(0,1fr)_250px]
          "
        >
          <FeaturedHeader />

          <FeaturedMain projects={projects} activeProject={activeProject} />

          <FeaturedList
            projects={projects}
            activeProject={activeProject}
            onSelect={setActiveProject}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
