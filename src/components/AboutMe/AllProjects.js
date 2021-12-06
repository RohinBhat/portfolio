import Fade from "react-reveal/Fade";
import { ProjectCard } from "../Homepage/ProjectCard";
import React from "react";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section className="mt-16 mx-3">
      <Fade up>
        <h1 className="text-center font-secondary font-semibold text-xl md:text-2xl capitalize text-blue-500">
          HAVE A LOOK
        </h1>
        <div>
          <a
            href="https://www.github.com/RohinBhat/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-center mt-2 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
              All Projects
            </h1>
          </a>
        </div>
      </Fade>
      <Fade up>
        <div className="flex flex-wrap w-full justify-center">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </Fade>
    </section>
  );
}