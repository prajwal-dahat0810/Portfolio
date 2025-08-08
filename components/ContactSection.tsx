"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import {
  InfiniteMovingCards,
  Skills,
  TechStack,
} from "./ui/infinite-moving-cards";

export const ContactSection = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const [userDetails, setUserDetails] = useState({
    followers: 0,
    following: 0,
    stars: 0,
    issues: 0,
    prs: 0,
  });
  useEffect(() => {
    // Simulate fetching user details from an API
    const fetchUserDetails = async () => {
      // Simulated data fetching
      const res = await fetch("https://api.github.com/users/prajwal-dahat0810");
      const prsResponse = await fetch(
        "https://api.github.com/search/issues?q=author:prajwal-dahat0810+type:pr"
      );
      const issuesResponse = await fetch(
        "https://api.github.com/search/issues?q=author:prajwal-dahat0810+type:issue"
      );
      const data = await res.json();
      const issuesData = await issuesResponse.json();
      const prData = await prsResponse.json();
      console.log(data);
      console.log(prData);
      console.log(issuesData);
      setUserDetails({
        followers: data.followers || 0,
        following: data.following || 0,
        stars: 0,
        issues: issuesData.total_count || 0,
        prs: prData.total_count || 0,
      });
    };
    fetchUserDetails();
  }, []);
  return (
    <div
      id="contact"
      className="w-full pb-4 pt-10 mt-8 lg:mt-10 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-2 justify-center">
        <h1 className="text-center font-neu text-5xl font-semibold tracking-tight">
          Contact
        </h1>
      </div>
      <div className="mt-16  max-w-3xl w-full space-y-10">
        <div className="grid grid-cols-5 grid-rows-3  mx-auto md:auto-rows-[20rem] gap-4 ">
          <div className="relative md:col-span-1 max-sm:col-span-2  md:row-span-1 max-sm:row-start-2  max-sm:col-start-4">
            <Image
              src={"/pimage.png"}
              alt={"image"}
              className="rounded-md max-sm:h-full"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div
            style={{ boxShadow: "inset 0 -20px 80px -20px #ffffff1f" }}
            className="md:col-span-4 rounded-md  max-sm:col-start-1 max-sm:col-span-5 border flex flex-col"
          >
            <div className="flex gap-3 p-4 max-h-10 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="size-4"
                >
                  <g className="nc-icon-wrapper">
                    <path
                      fill="#2a4b55"
                      className="-translate-y-2 transition-all duration-300 ease-linear group-hover/stack:-translate-y-0"
                      d="m45.5 32.131-21-12a1 1 0 0 0-.992 0l-21 12a1 1 0 0 0-.371 1.369.986.986 0 0 0 .371.371l21 12a1 1 0 0 0 .992 0l21-12a1 1 0 0 0 0-1.736Z"
                    ></path>
                    <path
                      fill="#4d8b9d"
                      d="m45.5 23.132-21-12a1 1 0 0 0-.992 0l-21 12a1 1 0 0 0 0 1.736l21 12a1 1 0 0 0 .992 0l21-12a1 1 0 0 0 .371-1.365.986.986 0 0 0-.371-.371Z"
                    ></path>
                    <path
                      fill="#8ebac7"
                      className="translate-y-2 transition-all duration-300 ease-linear group-hover/stack:translate-y-0"
                      d="m45.5 14.132-21-12a1 1 0 0 0-.992 0l-21 12a1 1 0 0 0 0 1.736l21 12a1 1 0 0 0 .992 0l21-12a1 1 0 0 0 0-1.736Z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span>Tech Stack</span>
            </div>
            <div className="my-3 px-3">
              <InfiniteMovingCards
                direction="right"
                speed="fast"
                items={TechStack}
              />
              <InfiniteMovingCards items={Skills} />
            </div>
          </div>
          <div
            style={{ boxShadow: "inset 0 -20px 80px -20px #ffffff1f" }}
            className="md:col-span-2  max-sm:col-span-3 rounded-md md:row-start-2 row-span-2  border   "
          >
            <div className="flex gap-3 p-4 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 24 24"
                className="size-4 "
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="#2c2c2c"
                  d="M15.408 2.913c1.388-.97 2.194-1.596 2.705-1.746.366-.108.675-.08.946.03.318.131.634.41.87.974a5.748 5.748 0 0 1 .253 3.64 6.051 6.051 0 0 1 1.243 3.682c0 2.286-.568 3.848-1.414 4.934-.978 1.254-2.353 1.894-3.807 2.226.222.56.32 1.169.278 1.783V22a.9.9 0 0 1-1.8 0v-3.591l.003-.069a2.286 2.286 0 0 0-.603-1.736.9.9 0 0 1 .553-1.51c1.46-.169 2.986-.529 3.957-1.773.653-.839 1.034-2.062 1.034-3.828a4.239 4.239 0 0 0-1.11-2.869.9.9 0 0 1-.185-.917 3.938 3.938 0 0 0 .007-2.657c-.079.046-.164.098-.24.15-.48.327-1.122.82-2.003 1.43a.9.9 0 0 1-.755.126 10.768 10.768 0 0 0-5.806 0 .9.9 0 0 1-.755-.127C7.67 3.863 6.869 3.572 6.414 3.46a3.945 3.945 0 0 0 .129 2.247.9.9 0 0 1-.186.917 4.24 4.24 0 0 0-1.11 2.897c0 1.75.381 2.964 1.034 3.8.973 1.244 2.505 1.613 3.969 1.802a.899.899 0 0 1 .543 1.507 2.287 2.287 0 0 0-.604 1.718c.002.02.002.04.002.061V22a.9.9 0 0 1-1.8 0v-1.648c-1.017.16-1.799.047-2.427-.197-.871-.339-1.47-.946-1.973-1.583-.258-.325-.486-.656-.737-.925-.143-.154-.286-.293-.48-.343a.9.9 0 0 1 .45-1.742c.726.186 1.271.719 1.79 1.389.44.568.856 1.285 1.702 1.562.436.144.976.16 1.675.01v-.09a4.113 4.113 0 0 1 .284-1.765c-1.455-.343-2.833-.988-3.811-2.238-.848-1.084-1.416-2.637-1.416-4.905A6.054 6.054 0 0 1 4.692 5.81a5.748 5.748 0 0 1 .253-3.64.902.902 0 0 1 .568-.515s1.23-.507 3.942 1.26a12.562 12.562 0 0 1 5.953-.002Z"
                ></path>
              </svg>
              <span className="dark:bg-gradient-to-b dark:from-gray-300 bg-gradient-to-b from-slate-400 to-slate-900 dark:to-gray-600 bg-clip-text custom-font text-sm text-transparent">
                Github
              </span>
            </div>
            <div className="flex items-center   justify-center p-3 py-4 ">
              <motion.div className="overflow-hidden">
                <GitHubCalendar
                  transformTotalCount={false}
                  username="prajwal-dahat0810"
                  fontSize={14}
                  hideMonthLabels
                  blockSize={10}
                  hideColorLegend
                  hideTotalCount
                  transformData={(data) => {
                    const now = new Date();
                    const threeMonthsAgo = new Date(
                      now.getFullYear(),
                      now.getMonth() - 2,
                      now.getDate()
                    );
                    return data
                      .filter((activity) => {
                        const date = new Date(activity.date);
                        return date >= threeMonthsAgo && date <= now;
                      })
                      .map((activity) => ({
                        ...activity,
                        level: activity.count > 0 ? 4 : 0,
                      }));
                  }}
                  blockMargin={5}
                  theme={{
                    light: [
                      "#f0f0f0",
                      "#c4edde",
                      "#7ac7c4",
                      "#f73859",
                      "#384259",
                    ],
                    dark: [
                      "#1b1f1b", // dark background greenish
                      "#2e4d2e", // very dark green
                      "#4b744b", // mid green
                      "#81c784", // bright green
                      "#a5d6a7", // light green
                    ],
                  }}
                />
              </motion.div>
            </div>
            <div className="flex w-full flex-col gap-2 py-2">
              <motion.div
                whileHover={{ x: 6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex  w-full flex-col items-start">
                  <div className=" p-3 border text-[#3e3737] dark:text-white rounded-r-full pl-4 transition-all duration-300 ease-in ">
                    <span className="pr-3 text-[#939393] dark:text-[#777777]">
                      Followers
                    </span>
                    {userDetails.followers}
                  </div>
                </div>
              </motion.div>
              <div className="flex w-full flex-col items-end">
                <motion.div
                  whileHover={{ x: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" p-3 border rounded-l-full pl-4 transition-all duration-300 ease-in ">
                    <span className="pr-3 text-[#939393] dark:text-[#777777]">
                      Following
                    </span>
                    {userDetails.following}
                  </div>
                </motion.div>
              </div>
              <div className="flex w-full flex-col items-start">
                <motion.div
                  whileHover={{ x: 2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" p-3 border rounded-r-full pl-4 transition-all duration-300 ease-in ">
                    <span className="pr-3 text-[#939393] dark:text-[#777777]">
                      Stars
                    </span>
                    {userDetails.stars}
                  </div>
                </motion.div>
              </div>
              <div className="flex w-full flex-col items-end">
                <motion.div
                  whileHover={{ x: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" p-3 border rounded-l-full pl-4 transition-all duration-300 ease-in ">
                    <span className="pr-3 text-[#939393] dark:text-[#777777]">
                      Issues
                    </span>
                    {userDetails.issues}
                  </div>
                </motion.div>
              </div>
              <div className="flex w-full flex-col items-start">
                <motion.div
                  whileHover={{ x: 2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" p-3 border rounded-r-full pl-4 transition-all duration-300 ease-in ">
                    <span className="pr-3 text-[#939393] dark:text-[#777777]">
                      PRs
                    </span>
                    {userDetails.prs}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "inset 0 -20px 80px -20px #ffffff1f" }}
            className="md:col-span-3 max-sm:col-start-1 max-sm:col-span-5 max-sm:row-start-4 rounded-md md:row-start-2 md:row-span-1 border"
          >
            <div className="flex gap-3 p-4 items-center ">
              <span className="dark:bg-gradient-to-b dark:from-gray-300 bg-gradient-to-b from-slate-400 to-slate-900 dark:to-gray-300 bg-clip-text custom-font text-sm text-transparent">
                Socials
              </span>
            </div>
            <div className=" flex  items-center justify-center ">
              <div className="px-2   my-8 flex items-center justify-center  ">
                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex flex-1 items-center justify-center w-full h-full gap-2 min-h-[4rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row "
                >
                  <motion.div
                    variants={first}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/prajwal-dahat-04845a252/",
                        "_blank"
                      );
                    }}
                    className="cursor-pointer h-full relative z-20 w-2/8 rounded-2xl  bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
                  >
                    <svg viewBox="0 0 128 128" className="size-4">
                      <path
                        fill="#0076b2"
                        d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49 10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                      ></path>
                    </svg>
                    <p className=" text-[10px] text-center custom-font   text-neutral-500 mt-1">
                      Linkedin
                    </p>
                  </motion.div>
                  <motion.div
                    onClick={() => {
                      window.open("https://x.com/DahatPrajw56411", "_blank");
                    }}
                    className="cursor-pointer h-full relative z-20 w-2/8 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
                  >
                    <svg viewBox="0 0 128 128" className="size-4">
                      <path
                        className="dark:invert"
                        d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
                        style={{ strokeWidth: "0.104373" }}
                      ></path>
                    </svg>
                    <p className=" text-[10px] custom-font text-center  text-neutral-500 mt-1">
                      Twitter
                    </p>
                  </motion.div>
                  <motion.div
                    variants={second}
                    onClick={() => {
                      window.location.href = "mailto:dahatprajawl19@gmail.com";
                    }}
                    className=" cursor-pointer h-full w-2/8 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>

                    <p className=" text-[10px] text-center custom-font  text-neutral-500 mt-1">
                      Mail
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="relative md:col-span-3 max-sm:col-start-4 max-sm:col-span-2 max-sm:row-start-3 place-items-center content-center rounded-md md:row-start-3 md:row-span-1 ">
            <Image
              src={"/about_image.png"}
              alt={"image"}
              className="rounded-md "
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
