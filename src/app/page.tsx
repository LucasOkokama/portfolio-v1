"use client";

import { motion } from "motion/react";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Menu from "@/components/menu/menu";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { useState } from "react";
import { SearchContext } from "@/context/SearchContext";

const menuFadeIn = {
  hidden: { y: -200 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showMoreCount, setShowMoreCount] = useState<number>(3);

  return (
    <div className="flex h-full w-full justify-center px-5">
      <div className="h-full w-full max-w-5xl">
        <div className="flex w-full flex-col">
          <motion.div
            variants={menuFadeIn}
            initial="hidden"
            animate="visible"
            className="sticky top-5 z-[5]"
          >
            <Menu />
          </motion.div>
          <div className="flex justify-center">
            <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-[50vh] pt-24 md:pt-0">
              <div
                id="about"
                className="flex min-h-screen w-full scroll-mt-44 items-center"
              >
                <About />
              </div>

              <div id="skills" className="w-full scroll-mt-44">
                <Skills />
              </div>

              <div id="projects" className="w-full scroll-mt-44">
                <SearchContext.Provider
                  value={{
                    searchValue,
                    setSearchValue,
                    showMoreCount,
                    setShowMoreCount,
                  }}
                >
                  <Projects />
                </SearchContext.Provider>
              </div>
            </div>
          </div>
          <div className="mt-40 flex justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
