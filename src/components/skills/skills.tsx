"use client";

import GlitchText from "../ui/glitch-text/glitch-text";
import SkillsCard from "./skills-card";

export default function Skills() {
  return (
    <div className="flex w-full flex-col items-center gap-14">
      <div className="flex w-full items-center justify-center gap-12">
        {/* Divider 1 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-transparent to-neutral-200 dark:to-neutral-800"></div>
        {/* Title */}
        <GlitchText text="Skills" />
        {/* Divider 2 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800"></div>
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
