import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLong,
  faCircleXmark,
  faHouse,
  faUser,
  faBriefcase,
  faWebAwesome,
  faPhone,
  faBars,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sidemenuref = useRef();
  const openmenu = () => {
    sidemenuref.current.style.transform = "translateX(-16rem)";
  };
  const closemenu = () => {
    sidemenuref.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* <div>
        <Image
          src="/Users/roushanraj/Documents/profile/src/assets/cat.4208.jpg"
          alt="nav-bg"
          width={24}
          height={24}
          className="w-full"
        />
      </div> */}
      <nav
        className={
          'w-full fixed px-5 lg:px-20 xl:px-[8%] py-0 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-sm shadow-lg" : ""}'
        }
      >
        <a href="#top">
          <FontAwesomeIcon icon={faHeart} />
          {/* <Image
            src="/assets/hero.jpeg"
            alt="Logo"
            width={24}
            height={24}
            className="w-24 cursor-pointer mr-14"
          /> */}
        </a>
        <ul
          className={
            'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50" }'
          }
        >
          <li>
            <a
              className="font-serif relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full hover:text-red-600"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-serif relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full hover:text-red-600"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="font-serif relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full hover:text-red-600"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-serif relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full hover:text-red-600"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-serif relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full hover:text-red-600"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/roushan-raj-8315a62b8/"
            className="font-serif hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-teal-50 duration-500"
          >
            Lets's Connect
            <FontAwesomeIcon icon={faComment} />
          </a>
          <button className="block md:hidden ml-3" onClick={openmenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* mobile menu  */}

        <ul
          ref={sidemenuref}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-50 z-50 h-screen bg-teal-100 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closemenu}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          <li>
            <a className="font-serif" onClick={closemenu} href="#top">
              <FontAwesomeIcon icon={faHouse} />
              HOME
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closemenu} href="#about">
              <FontAwesomeIcon icon={faUser} />
              ABOUT
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closemenu} href="#services">
              <FontAwesomeIcon icon={faBriefcase} />
              SERVICES
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closemenu} href="#work">
              <FontAwesomeIcon icon={faWebAwesome} />
              PROJECTS
            </a>
          </li>
          <li>
            <a className="font-serif" onClick={closemenu} href="#contact">
              <FontAwesomeIcon icon={faPhone} />
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
