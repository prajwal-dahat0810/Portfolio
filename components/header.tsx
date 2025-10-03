"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { BookerEmbed } from "@calcom/atoms";
const TwitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20.29 3H16.7l-4.1 5.38L7.91 3H3l7.3 9.66L3 21h3.58l4.55-5.97L16.09 21H21l-7.55-10.03L20.29 3z"></path>
  </svg>
);
const MailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
);
const LinkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-4 h-4"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.48 8.5h4V24h-4V8.5zm7.52 0h3.84v2.11h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.53c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.95-2.88 3.98V24h-4V8.5z"></path>
  </svg>
);
const GitHubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-4 h-4"
    viewBox="0 0 24 24"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.69-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.74 2.67 1.23 3.32.94.1-.74.4-1.23.73-1.51-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.96 10.96 0 012.86-.39c.97 0 1.95.13 2.86.39 2.18-1.5 3.13-1.18 3.13-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.45-2.68 5.43-5.24 5.71.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.79.54A10.502 10.502 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"></path>
  </svg>
);

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prajwal-dahat-04845a252/",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/prajwal-dahat0810",
    icon: GitHubIcon,
  },
  { name: "Twitter", url: "https://x.com/DahatPrajw56411", icon: TwitterIcon },
  { name: "Email", url: "mailto:dahatprajwal11@gmail.com", icon: MailIcon },
];
export const HeaderSection = () => {
  return (
    <div id="header" className=" flex  flex-col items-start w-full h-full">
      <div className="w-full mt-7 flex justify-center items-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-3"></div>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Open to Work
          </span>
        </div>
      </div>

      <div className="relative flex flex-col-reverse items-center justify-between w-full py-12 lg:py-16 lg:flex-row">
        <div className="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
          <div className=" lg:text-xl flex md:flex-row flex-col  items-center justify-center  text-[#08090A] dark:text-white  font-semibold">
            <h3 className="dark:text-white">{"23, Indian"}</h3>
            <p className="pl-2 dark:text-white">
              {" "}
              Full-Stack Developer | Exploring DevOps
            </p>
          </div>
          <h1 className="mt-2 font-neu text-4xl dark:text-white font-bold text-center lg:text-left">
            Prajwal Dahat
          </h1>
          <p className="mt-4 text-lg text-center lg:text-left font-[500] text-neutral-600 dark:text-neutral-100">
            A passionate developer with a knack for creating innovative
            solutions.
            <span className="dark:text-white pl-1">🚀</span>
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 lg:flex-row flex-col   lg:justify-start">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1--0gCVdVr19aZc2VDlKZstRSsCirAdP5/view?usp=sharing",
                  "_blank"
                )
              }
              className="cursor-pointer bg-white text-[#454a4a] dark:bg-neutral-800 dark:text-white"
            >
              Resume
            </Button>
            <div className="flex items-center justify-center gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  className="size-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    console.log("hi");
                    window.open(link.url, "_blank");
                  }}
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>
          <div className="py-2  mt-2 w-full flex justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://cal.com/prajwal1/30min", "_blank")
              }
              className="cursor-pointer px-10 bg-gradient-to-r from-purple-400 to-pink-500  text-[#454a4a] dark:bg-neutral-800 dark:text-white"
            >
              Book a Call
            </Button>
          </div>
        </div>
        <div className="mt-8 mb-2 ">
          <Image
            src="/profile.svg"
            alt="Profile Picture"
            className="rounded-md max-sm:h-full hover:scale-115 transition-transform duration-300 ease-in-out"
            width={160}
            height={160}
          />
        </div>
      </div>
    </div>
  );
};
