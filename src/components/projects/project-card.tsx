import styles from "./css/projects.module.css";
import { motion } from "motion/react";
import ProjectDate from "./project-card/project-date";
import NameType from "./project-card/name-type";
import Info from "./project-card/info";
import FunFact from "./project-card/fun-fact";
import TechStack from "./project-card/tech-stack";
import ExternalLinks from "./project-card/external-links";
import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";

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
  const { theme } = useThemeContext();
  const [imgPath, setImgPath] = useState<string>("#");
  let zoomValue: number = 2;
  const zoomParentRef = useRef<HTMLDivElement>(null);
  const zoomChildRef = useRef<HTMLImageElement>(null);

  const handleZoomEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    let zoomParent = null;
    let zoomChild = null;

    if (zoomParentRef.current && zoomChildRef.current) {
      zoomParent = zoomParentRef.current;
      zoomChild = zoomChildRef.current;

      const { left, top, width, height } = zoomParent.getBoundingClientRect();

      zoomChild.style.setProperty(
        "--x",
        `${((e.clientX - left) / width) * 100}%`,
      );
      zoomChild.style.setProperty(
        "--y",
        `${((e.clientY - top) / height) * 100}%`,
      );
    }
  };

  const increaseZoomValue = () => {
    // Max value = 5
    if (zoomValue < 5) {
      zoomValue += 1;
    }
    if (zoomParentRef.current) {
      zoomParentRef.current.style.setProperty("--zoom", zoomValue.toString());
    }
  };

  const decreaseZoomValue = () => {
    // Min value = 2
    if (zoomValue > 2) {
      zoomValue -= 1;
    }
    if (zoomParentRef.current) {
      zoomParentRef.current.style.setProperty("--zoom", zoomValue.toString());
    }
  };

  useEffect(() => {
    // Fetch the project image preview
    const fetchImagePreview = async () => {
      try {
        const response = await fetch(
          `/api/projects/preview?projectId=${project.id}&theme=${theme}`,
          {
            headers: {
              Accept: "application/json",
              method: "GET",
            },
          },
        );

        if (!response) {
          throw new Error("Failed to fetch preview image");
        }

        const data = await response.json();
        setImgPath(data);
      } catch (err) {
        setImgPath("#");
        console.log(err);
      }
    };

    fetchImagePreview();
  }, [theme]);

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

      <div className="flex flex-col gap-3 lg:h-[500px] lg:flex-row lg:gap-8">
        {/* Project Banner */}
        <motion.div
          onMouseMove={handleZoomEffect}
          onMouseEnter={() => {
            zoomParentRef.current?.style.setProperty(
              "--zoom",
              zoomValue.toString(),
            );
          }}
          onMouseLeave={() => {
            zoomParentRef.current?.style.setProperty("--zoom", "1");
          }}
          ref={zoomParentRef}
          variants={cardProjectFadeIn}
          className={`${styles.projectImgContainer} group relative h-full min-h-96 w-full overflow-hidden rounded-xl border border-neutral-700/80 lg:max-w-80`}
        >
          <img
            ref={zoomChildRef}
            src={imgPath}
            alt={project.name}
            className={`${styles.projectImgZoom} absolute h-full w-full object-cover object-top`}
          />

          <div className="absolute bottom-2 right-2 flex gap-2">
            <div
              onClick={() => {
                increaseZoomValue();
              }}
              className="h-fit w-fit cursor-pointer select-none rounded-lg bg-neutral-300 p-1 opacity-0 duration-1000 group-hover:opacity-100 dark:bg-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </div>

            <div
              onClick={() => {
                decreaseZoomValue();
              }}
              className="h-fit w-fit cursor-pointer select-none rounded-lg bg-neutral-300 p-1 opacity-0 duration-1000 group-hover:opacity-100 dark:bg-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
              </svg>
            </div>
          </div>
        </motion.div>

        <div className="relative flex w-full flex-col items-center gap-5 lg:justify-between lg:gap-0 lg:pb-3 lg:pt-2">
          <div className="flex flex-col gap-5">
            {/* Introduction */}
            <div className="text-neutral-500 lg:text-xl">{project.intro}</div>

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
