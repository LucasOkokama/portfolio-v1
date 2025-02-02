"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

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
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1.5,
    },
  },
};

export default function Tooltip({ children, text, y, position }: Props) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(0);
  const childrenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isTooltipVisible && textRef.current && childrenRef.current) {
      // The distance between the child and the left side of the window
      const { left } = childrenRef.current.getBoundingClientRect();
      // Width of the tooltip
      const { width } = textRef.current.getBoundingClientRect();

      // Recalcular a posição do tooltip com base no lado
      const updateTooltipPosition = (clientX: number) => {
        const windowWidthMiddle = window.innerWidth / 2;

        // Make the tooltip appear to the left or right of the mouse depending on its position
        if (position === "leftOrRight") {
          if (clientX < windowWidthMiddle) {
            setTooltipPosition(clientX - left - 8);
          } else {
            setTooltipPosition(clientX - left - width + 16);
          }
        }
        // Make the tooltip stay centered with the mouse
        else if (position === "center") {
          setTooltipPosition(clientX - left - width / 2);
        }
      };

      const handleMouseMove = (event: MouseEvent) => {
        updateTooltipPosition(event.clientX);
      };

      // Add a listener to track the mouse movement
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isTooltipVisible]);

  return (
    <div className="relative">
      <div
        ref={childrenRef}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence mode="wait">
        {isTooltipVisible && (
          <motion.span
            variants={tooltipFadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={textRef}
            style={{
              marginTop: `${y}px`,
              left: `${tooltipPosition}px`,
            }}
            className="pointer-events-none absolute left-0 z-[1] whitespace-nowrap rounded-md border border-neutral-400/60 bg-neutral-200/90 px-3 py-[6px] text-sm text-neutral-900 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/90 dark:text-white"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
