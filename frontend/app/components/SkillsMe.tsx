import React from "react";
import { skillsData } from "../assets/SkillMe";

const SkillsMe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-normal text-center text-gray-800 mb-12">
          Habilidades Técnicas
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-xl rounded-xl overflow-hidden">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 ${category.color} flex flex-col`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b border-gray-300/50 pb-2">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-white text-gray-700 text-sm px-4 py-2 rounded-lg shadow-sm whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMe;
