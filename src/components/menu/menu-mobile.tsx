"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

// Animation
const menuFadeIn = {
  hidden: {
    opacity: 0,
    y: -25,
    scale: 0.8,
    height: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      scale: { duration: 0.5 },
      opacity: { duration: 0.5 },
      height: { duration: 0.3 },
    },
  },
  leave: {
    opacity: 0,
    y: -10,
    scale: 0.8,
    height: 0,
    transition: {
      duration: 0.2,
      scale: { duration: 0.5 },
      opacity: { duration: 0.5 },
      height: { duration: 0.6 },
    },
  },
};

const menuItemsFadeIn = {
  hidden: { opacity: 0, y: -16, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.05 * index,
    },
  }),
  leave: (index: number) => ({
    opacity: 0,
    y: -16,
    scale: 0.7,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.3 - index * 0.1,
    },
  }),
};

export default function MenuMobile() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuItems = [
    {
      name: "About",
      icon: `
        <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
      `,
    },
    {
      name: "Design",
      icon: `
      <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brush"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a4 4 0 1 1 4 4h-4" /><path d="M21 3a16 16 0 0 0 -12.8 10.2" /><path d="M21 3a16 16 0 0 1 -10.2 12.8" /><path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg>
      `,
    },
    {
      name: "Skills",
      icon: `
      <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-flame"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" /></svg>
      `,
    },
    {
      name: "Projects",
      icon: `
      <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tools"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5l-4 4l-5 -5" /><path d="M16 17l-1.5 1.5" /></svg>`,
    },
    {
      name: "Statistics",
      icon: `
      <svg  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>
      `,
    },
  ];

  return (
    // Button that triggers the menu mobile
    <button
      onClick={() => setIsMenuVisible(!isMenuVisible)}
      onBlur={() => setIsMenuVisible(false)}
      className="relative rounded-md p-2 hover:bg-neutral-200/80 dark:hover:bg-neutral-800"
    >
      {/* Hamburger menu icon */}
      <svg
        className="w-[24px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>

      <nav>
        <AnimatePresence mode="wait">
          {isMenuVisible && (
            // Menu mobile container
            <motion.ul
              variants={menuFadeIn}
              initial="hidden"
              animate="visible"
              exit="leave"
              className="absolute right-0 top-14 overflow-hidden rounded-lg border border-neutral-400/50 bg-neutral-100/70 p-1 font-semibold text-neutral-500 backdrop-blur-lg dark:border-neutral-700/50 dark:bg-neutral-950/80"
            >
              {menuItems.map((item, index) => (
                <Link href={`#${item.name.toLowerCase()}`} key={index}>
                  {/* // Menu mobile items */}
                  <motion.li
                    variants={menuItemsFadeIn}
                    custom={index}
                    className={`${item.name === "Design" ? "hidden [@media(min-width:500px)]:flex" : "flex"} cursor-pointer items-center gap-3 rounded-lg p-2 text-sm transition-colors duration-200 hover:bg-neutral-300/70 hover:text-neutral-900 dark:hover:bg-neutral-800/70 dark:hover:text-neutral-200`}
                  >
                    {/* Items icons */}
                    <span
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>

                    {/* Items text */}
                    {item.name}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </button>
  );
}
