"use client";

import About from "@/components/about/about";
import Menu from "@/components/menu/menu";
import Skills from "@/components/skills/skills";
import { motion } from "motion/react";

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
            <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-[25vh] pt-24 md:pt-0">
              <div className="flex min-h-screen w-full items-center">
                <About />
              </div>

              <div className="w-full">
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
