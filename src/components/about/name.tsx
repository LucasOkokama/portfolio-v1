"use client";

import { useBlackHoleContext } from "@/context/BlackHoleContext";
import { motion } from "motion/react";
import { Ubuntu_Sans_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const ubuntoSansMono = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Name() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [originalName, setOriginalName] = useState("");
  const { blackHoleHovered } = useBlackHoleContext();

  const nameFadeIn = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 75,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const nameFadeOut = {
    visible: {
      opacity: 0,
      scale: 0.5,
      y: 75,
      transition: {
        duration: 0.3,
      },
    },
  };

  const alphabet =
    "�0123456789�abcdefghijklmnopqrstuvwxyz�ABCDEFGHIJKLMNOPQRSTUVWXYZ�.,;:-_!?@#$%^&*()=+|<>~`�";

  function decryptEffect() {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let iterations = 0;
    const name = nameRef.current;
    const originalName = name?.dataset.originalName ?? "";

    if (name && originalName) {
      intervalRef.current = setInterval(() => {
        name.innerText = originalName
          .split("")
          .map(
            (letter, index) =>
              index < iterations || letter === " "
                ? originalName[index] // Insert the correct letter
                : alphabet[Math.floor(Math.random() * alphabet.length)], // Insert a random character
          )
          .join("");

        // Stop the effect when the full name is revealed
        if (iterations >= originalName.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
        }
        iterations += 0.25; // Increase iterations progressively
      }, 50);
    }
  }

  // Get name based on the window innerWidth
  useEffect(() => {
    const name =
      window.innerWidth < 640 ? "Lucas Okokama" : "Lucas Kazuhiro Okokama";
    setOriginalName(name);
  }, []);

  // Runs initial decrypt effect
  useEffect(() => {
    decryptEffect();

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [originalName]);

  return (
    // Name
    <motion.div
      onMouseEnter={decryptEffect}
      variants={blackHoleHovered ? nameFadeOut : nameFadeIn}
      initial="hidden"
      animate="visible"
    >
      <h1
        ref={nameRef}
        className={`${ubuntoSansMono.className} w-fit bg-gradient-to-r from-[#A259F6] to-[#0BB3D5] bg-clip-text text-[38px] font-extrabold text-transparent sm:text-[54px]`}
        data-original-name={originalName}
      ></h1>
    </motion.div>
  );
}
