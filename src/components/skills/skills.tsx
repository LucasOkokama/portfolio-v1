"use client";

import { Geist } from "next/font/google";
import SkillsCard from "./skills-card";
import styles from "./css/skills.module.css";

const geistSans = Geist({ subsets: ["latin"] });

export default function Skills() {
  return (
    <div className="flex w-full flex-col items-center gap-14">
      <div className="flex w-full items-center justify-center gap-12">
        {/* Divider 1 */}
        <div className="h-[2px] w-[25%] rounded-full bg-neutral-200 dark:bg-neutral-800/60"></div>
        {/* Title */}
        <h2
          className={`${geistSans.className} ${styles.title} relative select-none text-5xl font-extrabold text-neutral-800 before:bg-white/[0.97] before:bg-texture before:bg-blend-lighten after:bg-white/[0.97] after:bg-texture after:bg-blend-lighten dark:text-neutral-100 dark:before:bg-neutral-950/[0.97] dark:before:bg-blend-darken dark:after:bg-neutral-950/[0.97] dark:after:bg-blend-darken`}
          data-title="Skills"
        >
          Skills
        </h2>
        {/* Divider 2 */}
        <div className="h-[2px] w-[25%] rounded-full bg-neutral-200 dark:bg-neutral-800/60"></div>
      </div>
      {/* Stack icons */}
      <div className="flex w-full flex-wrap gap-20 sm:gap-8 lg:justify-between lg:gap-0">
        <SkillsCard type="frontend" />
        <SkillsCard type="backend" />
        <SkillsCard type="tools" />
      </div>
    </div>
  );
}
