"use Client";
import React, { use } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFaceSmile,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <FontAwesomeIcon icon={faCode} />
        {/* <Image
          src="/assets/hero.jpeg"
          alt="Logo"
          height={20}
          width={20}
          className="w-36 mx-auto mb-2"
        /> */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <FontAwesomeIcon icon={faFaceSmile} />
          {/* <Image
            src="/assets/hero.jpeg"
            alt="Footer"
            height={20}
            width={20}
            className="w-6"
          /> */}
          rajroushan100@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 ROUSHAN RAJ. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/ROUSHAN96">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://leetcode.com/u/ROUSHAN_RAJ_17/">
              LeetCode
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/roushan-raj-8315a62b8/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/ROUSHAN_RAJ_17">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
