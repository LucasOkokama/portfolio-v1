"use client";

import { motion } from "motion/react";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Menu from "@/components/menu/menu";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { useState } from "react";
import { SearchContext } from "@/context/SearchContext";
import Statistics from "@/components/statistics/statistics";
import BlackHole from "@/components/ui/black-hole";
import { DarkModeContext } from "@/context/DarkModeContext";

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

  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <div className="relative flex h-full w-full flex-col items-center">
      {darkModeEnabled && <BlackHole />}
      {!darkModeEnabled && (
        <div className="absolute bottom-0 top-0 z-[-3] h-[16%] w-[100%] select-none bg-[linear-gradient(to_right,_grey_1px,_transparent_1px),_linear-gradient(to_bottom,_grey_1px,_transparent_1px)] bg-[size:75px_40px] text-transparent opacity-[0.1]">
          <div className="absolute inset-0 top-[50%] bg-gradient-to-b from-transparent to-white to-50%"></div>
        </div>
      )}
      <div className="flex h-full w-full justify-center px-5">
        <div className="h-full w-full max-w-5xl">
          <div className="flex w-full flex-col">
            <DarkModeContext.Provider
              value={{ darkModeEnabled, setDarkModeEnabled }}
            >
              <motion.div
                variants={menuFadeIn}
                initial="hidden"
                animate="visible"
                className="sticky top-5 z-[5]"
              >
                <Menu />
              </motion.div>
            </DarkModeContext.Provider>

            <div className="flex justify-center">
              <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-[35vh] pt-[12vh] md:pt-0">
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

                <div id="statistics" className="w-full scroll-mt-44">
                  <Statistics />
                </div>
              </div>
            </div>
            <div className="relative mt-80 flex justify-center">
              <div className="absolute bottom-0 flex h-[210%] w-full select-none justify-center overflow-hidden">
                <div className="absolute z-[-1] h-full w-[750px]">
                  <img
                    src="/grid-footer.png"
                    alt=""
                    className="opacity-[0.15] invert dark:opacity-[0.1] dark:invert-0"
                  />
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
