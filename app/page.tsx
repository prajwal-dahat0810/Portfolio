import { AppBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { HeaderSection } from "@/components/header";
import { ProjectSection } from "@/components/ProjectSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div
      className={cn(
        "w-full min-h-[100vh] flex flex-col items-center justify-start",
        "relative",
        "[background-size:35px_35px] max-h-[130vh]",
        "dark:bg-[#080809]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      )}
    >
      <div
        className={cn(
          "hidden lg:flex",
          "dark:absolute dark:inset-0 dark:z-[20] pointer-events-none", // overlay, no interaction
          "dark:bg-[#080809]",
          "dark:[mask-image:linear-gradient(to_right,black_0%,transparent_25%,transparent_70%,black_100%)]"
        )}
      ></div>
      <AppBar />
      <div className="flex  w-full px-2 py-3 flex-col mt-20 max-w-3xl h-full  items-center justify-start ">
        <HeaderSection />
        
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
