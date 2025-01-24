"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import styles from "./css/about.module.css";

// Animation
const personalLinksFadeIn = {
  hidden: { opacity: 0, x: -50, y: 20, scale: 0.7 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.8,
      delay: 0.2 * index,
    },
  }),
};

export default function PersonalLinks() {
  const emailSpan = useRef<HTMLSpanElement>(null);

  // Personal Links Data
  const personalLinks = [
    { link: "https://github.com/LucasOkokama", text: "GitHub" },
    { link: "https://www.linkedin.com/in/lucas-okokama/", text: "LinkedIn" },
    { link: "https://wakatime.com/@LucasOkokama", text: "WakaTime" },
    { link: "lucaslko429@gmail.com", text: "Email" },
  ];

  // Border light effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const isDarkMode = document.documentElement.classList.contains("dark");

    document
      .querySelectorAll<HTMLElement>(".personalLinksItem")
      .forEach((item) => {
        const { left, top } = item.getBoundingClientRect();
        item.style.setProperty("--mouse-x", `${clientX - left}px`);
        item.style.setProperty("--mouse-y", `${clientY - top}px`);
        item.style.setProperty(
          "--border-color",
          isDarkMode ? "rgb(177, 177, 177)" : "rgb(54, 54, 54)",
        );
      });
  };

  // Copy email to clipboard
  const copyToClipboard = async (link: string, text: string) => {
    try {
      await navigator.clipboard.writeText(link);
      if (emailSpan.current) {
        emailSpan.current.innerText = "Copied!";
        setTimeout(() => (emailSpan.current!.innerText = text), 7000);
      }
    } catch {}
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`personalLinksContainer flex flex-wrap gap-3 ${styles.personalLinksContainer}`}
    >
      {personalLinks.map((item, index) => (
        <motion.a
          key={index}
          href={index === 3 ? undefined : item.link}
          onClick={
            index === 3
              ? () => copyToClipboard(item.link, item.text)
              : undefined
          }
          target={index !== 3 ? "_blank" : undefined}
          variants={personalLinksFadeIn}
          initial="hidden"
          animate="visible"
          custom={index}
          className={`personalLinksItem ${styles.personalLinksItem} relative h-full w-fit rounded-md p-[1px]`}
        >
          <button className="relative z-[2] flex items-center gap-1 rounded-md border border-neutral-300 bg-neutral-200 px-5 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900">
            {index === 3 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17px"
                viewBox="0 -960 960 960"
                width="17px"
                fill="currentColor"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            )}
            <span ref={index === 3 ? emailSpan : undefined}>{item.text}</span>
          </button>
        </motion.a>
      ))}
    </div>
  );
}
