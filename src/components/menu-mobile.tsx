"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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
      icon: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z",
    },
    {
      name: "Skills",
      icon: "M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z",
    },
    {
      name: "Projects",
      icon: "M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z",
    },
    {
      name: "Statistics",
      icon: "M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
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
              className="absolute right-0 top-12 overflow-hidden rounded-lg border border-neutral-300/80 bg-neutral-200/35 p-1 font-semibold text-neutral-400 dark:border-neutral-700/50 dark:bg-neutral-800/50 dark:text-neutral-500"
            >
              {menuItems.map((item, index) => (
                // Menu mobile items
                <motion.li
                  variants={menuItemsFadeIn}
                  key={index}
                  custom={index}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-2 text-sm transition-colors duration-200 hover:bg-neutral-300/70 hover:text-neutral-800 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                >
                  {/* Items icons */}
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d={item.icon} />
                  </svg>
                  {/* Items text */}
                  {item.name}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </button>
  );
}
