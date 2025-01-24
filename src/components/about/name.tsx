"use client";

import { motion } from "motion/react";
import { Ubuntu_Sans_Mono } from "next/font/google";
import { useEffect, useRef } from "react";

const ubuntoSansMono = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nameFadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Name() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    decryptEffect();

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    // Name
    <motion.div
      onMouseEnter={decryptEffect}
      variants={nameFadeIn}
      initial="hidden"
      animate="visible"
    >
      <h1
        ref={nameRef}
        className={`${ubuntoSansMono.className} w-fit bg-gradient-to-r from-[#F93075] to-[#8c00ff] bg-clip-text text-[42px] font-extrabold text-transparent sm:text-[42px]`}
        data-original-name={
          window.innerWidth < 640 ? "Lucas Okokama" : "Lucas Kazuhiro Okokama"
        }
      >
      </h1>
    </motion.div>
  );
}
