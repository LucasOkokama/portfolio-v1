"use client";

import { useEffect, useState } from "react";
import GlitchText from "../ui/glitch-text/glitch-text";
import TechStack from "./tech-stack";
import ProjectDate from "./project-date";
import Info from "./info";
import NameType from "./name-type";
import ExternalLinks from "./external-links";
import FunFact from "./fun-fact";
import { motion } from "motion/react";

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
  hidden: { opacity: 0, x: -60, y: 60, scale: 0.7 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

export default function Projects() {
  const [loading, setLoading] = useState<Project[] | null>(null);
  const [projectsData, setProjectsData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the Projects
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects", {
          headers: {
            Accept: "application/json",
            mehotd: "GET",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjectsData(data.projectsData);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-14">
      <div className="flex w-full items-center justify-center gap-12">
        {/* Divider 1 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-transparent to-neutral-200 dark:to-neutral-800"></div>
        {/* Title */}
        <GlitchText text="Projetos" />
        {/* Divider 2 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800"></div>
      </div>

      <div className="max-w-xl lg:max-w-none">
        <div></div>

        <div className="flex flex-col gap-36 lg:gap-24">
          {projectsData.map((project: Project) => (
            <div key={project.id} className="grid gap-5">
              <div className="flex flex-col gap-1">
                {/* Date */}
                <ProjectDate
                  startDate={project.startDate}
                  finishDate={project.finishDate}
                />

                {/* Project Name and Type */}
                <NameType name={project.name} type={project.type} />
              </div>
              <div className="flex flex-col gap-8 lg:h-[500px] lg:flex-row">
                {/* Project Banner */}
                <motion.div
                  variants={bannerFadeIn}
                  initial="hidden"
                  animate="visible"
                  className="h-full max-h-96 w-full overflow-hidden rounded-xl border border-neutral-700/80 lg:max-h-none lg:max-w-80"
                >
                  <img
                    src={`/projects/preview/${project.id}/banner.png`}
                    alt=""
                    className="object-contain"
                  />
                </motion.div>

                <div className="relative flex w-full flex-col items-center gap-8 pb-3 pt-1 lg:justify-between lg:gap-0">
                  <div className="flex flex-col gap-5">
                    {/* Introduction */}
                    <div className="text-xl text-neutral-500">
                      {project.intro}
                    </div>

                    {/* Some extra info */}
                    <div className="flex flex-col gap-2">
                      <Info info={project.info} />
                    </div>
                  </div>

                  {/* Fun fact */}
                  <div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
