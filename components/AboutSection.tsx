"use client";

import { motion } from "framer-motion";
import { EvervaultCard } from "./ui/evervault-card";
export const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full pb-16 pt-10 mt-8 lg:mt-10 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-2 justify-center">
        <h1 className="text-center font-neu text-5xl font-semibold tracking-tight">
          About
        </h1>
      </div>
      <motion.span
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className=" shimmer-text-dark relative "
        style={{ display: "inline-block" }}
      >
        <div
          //   className="shiny-text mt-3 custom-class dark:text-[#efeeeb76] text-[#343333] text-base sm:text-lg leading-relaxed tracking-wide mb-6 text-center sm:text-left px-12 ">
          className="scroll-m-20 mt-5 custom-font lg:text-left font-normal    animate-shiver px-8  md:px-16 lg:px-24 text-center max-sm:text-sm text-wrap"
        >
          <p>
            I completed my B.Tech in Information Technology from{" "}
            <a href="https://www.pimpri-chinchwadcollegeofengineering.com/"></a>
            <span className="text-[#c7c4b876] font-[500] underline">
              Government College of Engineering, Amravati in 2025
            </span>
          </p>
          <p>
            Full Stack Engineer building fast, functional web experiences with
            Next.js, TS, Postgres, Framer Motion. I am a software developer
            passionate about crafting dynamic and user-centric web apps.
          </p>
          <p className="max-sm:sr-only">
            {" "}
            With experience in modern technologies, I thrive on building
            scalable and intuitive web solutions. I embrace challenges as
            opportunities to learn and grow as a developer.
          </p>
        </div>
      </motion.span>
      <div className="flex mt-5 max-sm:my-8 w-full flex-col items-center gap-2 justify-center">
        <h1 className="text-center max-sm:my-8 font-neu text-2xl font-semibold tracking-tight">
          Education
        </h1>

        <EvervaultCard>
          <div className=" h-max w-full max-w-3xl mt-5 rounded-lg ">
            <div className="scroll-m-20  w-full  p-5 max-sm:px-1   custom-class lg:text-left font-normal animate-shiver flex  justify-between items-center  lg:px-7 text-center max-sm:text-sm text-wrap">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col custom-font max-sm:items-start   items-start gap-2">
                  <span className="dark:text-[#efeeeb76] text-[#343333]">
                    Government College of Engineering, Amravati
                  </span>{" "}
                  <span className="text-[#605e5e] text-xs dark:text-[#efeeeb76]">
                    {" "}
                    Bachelor of Technology in Information Technology (CGPA: 7.38
                    )
                  </span>
                </div>
              </div>
              <div className="text-sm">June-2021 - May 2025</div>
            </div>
            <div className="scroll-m-20 w-full min-h-20 p-5 max-sm:px-1   custom-class lg:text-left font-normal animate-shiver flex  justify-between items-center  lg:px-7 text-center max-sm:text-sm text-wrap">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col custom-font max-sm:items-start  items-start gap-2">
                  <span className="dark:text-[#efeeeb76] text-[#343333]">
                    Amolakchand Mahavidyalaya,Yavatmal
                  </span>{" "}
                  <span className="text-[#605e5e]  text-xs dark:text-[#efeeeb76]">
                    {" "}
                    Higher Secondary (Percentage: 88.17%)
                  </span>
                </div>
              </div>
              <div className="text-sm">May 2020 - Feb 2021</div>
            </div>
            <div className="scroll-m-20  w-full min-h-20 p-5 max-sm:px-1   custom-class lg:text-left font-normal animate-shiver flex  justify-between items-center  lg:px-7 text-center max-sm:text-sm text-wrap">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col custom-font max-sm:items-start   items-start gap-2">
                  <span className="dark:text-[#efeeeb76] text-[#343333]">
                    Chandrabagabai Pakode Vidyalaya,Mangrul Dastagir
                  </span>{" "}
                  <span className="text-[#605e5e] text-xs dark:text-[#efeeeb76]">
                    {" "}
                    Secondary School (Percentage: 81.60%)
                  </span>
                </div>
              </div>
              <div className="text-sm">June 2018 - March 2019</div>
            </div>
          </div>
        </EvervaultCard>
      </div>
    </div>
  );
};
