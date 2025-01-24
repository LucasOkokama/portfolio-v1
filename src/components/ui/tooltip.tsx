"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  text: string;
  y: number;
  position: string;
}

const tooltipFadeIn = {
  hidden: {
    opacity: 0,
    y: -15,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1.5,
    },
  },
};

export default function Tooltip({ children, text, y, position }: Props) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  return (
    <div className="relative">
      <div
        ref={childrenRef}
        onMouseMove={({ clientX }) => {
          if (!childrenRef.current || !textRef.current) return;

          // Make the tooltip appear to the left or right of the mouse depending on its position
          if (position === "leftOrRight") {
            const windowWidthMiddle = window.innerWidth / 2;

            if (clientX < windowWidthMiddle) {
              const { left } = childrenRef.current.getBoundingClientRect();
              textRef.current.style.left = clientX - left + "px";
            } else {
              const { right } = childrenRef.current.getBoundingClientRect();
              textRef.current.style.left = clientX - right - 10 + "px";
            }
          }
          // Make the tooltip stay centered with the mouse
          else if (position === "center") {
            const { left } = childrenRef.current.getBoundingClientRect();
            const textWidth = textRef.current.getBoundingClientRect().width / 2;
            textRef.current.style.left = clientX - left - textWidth + "px";
          }
        }}
        // Show or hide the tooltip
        onMouseEnter={() => {
          setIsTooltipVisible(true);
        }}
        onMouseLeave={() => {
          setIsTooltipVisible(false);
        }}
      >
        {children}
      </div>
      <AnimatePresence mode="wait">
        {isTooltipVisible && (
          // Tooltip
          <motion.span
            variants={tooltipFadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={textRef}
            style={{
              marginTop: `${y}px`,
            }}
            className="pointer-events-none absolute left-0 whitespace-nowrap rounded-md border border-neutral-400/60 bg-neutral-200/90 px-3 py-[6px] text-sm dark:border-neutral-700 dark:bg-neutral-800/90"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
