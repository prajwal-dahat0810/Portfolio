"use client";
import { FC } from "react";
import { Project } from "../ProjectSection";
import { Button } from "./button";

export const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className=" w-full mt-4 min-h-96 flex flex-col gap-10  sm:flex-row">
      <div className="group lg:w-10/12  w-full   relative flex cursor-pointer flex-col gap-1 rounded-lg border border-gray-400/50  p-1 shadow-2xl backdrop-blur-sm dark:border-white/10  dark:shadow-[#121212]/50">
        <video
          className=" filter brightness-100 dark:brightness-125 dark:contrast-110  rounded-lg "
          playsInline
          autoPlay
          muted
          loop
          src={project.videoUrl}
        ></video>
        <div className="flex flex-col gap-2 ">
          <div className="flex px-2 flex-col gap-1 mt-1.5">
            <h1 className="scroll-m-20 text-gray-700 dark:text-white  pb-2  font-sans    text-[18px] font-medium tracking-tight first:mt-0">
              {project.title}
            </h1>
            <p className="text-sm min-h-14 text-neutral-600 dark:text-gray-400 ">
              {project.description}
            </p>
          </div>
          <div>
            <div className="mb-2 font-sans">Tech Stack</div>
            <div className="flex p-2 flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full dark:bg-white/5  backdrop-blur-sm border dark:border-white/10  text-[10px] dark:text-white/70 duration-300 transition-colors  border-transparent bg-slate-200 text-secondary-foreground hover:transform hover:scale-105 hover:bg-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  // className="text-xs bg-gray-200 hover:text- dark:bg-gray-700 px-3 py-1 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-3  border-b flex items-center  flex-col ">
        <div className="">
          <div className="text-2xl lg:text-5xl font-sans bg-gradient-to-bl from-purple-300 to-pink-300 bg-clip-text text-transparent font-medium leading-none">
            {project.title}
          </div>
        </div>
        <div className="text-[16px] my-3 py-2 px-3  text-wrap font-sans bg-gradient-to-bl from-neutral-200 to-fuchsia-400 bg-clip-text text-transparent font-medium  dark:from-white dark:to-gray-300">
          {project.projectDescription}
        </div>
        <div className="flex gap-2 py-2 ">
          {project.githubLink ? (
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>{" "}
              Github
            </Button>
          ) : null}
          {project.link ? (
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-earth-icon lucide-earth"
              >
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                <circle cx="12" cy="12" r="10" />
              </svg>{" "}
              Live
            </Button>
          ) : null}
          {project.videoUrl ? (
            <Button
              className="cursor-pointer"
              variant="outline"
              size="sm"
              onClick={() => window.open(project.videoUrl, "_blank")}
            >
              {"Demo "}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
