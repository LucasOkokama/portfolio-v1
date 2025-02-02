import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const constraintsRef = useRef(null);
  const madeWith = ["nextjs.svg", "tailwindcss.svg", "motion.svg", "figma.svg"];
  const currentYear: number = new Date().getFullYear();

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  });

  return (
    <div className="relative flex w-full max-w-md flex-col items-center justify-center pb-8">
      {/* Divider 1 */}
      <div className="mb-7 h-[1px] w-full rounded-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-600"></div>
      <div className="mb-2 flex select-none items-center gap-2 text-xs">
        <span className="p-1">MADE WITH</span>
        {madeWith.map((item, index) => (
          <motion.img
            drag
            dragConstraints={constraintsRef}
            whileTap={{ scale: 1.3 }}
            src={`/skills/icons/solid/${item}`}
            alt={item}
            key={index}
            className="w-7 cursor-pointer p-1"
            // Change SVG color using filter
            style={{
              filter: isDarkMode
                ? "invert(100%) sepia(4%) saturate(141%) hue-rotate(256deg) brightness(114%) contrast(76%)"
                : "invert(24%) sepia(15%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(88%)",
            }}
          />
        ))}
      </div>
      <div className="font-ultralight flex w-fit flex-col items-center gap-1 text-sm text-neutral-400 md:flex-row dark:text-neutral-500">
        <span className="w-fit">
          © {currentYear}{" "}
          <a
            href="https://github.com/LucasOkokama"
            target="_blank"
            className="font-semibold text-neutral-500 dark:text-neutral-400"
          >
            Lucas Okokama
          </a>
          .
        </span>
        <span className="w-fit">All rights reserved.</span>
      </div>

      {/* Drag techs box */}
      <span
        ref={constraintsRef}
        className="absolute inset-0 bottom-[14px] top-[-32] z-[-10]"
      ></span>
    </div>
  );
}
