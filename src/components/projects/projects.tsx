"use client";

import Fuse from "fuse.js";
import GlitchText from "../ui/glitch-text/glitch-text";
import ProjectCard from "./project-card";
import SearchBox from "./search-box";
import ShowMore from "./showMore";
import { useSearchContext } from "@/context/SearchContext";
import { useEffect, useState } from "react";

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
  const { searchValue, showMoreCount, setShowMoreCount } = useSearchContext();

  // Format the finishDate to make the search more accurate
  const formatFinishDateForSearch = (project: Project) => {
    if (project.finishDate === null) return "Ativo";
    if (project.finishDate === "-") return "Pausado";
    return "Finalizado";
  };

  // Fuse.js
  const fuse = new Fuse<Project>(projectsData, {
    keys: [
      "name",
      "type",
      "techStack",
      {
        name: "finishDate",
        getFn: formatFinishDateForSearch,
      },
    ],
    threshold: 0.4,
  });

  // Perform the searches word by word
  const searchProjects = () => {
    if (searchValue) {
      return searchValue.split(" ").reduce((filteredResults, word) => {
        const searchResults = fuse.search(word).map((result) => result.item);
        return filteredResults.filter((project) =>
          searchResults.includes(project),
        );
      }, projectsData);
    } else {
      return projectsData;
    }
  };

  const projectsSearched = searchProjects();
  const displayProjects = projectsSearched.slice(0, showMoreCount);

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

  // Reset the show more count when a search is done
  useEffect(() => {
    setShowMoreCount(3);
  }, [searchValue]);

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

      <div className="relative flex w-full max-w-xl flex-col items-center gap-14 lg:max-w-none">
        <div className="sticky top-[90px] z-[2] flex w-full justify-center lg:top-[110px]">
          <SearchBox />
        </div>

        {displayProjects && displayProjects.length > 0 ? (
          <div className="flex flex-col items-center gap-24">
            {displayProjects.map((project: Project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
            {projectsSearched.length > showMoreCount ? <ShowMore /> : null}
          </div>
        ) : (
          <div className="text-neutral-700 dark:text-neutral-500">
            Nenhum projeto encontrado...
          </div>
        )}
      </div>
    </div>
  );
}
