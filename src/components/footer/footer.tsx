import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useThemeContext();
  const constraintsRef = useRef(null);
  const madeWith = ["nextjs.svg", "tailwindcss.svg", "motion.svg", "figma.svg"];
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="relative flex w-full max-w-md flex-col items-center justify-center pb-8">
      {/* Divider 1 */}
      <div className="mb-7 h-[1px] w-full rounded-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-600"></div>
      <div className="mb-2 flex select-none items-center gap-2 text-xs">
        <span className="p-1">MADE WITH</span>
        {madeWith.map((item, index) => (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileTap={{ scale: 1.3 }}
            key={index}
            className="w-7 cursor-grab p-1 active:cursor-grabbing"
            // Change svg color using filter
            style={{
              filter:
                theme === "dark"
                  ? "invert(100%) sepia(4%) saturate(141%) hue-rotate(256deg) brightness(114%) contrast(76%)"
                  : "invert(24%) sepia(15%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(88%)",
            }}
          >
            <Image
              src={`/skills/icons/solid/${item}`}
              alt={item}
              width={28} // Ajuste o valor conforme necessário
              height={28} // Ajuste o valor conforme necessário
              className="pointer-events-none rounded-t-xl"
            />
          </motion.div>
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
