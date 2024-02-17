import React from "react";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <div className="text-center">
      <SectionTitle title="Experience" />
      <div className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 hover:-translate-y-2 transform transition rounded-md">
        <h1 className="font-bold text-xl text-indigo-300 mt-10 ">
          JR Fullstack Web Developer
        </h1>
        <h2 className="text-md font-bold text-gray-600 dark:text-gray-300 ">
          Company: <span className="">Net-Mex</span>
        </h2>
        <h2 className="text-md text-gray-600 dark:text-gray-300 ">
          January 2024 - Present
        </h2>
      </div>
    </div>
  );
};

export default Experience;
