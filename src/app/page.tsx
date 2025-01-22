"use client";

import Menu from "@/components/menu";
import { motion } from "motion/react";

const menuFadeIn = {
  hidden: { y: -200 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Home() {

  return (
    <div className="flex w-full justify-center px-3 pt-5">
      <div className="w-full max-w-5xl">
        <motion.div variants={menuFadeIn} initial="hidden" animate="visible">
          <Menu />
        </motion.div>
      </div>
    </div>
  );
}
