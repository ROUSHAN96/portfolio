"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faShare } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-sans "
      >
        My Projects
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-sans"
      >
        My Latest Project
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans"
      >
        welcome to my portfolio! Here, you can explore some of my latest
        projects that showcase my skills and creativity as a frontend web
        developer. Each project reflects my dedication to building user-friendly
        and visually appealing web applications. Feel free to browse through the
        examples below to see the range of work I have done. If you have any
        questions or would like to collaborate, don't hesitate to reach out!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
      >
        <a href="https://roushan96.github.io/SORTING-VISUALIZER/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundImage: "url(/assets/sorting.jpeg)",
            }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-sans">Sorting Visualizer</h2>
                <p className="text-sm text-gray-700">
                  Shows step-by-step sorting algorithm visualizations.
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </motion.div>
        </a>
        <a href="https://roushan96.github.io/SHORTEST-PATH-FINDER/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundImage: "url(/assets/path.jpeg)",
            }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-sans">Shortest Path Finder</h2>
                <p className="text-sm text-gray-700">
                  Visualizes the shortest route between two or more points.
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </motion.div>
        </a>
        <a href="https://github.com/ROUSHAN96/Stock-Market-Forecasting-">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundImage: "url(/assets/stock.jpeg)",
            }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-sans">Stock Market Predictor</h2>
                <p className="text-sm text-gray-700">
                  Forecasts stock prices using machine learning models.
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </motion.div>
        </a>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#ShowMore"
        className="bg-green-300 w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-teal-100 duration-500"
      >
        Show more <FontAwesomeIcon icon={faPaperPlane} />
      </motion.a>
    </motion.div>
  );
};

export default Work;
