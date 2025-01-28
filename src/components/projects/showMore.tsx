import styles from "../css/projects.module.css";
import { Geist } from "next/font/google";
import { useSearchContext } from "@/context/SearchContext";
import { useRef } from "react";

const geistSans = Geist({ subsets: ["latin"] });

export default function ShowMore() {
  const { setShowMoreCount } = useSearchContext();
  const showMoreLightEffectRef = useRef<HTMLSpanElement>(null);
  const showMoreBtnRef = useRef<HTMLButtonElement>(null);
  let timeoutId: NodeJS.Timeout | undefined;

  // Show more projects
  const updateShowMoreCount = () => setShowMoreCount((prev) => prev + 3);

  // Move show more hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const isDarkMode = document.documentElement.classList.contains("dark");

    const btn = showMoreBtnRef.current;
    const span = showMoreLightEffectRef.current;

    if (btn && span) {
      const { left, top } = btn.getBoundingClientRect();

      span.style.setProperty(
        "--mouse-x",
        `${clientX - left - span.offsetWidth / 2}px`,
      );

      span.style.setProperty(
        "--mouse-y",
        `${clientY - top - span.offsetHeight / 2}px`,
      );

      span.style.setProperty(
        "--bg-color",
        isDarkMode ? "rgb(177, 177, 177)" : "rgb(54, 54, 54)",
      );
    }
  };

  // Reset position of show more hover effect
  const handleMouseLeave = () => {
    const btn = showMoreBtnRef.current;
    const span = showMoreLightEffectRef.current;

    if (btn && span) {
      const middleBtnWidth = btn.offsetWidth / 2;
      const middleBtnHeight = btn.offsetHeight / 2;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        span.style.setProperty(
          "--mouse-x",
          `${middleBtnWidth - span.offsetWidth / 2}px`,
        );

        span.style.setProperty(
          "--mouse-y",
          `${middleBtnHeight - span.offsetHeight / 2}px`,
        );
      }, 800);
    }
  };

  return (
    <button
      ref={showMoreBtnRef}
      onClick={updateShowMoreCount}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${geistSans.className} bg relative w-fit overflow-hidden rounded-md border border-neutral-400/60 bg-neutral-100 px-5 py-[10px] text-sm text-neutral-500/70 duration-300 hover:border-neutral-500/80 hover:text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-600 dark:hover:border-neutral-700 dark:hover:text-neutral-400/80`}
    >
      <span
        ref={showMoreLightEffectRef}
        className={`${styles.showMoreLightEffect}`}
      ></span>
      Mostrar mais projetos
    </button>
  );
}
