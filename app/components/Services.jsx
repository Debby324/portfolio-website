import React from "react";

const Services = () => {
   
  const servicesData = [
    {
      name: "Web Design",
      description:
        "I can build a simple and clean website using HTML,CSS and Javascript or React/Next Js. Great for portfolios and small businesses",
      icon: "bx bx-paint",
      link: "https://www.interaction-design.org/literature/topics/web-design?srsltid=AfmBOoojfdT-MtfqZ94LWCWNW6pLNyFkD1Kr_LA6P8Et8JoOyqnhu0kI",
    },
    {
      name: "Landing pages",
      description:
        "Need a professional landing page for your brand or product? I'll design one that looks good and works on phones too",
      icon: "bx bx-layout",
      link: "https://unbounce.com/landing-page-articles/what-is-a-landing-page/",
    },
    {
      name: "Bug Fixes",
      description:
        "Got layout issues or mobile problems on your site? I can fix those fast and cleanly",
      icon: "bx bx-bug-alt",
      link: "https://nordvpn.com/cybersecurity/glossary/bug-fix/#:~:text=A%20bug%20fix%20is%20a,causing%20the%20software%20to%20malfunction",
    },
    {
      name: "responsive Design",
      description:
        "I can build a website that looks good on all devices e.g hone, laptop e.t.c",
      icon: "bx bx-devices",
      link: "https://en.m.wikipedia.org/wiki/Responsive_web_design",
    },
  ];
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 my-20  bg-gray-100" id="services">
      <h2 className="text-center text-5xl ">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mb-12 lg:my-4 my-3">
        I am a software developer from lagos with no experience. i'm
        eager to learn and grow in the software develoment industry.
      </p>

<div className={`grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 my-10  `} >
      {servicesData.map(({ icon, name, description, link }, index) => (
        <div key={index} className="border border-gray-400 rounded-lg px-8 py-8 bg-white" name="_blank">
          <i className={`${icon} bg-[#555555] text-white p-5 rounded-[10px]`}></i>
          <h3 className="text-lg my-4 text-gray-700">{name}</h3>
          <p className="text-sm text-gray-600 leading-5">{description}</p>
          <a href={link} className="flex items-center gap-2 text-sm mt-5" target="_blank" rel="noopener noreferrer">
            Read more <i className="bx bx-right-arrow-alt w-4"></i>
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Services;
