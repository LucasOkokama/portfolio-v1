"use client";

import { useBlackHoleContext } from "@/context/BlackHoleContext";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const cursorBlinking = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, repeat: Infinity } },
};

const roles = [
  {
    text: "Desenvolvedor Fullstack",
    background: "rgba(0, 179, 200 , 0.2)",
    color: "rgba(0, 179, 200 , 1)",
  },
  {
    text: "UI/UX Designer",
    background: "rgba(66, 196, 137, 0.2)",
    color: "rgba(66, 196, 137, 1)",
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Role() {
  const typewriterTextRef = useRef<HTMLSpanElement>(null);
  const [style, setStyle] = useState({ background: "", color: "" });
  const { blackHoleHovered } = useBlackHoleContext();

  const nameFadeIn = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.45,
      },
    },
  };

  const nameFadeOut = {
    visible: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    let currentRoleIndex = 0;
    const typeWriterEffect = async () => {
      const typewriterText = typewriterTextRef.current;
      if (!typewriterText) return;

      while (true) {
        const { text, background, color } = roles[currentRoleIndex];
        setStyle({ background, color });

        // Type the text
        for (let i = 0; i <= text.length; i++) {
          typewriterText.innerText = text.substring(0, i);
          await sleep(140);
        }

        await sleep(2000);

        // Delete the text
        for (let i = text.length; i >= 0; i--) {
          typewriterText.innerText = text.substring(0, i);
          await sleep(60);
        }

        await sleep(200);

        // Switch role
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
    };

    typeWriterEffect();
  }, []);

  return (
    <motion.h3
      variants={blackHoleHovered ? nameFadeOut : nameFadeIn}
      initial="hidden"
      animate="visible"
      className="flex h-full items-center justify-center gap-[2px] text-xl font-bold lg:text-2xl"
    >
      <div className="relative">
        {/* Role text */}
        <span
          ref={typewriterTextRef}
          className="rounded-sm px-1"
          style={{ color: style.color }}
        ></span>
        {/* Highlight color */}
        <div
          className="absolute bottom-[1px] z-[-1] block h-[90%] w-full rounded-sm transition-colors duration-700"
          style={{ backgroundColor: style.background }}
        ></div>
      </div>

      {/* Cursor */}
      <motion.span
        variants={cursorBlinking}
        initial="hidden"
        animate="visible"
        className="block h-[85%] w-[3px] select-none bg-slate-600 text-blue-500 text-transparent"
      ></motion.span>
    </motion.h3>
  );
}
