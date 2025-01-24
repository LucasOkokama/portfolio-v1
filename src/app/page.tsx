"use client";

import About from "@/components/about/about";
import Menu from "@/components/menu/menu";
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
      <div className="w-full max-w-5xl">
        <div className="flex w-full flex-col md:h-screen">
          <motion.div
            variants={menuFadeIn}
            initial="hidden"
            animate="visible"
            className="sticky top-5 z-[5]"
          >
            <Menu />
          </motion.div>
          <div className="flex h-full w-full items-center justify-center pt-24 md:pt-0">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}
