"use client";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= window.innerHeight) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`flex w-full px-4 lg:px-8 xl:px-[6%] py-4 fixed items-center justify-between z-50 h-16 bg-amber-50 ${
          isScroll ? "bg-white backdrop-blur-lg shadow-sm" : ""
        }`}
      >
            <a href="#top">
            <h1 className="text-2xl md:text-[32px] font-[450] cursor-pointer  font-sans ">
              Deborah<span className="text-[#3a8] text-[50.2px]">.</span>
            </h1>
          </a>
          <div className="flex">
            <ul
              className={`hidden md:flex items-center gap-5 lg:gap-8 px-13 py-3 text-[17px] relative left-11 top-1.5 `}
            >
              <li>
                <a href="#home" className="hover:text-[#3a8]">
                  Home
                </a>
              </li>
              <a href="#about" className="hover:text-[#3a8]">
                <li>About me</li>
              </a>
              <a href="#services" className="hover:text-[#3a8]">
                <li>Services</li>
              </a>
            
              <a href="#contact" className="hover:text-[#3a8]">
                <li>Contact me</li>
              </a>
            </ul>
            <div className="flex items-center">
           
            <button className="block md:hidden ml-3">
              <i
                className="bx bx-menu-alt-right text-[27px] relative top-[6px]"
                onClick={openMenu}
              ></i>
            </button>
          </div>
          </div>
      
        {/* -------- mobile menu -------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-5 py-20 px-10 fixed top-0 -right-64 bottom-0 w-55  z-50  bg-gray-100 transition duration-500 text-black text-[19.4px] h-screen "
        >
          <div
            className="absolute right-6 top-6 flex rounded-[50%]"
            onClick={closeMenu}
          >
            <i className="bx bx-x cursor-pointer text-[27px]"></i>
          </div>

          <li>
            <a onClick={closeMenu} href="#home" className="active:text-[#3a8]">
              Home
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#about"
              className="active:text-[#3a8]"
            >
              About me
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#services"
              className="active:text-[#3a8]"
            >
              Services
            </a>
          </li>
           
          <li>
            <a
              onClick={closeMenu}
              href="#contact"
              className="active:text-[#3a8]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
