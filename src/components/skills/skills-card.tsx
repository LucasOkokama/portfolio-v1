"use client";

import { motion, useInView } from "motion/react";
import { Lexend } from "next/font/google";
import Tooltip from "../ui/tooltip";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

const lexend = Lexend({ subsets: ["latin"] });

// Animation
const skillsFadeIn = {
  hidden: { opacity: 0, x: -50, y: 40, scale: 0.5 },
  visible: ([outerIndex, innerIndex]: [number, number]) => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
        delay: outerIndex / 1.5 + 0.2 * innerIndex,
      },
    };
  },
};

interface Item {
  name: string;
  file: string;
  link: string;
}

export default function SkillsCard({ type }: { type: string }) {
  const { theme } = useThemeContext();
  const [stackData, setStackData] = useState<Item[][]>([]);
  const parentRef = useRef(null);
  const isInView = useInView(parentRef);

  useEffect(() => {
    // Get a specific type of skills
    function getSkills(type: string) {
      fetch(`/skills/${type}.json`)
        .then((response) => response.json())
        .then((json) => {
          setStackData(json);
        });
    }

    getSkills(type);
  }, [type]);

  return (
    // Skills Card Container (gradient border)
    <div
      ref={parentRef}
      className="h-fit w-full rounded-md bg-gradient-to-b from-[#919191] to-transparent to-80% p-[1px] sm:max-w-[280px] dark:from-[#2b2b2b]"
    >
      {/* Fake background color and texture */}
      <div className="relative rounded-md bg-white before:absolute before:z-[1] before:h-full before:w-full before:bg-texture before:opacity-[3%] dark:bg-neutral-950">
        {/* Internal container (internal padding) */}
        <div className="flex flex-col gap-8 px-8 pt-8">
          {/* Title */}
          <div className="flex w-full justify-center text-center">
            <h1
              className={`${lexend.className} relative bg-gradient-to-r from-transparent via-[#e2e2e2] to-transparent px-12 py-[6px] text-center text-lg font-semibold text-neutral-700 dark:via-[#252525] dark:text-neutral-300`}
            >
              {type.toUpperCase()}
            </h1>
          </div>
          {/* Techs */}
          <div className="z-[2] flex flex-col gap-6">
            {stackData.map((subArray, outerIndex) => (
              // Type lines (Languages, Frameworks, Libraries, IDE, Databases etc...)
              <div
                key={outerIndex}
                className="flex flex-wrap justify-center gap-4"
              >
                {subArray.map((item, innerIndex) => (
                  // Tooltip for each item
                  <Tooltip
                    text={item.name}
                    y={15}
                    position="leftOrRight"
                    key={innerIndex}
                  >
                    {/* Specific Item */}
                    <motion.div
                      variants={skillsFadeIn}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      custom={[outerIndex, innerIndex]}
                      key={innerIndex}
                      className="select-none"
                    >
                      <a href={item.link} target="_black">
                        <Image
                          src={`/skills/icons/solid/${item.file}`}
                          alt={item.name}
                          className="w-10"
                          // Change SVG color using filter
                          style={{
                            filter: theme === "dark"
                              ? "invert(100%) sepia(4%) saturate(141%) hue-rotate(256deg) brightness(114%) contrast(76%)"
                              : "invert(24%) sepia(15%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(88%)",
                          }}
                          width={40}
                          height={40}
                        />
                      </a>
                    </motion.div>
                  </Tooltip>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
