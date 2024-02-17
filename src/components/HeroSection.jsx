import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-q md:mb-3 text-indigo-500 font-semibold font-inter">
          Juan Carlos Isordia Betancourt
        </h1>
        <p className="text-md md:text-xl max-w-md">
          JR Fullstack Web Developer
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
