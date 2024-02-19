import React from "react";

const WorkItem = ({ title, imgURL, tech, link }) => {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 my-2 rounded-lg overflow-hidden">
      <img src={imgURL} alt={title} className="w-full h-auto" />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-5">
          {tech.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {tech}
            </span>
          ))}
        </p>
        <a className="bg-indigo-500 p-2 rounded-md text-white font bold  hover:bg-indigo-700 transition-all cursor-pointer" href={link} target="_blank">
          Check it
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
