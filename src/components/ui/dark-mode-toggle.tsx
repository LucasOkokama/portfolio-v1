"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const themes = ["dark", "light", "system"];
  const [themeSelected, setThemeSelected] = useState(0);
  const { setTheme } = useThemeContext();

  const icons: { [theme: string]: string } = {
    dark: "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",
    light:
      "M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z",
    system:
      "M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z",
  };
  const [themePath, setThemePath] = useState("");

  // Create debounce model
  const debounce = (delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setThemeSelected((prev) => (prev + 1) % themes.length);
      }, delay);
    };
  };

  const debouncedDarkMode = debounce(600);

  // Initial theme check
  useEffect(() => {
    const userTheme = localStorage.getItem("theme") || "system";
    setThemeSelected(themes.indexOf(userTheme));
  }, []);

  // Function that will add or remove the class "dark", save the theme in the localStorage, change the theme icon
  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    function handleThemeChange() {
      const theme = themes[themeSelected];
      const isDarkMode =
        theme === "dark" || (theme === "system" && systemPrefersDark);

      // Add  or remove "dark" class to the html tag
      document.documentElement.classList.toggle("dark", isDarkMode);
      // Save if the dark mode is enabled
      setTheme(isDarkMode ? "dark" : "light");

      localStorage.setItem("theme", theme);

      // Change the theme icon
      setThemePath(icons[theme]);
    }

    handleThemeChange();
  }, [themeSelected]);

  // Shortcut to change the theme
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "b") {
        event.preventDefault();
        changeTheme();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Change the theme selected
  function changeTheme() {
    debouncedDarkMode();
  }

  return (
    // Button that triggers the changeTheme()
    <button
      onClick={() => changeTheme()}
      className="cursor-pointer rounded-md p-2 duration-500 hover:bg-neutral-200/80 dark:hover:bg-neutral-800"
    >
      {/* Theme icon */}
      <svg
        className="w-[22.5px]"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <AnimatePresence mode="wait">
          <motion.path
            key={themePath}
            d={themePath}
            initial={{ y: -1000 }}
            animate={{ y: 0, transition: { duration: 0.4 } }}
            exit={{ y: 1000, transition: { duration: 0.2 } }}
          />
        </AnimatePresence>
      </svg>
    </button>
  );
}
