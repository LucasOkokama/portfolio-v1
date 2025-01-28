"use client";

import { useEffect, useState } from "react";
import GlitchText from "../ui/glitch-text/glitch-text";
import ProjectsCards from "./projects-cards";
import { SearchContext } from "@/context/SearchContext";
import SearchBox from "./search-box";

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

export default function Projects() {
  const [loading, setLoading] = useState(null);
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

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

      <div className="flex w-full max-w-xl flex-col items-center gap-14 lg:max-w-none">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <SearchBox />
          <ProjectsCards projectsData={projectsData} />
        </SearchContext.Provider>
      </div>
    </div>
  );
}
