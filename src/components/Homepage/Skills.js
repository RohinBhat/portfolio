import React from "react";
import { SkillCard } from "./SkillCard";
import skillsData from "../../data/skills.json";

export default function Skills() {
  return (
    <section className="mt-16 mx-3 justify-center">
      <h1 className="text-center font-secondary font-semibold text-2xl capitalize text-blue-500">
        WHAT I KNOW
      </h1>
      <h1 className="text-center mt-2 font-primary font-black text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
        Skills
      </h1>
      <div className="mt-8 py-4 px-4 bg-gray-800 items-center justify-center shadow-2xl rounded-md">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {skillsData.map((skill, index) => {
            return <SkillCard details={skill} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
