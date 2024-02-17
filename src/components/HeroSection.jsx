import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center flex-col py-20 mx-5">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl mb-3 text-indigo-500 font-semibold font-inter">
          Juan Carlos Isordia Betancourt
        </h1>
        <p className="text-md md:text-xl w-full mb-3 text-gray-600 ">
          JR Fullstack Web Developer from San Luis Potosi, MX
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-500 hover:bg-indigo-700 transition-colors text-white md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
