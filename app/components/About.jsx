import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 relative lg:top-9 top-19" id="about">
      <h2 className="text-center text-5xl relative top-1 ">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-14 sm:my-6.5">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/assets/user.jpg"
            alt="user"
            className="w-full rounded-3xl"
            width={160}
            height={160}
          />
        </div>
        <div className="flex-1">
          <p className="sm:mb-8 mb-9 max-w-2xl">
            I am starting my new sofware development journey with eagerness to
            learn and grow. I have zero experience but i'm excited to develop my
            skills, contribute to innovative projects, and grow between the
            company team 🚀
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-[#999] hover:-translate-y-1 duration-500">
              <h6 className="mt-3 w-7">
                <i className="bx bx-code-alt bx-tada text-[31px]"></i>
              </h6>
              <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS, JavaScript 
              </p>
            </li>

            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-[#f1f1] hover:-translate-y-1 duration-500">
              <h6 className="mt-3 w-7">
                <i
                  className="bx bx-network-chart bx-spin text-[31px]"
                  style={{ color: "purple" }}
                ></i>
              </h6>
              <h3 className="my-4 font-semibold text-gray-700">Frameworks</h3>
              <p className="text-gray-600 text-sm">
                Tailwind CSS, React js, Next js
              </p>
            </li>

            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-[#03a8] hover:-translate-y-1 duration-500">
              <h6 className="mt-3 w-7">
                <i
                  className=" bx-tada bx bx-briefcase-alt-2 text-[31px]"
                  style={{ color: "#039" }}
                ></i>
              </h6>
              <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
              <p className="text-gray-700 text-sm">Built one project </p>
            </li>
          </ul>

          <div className="my-5 block lg:flex xl:flex md:flex ">
            <h4 className="my-6 text-gray-800 font-semibold sm:text-[20px] text-[20px] ">
              Tools I use<span className="hidden lg:inline md:inline xl:inline">:</span>
            </h4>
            <ul className="flex items-center gap-2.5 sm:gap-5 lg:ml-3 md:ml-3 xl:ml-3">
              <li className="items-center flex justify-center w-[45px] sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer bg-[#ffc499] hover:-translate-y-1 duration-500">
                <i className="bx bxl-git text-[23.5px] text-[#f1502f] "></i>
              </li>
              <li className="items-center flex justify-center w-[45px] sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer bg-[#b0e2ff] hover:-translate-y-1 duration-500">
                <i className="bx bxl-visual-studio text-[22px] text-[#23a9f2] "></i>
              </li>
              <li className="items-center flex justify-center w-[45px] sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer bg-[#c9eaca] hover:-translate-y-1 duration-500">
                <i className="bx bxl-mongodb text-[25.5px] text-[#3fa03f]  "></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
