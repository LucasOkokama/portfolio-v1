import { motion } from "motion/react";
import ProjectDate from "./project-card/project-date";
import NameType from "./project-card/name-type";
import Info from "./project-card/info";
import FunFact from "./project-card/fun-fact";
import TechStack from "./project-card/tech-stack";
import ExternalLinks from "./project-card/external-links";

interface Project {
  id: string;
  name: string;
  type: string;
  intro: string;
  info: string[];
  funFact: string | null;
  techStack: string[];
  design: string | null;
  github: string;
  deploy: string | null;
  startDate: string;
  finishDate: string | null;
}

const bannerFadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.6,
    },
  },
};

const cardProjectFadeIn = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={bannerFadeIn}
      initial="hidden"
      animate="visible"
      key={project.id}
      className="grid gap-6"
    >
      <div className="flex flex-col gap-1">
        {/* Date */}
        <ProjectDate
          startDate={project.startDate}
          finishDate={project.finishDate}
        />

        {/* Project Name and Type */}
        <NameType name={project.name} type={project.type} />
      </div>

      <div className="flex flex-col gap-3 lg:gap-8 lg:h-[500px] lg:flex-row">
        {/* Project Banner */}
        <motion.div
          variants={cardProjectFadeIn}
          className="h-full max-h-96 w-full overflow-hidden rounded-xl border border-neutral-700/80 lg:max-h-none lg:max-w-80"
        >
          <img
            src={`/projects/preview/${project.id}/banner.png`}
            alt=""
            className="object-contain"
          />
        </motion.div>

        <div className="relative flex w-full flex-col items-center gap-5 lg:pb-3 lg:pt-2 lg:justify-between lg:gap-0">
          <div className="flex flex-col gap-5">
            {/* Introduction */}
            <div className="text-neutral-500 lg:text-xl">
              {project.intro}
            </div>

            {/* Some extra info */}
            <div className="hidden flex-col gap-2 lg:flex">
              <Info info={project.info} />
            </div>
          </div>

          {/* Fun fact */}
          <div className="hidden lg:block">
            <FunFact funFact={project.funFact} />
          </div>

          {/* Tech stack */}
          <div className="w-full">
            <TechStack techStack={project.techStack} />
          </div>
        </div>
      </div>

      <div>
        {/* External links */}
        <ExternalLinks
          design={project.design}
          github={project.github}
          deploy={project.deploy}
        />
      </div>
    </motion.div>
  );
}
