import React from "react";

const Header = () => {
  return (
    <div
      className=" text-center mx-auto h-[88vh] lg:h-[98.2vh] flex flex-col items-center justify-center gap-2 lg:gap-4 relative right-0 top-14 lg:top-5 w-[100%] bg-amber-50 px-2"
      id="home"
    >
      <h1 className="text-xl md:text-2xl mb-3 flex items-end gap-2">
        Hi! I'm Adigolo Deborah<span className="w-6">👋</span>
      </h1>
      <h1 className="text-3xl sm:text-5xl lg:text-[66px] text-gray-800">
        I am a <span className="text-[#3a8]">Software Developer</span>
      </h1>
      <p className="max-w-2xl mx-auto text-[17.2px]">
        I am a software developer from Nigeria with no experience. I am eager to
        learn and grow in software development industry.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="/certificate.pdf"
          className="px-10 py-3 border-white rounded-full bg-[#555555] text-white flex items-center gap-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          My Certificate<i className="bx bx-download w-4"></i>
        </a>
        <a
          href="/resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-600 flex items-center gap-2 "
          target="_blank" 
          rel="noopener noreferrer"
        >
          My resume <i className="bx bx-download w-4"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
