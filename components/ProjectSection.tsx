import { ProjectCard } from "./ui/ProjectCard";
export type Project = {
  title: string;
  description: string;
  projectDescription: string;
  videoUrl: string;
  technologies: string[];
  link: string;
  githubLink: string;
};
const Projects: Project[] = [
  {
    title: "Devstype",
    description:
      "Build a Multiplayer typing project like MonkeyType,Test yourself in words mode, track your progress and improve your speed.",
    projectDescription:
      "Devstype is a fast-paced typing game inspired by Monkeytype, built for developers who love speed and precision. Compete with friends or strangers in real time using WebSockets, with rooms powered by Redis . Whether you're sharpening your typing or racing others, Devstype delivers a smooth, responsive experience optimized for performance and fun.",
    videoUrl:
      "https://res.cloudinary.com/dkrk1s8ef/video/upload/v1754629982/rzra2hiyerw5sbhybbmo.mp4",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js ",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Framer Motion",
      "Redis",
      "Docker",
    ],
    link: "https://devstype.vercel.app/signin",
    githubLink: "https://github.com/prajwal-dahat0810/devstype",
  },
  {
    title: "Medium",
    description:
      "Medium like blogging app. Use in a serverless fashion, using cloudflare workers, prisma as the ORM, typescript as the language.",
    projectDescription:
      "Medium is a blogging app I built to make writing and sharing thoughts simple and fast — kind of like Medium, but powered by modern tools and a serverless backend. It runs entirely on Cloudflare Workers, which means everything is super fast and globally distributed. I used Prisma to manage the database, and wrote the whole project in TypeScript to keep things clean and reliable.You can sign up, write blogs, edit them anytime.",
    videoUrl:
      "https://res.cloudinary.com/dkrk1s8ef/video/upload/v1754628974/bxu8vinkxp58rsstucpp.mp4",
    technologies: [
      "React",
      "Tailwind CSS",
      "Hono ",
      "Cloudflare Workers",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://medium-dahatdevs.vercel.app/signup",
    githubLink: "https://github.com/prajwal-dahat0810/Medium-blog-website.git",
  },
  {
    title: "Smallest AI",
    description:
      "Build a Frontend clone Smallest AI Landing Page  in which  AI uses voice Enabling hyper-personalized AI interactions at population scale.",
    projectDescription:
      "This is a fully responsive frontend clone of the Smallest AI landing page, built to showcase a platform that enables hyper-personalized, real-time voice interactions at scale. The goal was to replicate the sleek, modern feel of the original site while highlighting its core message — that AI can be smaller, faster, and more accessible than ever.",
    videoUrl:
      "https://res.cloudinary.com/dkrk1s8ef/video/upload/v1754631155/mvcbpki0kr8qaaqkcdrb.mkv",
    technologies: ["Next JS", "Tailwind CSS", "TypeScript"],
    link: "https://smallest-ai-static-site-cfjtdfs9r-prajwals-projects-986414b5.vercel.app",
    githubLink: "https://github.com/prajwal-dahat0810/test-static-site.git",
  },
  {
    title: "Amazon Clone",
    description:
      "Build a Frontend Clone of Amazon . Users can view  products available.",
    projectDescription:
      "This is a fully responsive Amazon-inspired frontend clone built using Next.js and styled with Tailwind CSS. The project replicates the core look and feel of Amazon’s UI, including the navigation bar, product grid, search functionality, and responsive design — optimized for both desktop and mobile.",
    videoUrl:
      "https://res.cloudinary.com/dkrk1s8ef/video/upload/v1754631279/tso5o6oupb4gm6pzwefr.mkv",
    technologies: ["Next JS", "Tailwind CSS"],
    link: "https://test-amazon-frontend-clone.vercel.app/",
    githubLink:
      "https://github.com/prajwal-dahat0810/test-amazon-frontend-clone.git",
  },
];

export const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="w-full pb-16 pt-10 mt-8 lg:mt-10 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-2 justify-center">
        <h1 className="text-center font-neu text-5xl font-semibold tracking-tight">
          Projects
          <svg
            width="310"
            height="80"
            viewBox="0 0 200 40"
            className="-translate-y-10 mt-1 translate-x-[-80px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="line-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#9400D3" stopOpacity="0"></stop>
                <stop
                  offset="100%"
                  stopColor="#4B0082"
                  stopOpacity="0.99"
                ></stop>
              </linearGradient>
            </defs>
            <path
              d="M10 20 L 80 20 L 100 30 H 196"
              stroke="url(#line-gradient)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            ></path>
          </svg>
        </h1>
        <h2 className="scroll-m-20 -translate-y-10 text-lg lg:text-left font-[500] text-neutral-600 dark:text-neutral-300 sm:px-8  md:px-16 lg:px-24 text-center max-sm:text-sm text-wrap">
          {"I've"} worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </h2>
      </div>
      <div className="mt-8   w-full max-w-3xl ">
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
