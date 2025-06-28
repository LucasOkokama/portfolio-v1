"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

export default function Tech({ item }: { item: string }) {
  const { theme } = useThemeContext();
  // Logos that need color inversion for dark mode
  const blackWhiteIcons = ["flask", "pandas", "vercel", "nextjs", "motion", "express"];

  // Function that formats the icon name to locate it in the files
  function formatItemName(name: string) {
    return name.toLocaleLowerCase().replace(" ", "");
  }

  // Function that changes the black/white logo based on dark mode
  function getImageFilter(name: string) {
    if (blackWhiteIcons.includes(name.toLocaleLowerCase())) {
      return {
        filter: theme === "dark"
          ? "invert(100%) sepia(4%) saturate(141%) hue-rotate(256deg) brightness(114%) contrast(76%)"
          : "invert(24%) sepia(15%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(88%)",
      };
    }
  }

  return (
    <div className="relative flex shrink-0 items-center gap-[6px] rounded-full border border-neutral-400/60 bg-neutral-200/70 px-3 py-[7px] duration-100 hover:border-neutral-500/80 hover:bg-neutral-300/80 dark:border-neutral-700/80 dark:bg-neutral-800/70 dark:hover:border-neutral-600 dark:hover:bg-neutral-700/70">
      {/* Tech icon */}
      <Image
        src={`/skills/icons/colorized/${formatItemName(item)}.svg`}
        className="h-[16px] w-[16px] select-none rounded-sm"
        alt={item + " icon"}
        style={getImageFilter(item)} // Style to change the color of black/white logos
        width={16}
        height={16}
      />
      {/* Tech name */}
      <p
        className={`${lexend.className} w-fit text-xs text-neutral-700 lg:text-sm dark:text-neutral-300`}
      >
        {item}
      </p>
    </div>
  );
}
