import React from "react";

const StudyComponent = ({ title, career, status }) => {
  return (
    <div className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 hover:-translate-y-2 transform transition rounded-md">
      <h1 className="font-bold text-xl text-indigo-300 mt-10 ">
        {title}
      </h1>
      <h2 className="text-md font-semibold text-gray-600 dark:text-gray-300 ">{career}</h2>
      <h2 className="text-md text-gray-600 dark:text-gray-300 ">{status}</h2>
    </div>
  );
};

export default StudyComponent;
