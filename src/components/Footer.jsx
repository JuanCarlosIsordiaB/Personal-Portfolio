import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-md">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">Juan Carlos Isordia Betancourt</a>
      <a  href="mailto:juancarlosisordiab@gmail.com" className=" text-sm md:text-md hover:text-indigo-500 transition-all">
        juancarlosisordiab@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">©Juan Carlos Isordia  {new Date().getFullYear}, All rights reserved</p>
    </div>
  );
};

export default Footer;
