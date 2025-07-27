"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-sans "
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-5xl font-sans"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans"
      >
        I am a frontend web developer with a passion for creating beautiful and
        functional user interfaces. I specialize in React, Next.js, and Tailwind
        CSS, and I love building responsive and accessible web applications.
        Here are some of the services I offer
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-200 border border-gray-400 rounded-xl px-8 py-12 hover:shadow-black hover:shadow-lg cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-500"
        >
          <Image
            src="/assets/web.jpeg"
            alt="Web Development"
            height={40}
            width={40}
            className="w-10"
          />
          <h3 className="text-lg my-4 text-gray-700">Web Development</h3>
          <p className="text-gray-600 text-sm leading-5">
            Front-end development and back-end development using differt text
            stack
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm mt-5 after:duration-300 hover:text-red-600"
          >
            Read More <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-200 border border-gray-400 rounded-xl px-8 py-12 hover:shadow-black hover:shadow-lg cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-500"
        >
          <Image
            src="/assets/machine.jpeg"
            alt="skill"
            height={40}
            width={40}
            className="w-10"
          />
          <h3 className="text-lg my-4 text-gray-700">Machine Model Building</h3>
          <p className="text-gray-600 text-sm leading-5">
            Building a Effective and Efficient machine model using ANN, CNN,
            RNN, SOM, RBM, AutoEncoders
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm mt-5 after:duration-300 hover:text-red-600"
          >
            Read More <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-200 border border-gray-400 rounded-xl px-8 py-12 hover:shadow-black hover:shadow-lg cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-500"
        >
          <Image
            src="/assets/deep.jpeg"
            alt="skill"
            height={40}
            width={40}
            className="w-10"
          />
          <h3 className="text-lg my-4 text-gray-700">Deep Learning</h3>
          <p className="text-gray-600 text-sm leading-5">
            Building Effective and Efficient Nural Network Model and also
            Natural Language Processing
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm mt-5 after:duration-300 hover:text-red-600"
          >
            Read More <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-200 border border-gray-400 rounded-xl px-8 py-12 hover:shadow-black hover:shadow-lg cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-500"
        >
          <Image
            src="/assets/ai.jpeg"
            alt="skill"
            height={40}
            width={40}
            className="w-10"
          />
          <h3 className="text-lg my-4 text-gray-700">
            Artificial Intelligence
          </h3>
          <p className="text-gray-600 text-sm leading-5">
            Building Effective and Effecient AI based on Q-Learning like
            (Q-ANN,Q-CNN,Q-RNN)
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm mt-5 after:duration-300 hover:text-red-600"
          >
            Read More <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
