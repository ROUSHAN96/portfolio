"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faVolumeHigh,
  faWebAwesome,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 mt-30 text-lg font-sans "
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-sans"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[20rem] sm:w-[30rem] rounded-3xl max-w-none"
        >
          <Image
            src="/assets/hero.jpeg"
            alt="profile-photo"
            width={512}
            height={512}
            className="w-full h-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-sans">
            Hello! I'm Roushan Raj, a frontend web developer based in India. I
            specialize in creating beautiful and functional user interfaces
            using modern web technologies. With a passion for crafting
            responsive and accessible web applications, I strive to deliver
            exceptional user experiences. When I'm not coding, you can find me
            exploring new technologies, reading about design trends, or enjoying
            a good cup of Tea.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            <motion.li
              whilehover={{ scale: 1.05 }}
              className="bg-gray-300 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-teal-500 hover:-translate-y-1 duration-500 hover:shadow-black hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faUserGraduate} />
              <h3 className="my-4 font-sans text-gray-700">Education</h3>
              <p className="text-gray-600 text-sm">
                National Institute Of Technology Arunachal Pradesh
              </p>
            </motion.li>
            <motion.li
              whilehover={{ scale: 1.05 }}
              className="bg-gray-300 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-teal-500 hover:-translate-y-1 duration-500 hover:shadow-black hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faWebAwesome} />
              <h3 className="my-4 font-sans text-gray-700">Projects</h3>
              <p className="text-gray-600 text-sm">
                Scroll down to check my Projects
              </p>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="bg-gray-300 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-teal-500 hover:-translate-y-1 duration-500 hover:shadow-black hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faVolumeHigh} />
              <h3 className="my-4 font-sans text-gray-700">Languages</h3>
              <p className="text-gray-600 text-sm">
                Fluent in English and Hindi
              </p>
            </motion.li>
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-g text-gray-700 font-sana"
          >
            Languages I Use :
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="grid grid-cols-6 items-center gap-3 sm:gap-5"
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/c.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500 bg-cover"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/cpp.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/java.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/python.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/html.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/css.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/javascript.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/reactjs.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/nextjs.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/nodejs.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 sm:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/express.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/tailwindcss.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/typescript.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/redux.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/mysql.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/mongodb.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/git.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/github.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li>
            {/* <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
            >
              <Image
                src="/assets/vscode.png"
                alt="Tool"
                width={20}
                height={20}
                className="w-5 lg:w-500"
              />
            </motion.li> */}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
