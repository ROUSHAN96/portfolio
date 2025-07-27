"use client";
import React from "react";
import Image from "next/image";
import { backOut, color, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faHand,
  faHandsPraying,
  faPhone,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Purple_Purse, Red_Hat_Display } from "next/font/google";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";

const Header = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-40 sm:mt-10 mb-5">
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
          <Image
            src="./assets/hero.jpeg"
            alt="profile-photo"
            width={200}
            height={200}
            className="rounded-full w-60"
          />
        </Tilt>
      </div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-sans"
      >
        <Typewriter
          options={{
            strings: ["Hi! I'm ROUSHAN RAJ", ""],
            autoStart: true,
            loop: true,
          }}
        />
        <FontAwesomeIcon icon={faHandsPraying} />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg-text-[66px] font-sans"
      >
        Full-Stack web developer based in INDIA
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-sans"
      >
        I am a Full-Stack web developer with a passion for creating beautiful
        and functional user interfaces. I specialize in React, Next.js, and
        Tailwind CSS, and I love building responsive and accessible web
        applications.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-green-500 duration-500"
        >
          Contact Me
          <FontAwesomeIcon icon={faPhone} />
          {/* <Image
            src="/assets/hero.jpeg"
            width={3}
            height={3}
            alt="Contact Icon"
            className="w-4"
          /> */}
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="https://drive.google.com/file/d/1mA2VDxwg3BeFuKQpS4dTX07yL3dyHP19/view?usp=drive_link"
          download
          className="px-10 py-3 bg-white border rounded-full border-black-500 flex items-center gap-2 hover:bg-yellow-100 duration-500"
        >
          My Resume
          <FontAwesomeIcon icon={faFile} />
          {/* <Image
            src="/assets/hero.jpeg"
            width={3}
            height={3}
            alt="Resume Icon"
            className="w-4"
          /> */}
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
