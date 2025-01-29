import { Rethink_Sans, Geist, Inter, Lexend } from "next/font/google";
import { useEffect, useState } from "react";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });
const geistSans = Geist({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const madeWith = ["nextjs.svg", "tailwindcss.svg", "motion.svg", "figma.svg"];

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  });

  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center pb-8">
      {/* Divider 1 */}
      <div className="mb-7 h-[1px] w-full rounded-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>
      <div className="mb-2 flex select-none items-center gap-4 text-xs">
        MADE WITH
        {madeWith.map((item, index) => (
          <img
            src={`/skills/icons/solid/${item}`}
            alt={item}
            key={index}
            className="w-5"
            // Change SVG color using filter
            style={{
              filter: isDarkMode
                ? "invert(100%) sepia(4%) saturate(141%) hue-rotate(256deg) brightness(114%) contrast(76%)"
                : "invert(24%) sepia(15%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(88%)",
            }}
          />
        ))}
      </div>
      <div className="font-ultralight w-fit text-sm text-neutral-500">
        © 2025{" "}
        <a
          href="https://github.com/LucasOkokama"
          target="_blank"
          className="font-semibold text-neutral-400"
        >
          Lucas Okokama
        </a>
        . All rights reserved.
      </div>
    </div>
  );
}
