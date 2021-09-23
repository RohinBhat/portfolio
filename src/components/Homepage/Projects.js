import { ProjectCard } from "./ProjectCard";
import React from "react";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section className="mt-16 mx-3">
      <h1 className="text-center font-secondary font-semibold text-2xl capitalize text-blue-500">
        TAKE A LOOK
      </h1>
      <a
        href="https://www.github.com/RohinBhat/"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-center mt-2 font-primary font-black text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
          Recent Projects
        </h1>
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
