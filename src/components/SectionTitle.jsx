import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-400 text-center">
      {title}
    </h1>
  );
};

export default SectionTitle;
