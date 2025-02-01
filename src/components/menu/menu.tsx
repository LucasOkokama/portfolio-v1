"use client";

import styles from "./css/menu.module.css";
import MyLogo from "../ui/my-logo";
import DarkModeToggle from "../ui/dark-mode-toggle";
import MenuMobile from "./menu-mobile";
import Tooltip from "../ui/tooltip";
import { useEffect } from "react";
import Link from "next/link";

export default function Menu() {
  const menuItems = ["About", "Skills", "Projects", "Statistics"];

  useEffect(() => {
    // Scrolls to a specific section
    const scrollToHash = (section: string) => {
      const element = document.getElementById(section);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      window.history.pushState(null, "", `#${section}`);
    };

    // Shortcut to change the section (Key "1" => Section 1, Key "2" => Section 2, etc...)
    const handleKeyDown = (event: KeyboardEvent) => {
      // Checks if there is an input focused (aka search box)
      const isInputFocused = document.activeElement instanceof HTMLInputElement;

      // If not, just scrolls to the selected section
      if (!isInputFocused) {
        const section = menuItems[Number(event.key) - 1];
        if (section) {
          scrollToHash(section.toLowerCase());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      className={`duration-800 ${styles.transparentBackground} flex w-full items-stretch justify-between rounded-xl bg-neutral-100/80 px-5 py-2 shadow-md shadow-neutral-900/[0.1] sm:px-8 dark:bg-neutral-950/80 dark:shadow-neutral-100/[0.02]`}
    >
      <MyLogo />
      <div className="flex items-center gap-4">
        <ul className="hidden gap-5 text-[15px] font-semibold text-neutral-500 sm:flex dark:text-neutral-500">
          {menuItems.map((item, index) => (
            <div className="z-30" key={item}>
              <Tooltip text={(index + 1).toString()} y={10} position="center">
                <Link href={`#${item.toLowerCase()}`}>
                  <li className="cursor-pointer p-2 transition-colors duration-200 hover:text-neutral-800 dark:hover:text-neutral-200">
                    {item}
                  </li>
                </Link>
              </Tooltip>
            </div>
          ))}
        </ul>

        <div className="h-[75%] w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>

        <div className="flex gap-2">
          <Tooltip text="Ctrl B" y={10} position="center">
            <DarkModeToggle />
          </Tooltip>

          <div className="block sm:hidden">
            <MenuMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}
