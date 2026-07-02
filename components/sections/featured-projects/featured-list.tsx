"use client";

import { useState } from "react";

import { projects } from "@/constants/projects";
import ProjectItem from "./project-item";

const FeaturedList = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          image={project.image}
          titleKey={project.titleKey}
          location={project.location}
          date={project.date}
          active={index === activeProject}
          onClick={() => setActiveProject(index)}
        />
      ))}
    </div>
  );
};

export default FeaturedList;
