import styles from "./css/design.module.css";
import { useDesignThemeContext } from "@/context/DesignThemeContext";
import Animation from "./steps/animation";
import Structure from "./steps/structure";
import VisualEffects from "./steps/visual-effects";
import Colorization from "./steps/colorization";
import Typography from "./steps/typography";
import Spacing from "./steps/spacing";
import Base from "./steps/base";

export default function Canvas({ design }: { design: number }) {
  const { theme, setTheme } = useDesignThemeContext();

  return (
    <div
      className={`${theme === "light" ? "border-neutral-800 bg-[#527aa3] text-neutral-700/70" : "border-neutral-700/80 bg-[#0e1720] text-neutral-700/50"} relative flex h-[734px] w-[450px] items-center justify-center overflow-hidden rounded-3xl border p-6 pt-20 transition-colors duration-500`}
    >
      {/* Padrão do grid */}
      <svg
        className="absolute left-0 top-0 z-[2] h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 3"
            />
          </pattern>
        </defs>
        {/* Aplicando o pattern em toda a área */}
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Theme button for the Canvas */}
      <div
        className={`${theme === "light" ? "text-gray-300" : "text-gray-500"} absolute right-5 top-5 z-[2] flex items-center gap-2`}
      >
        <svg
          onClick={() => setTheme("light")}
          className={`${theme === "light" ? "border-gray-600 bg-[#194064] hover:bg-[#295781]" : "border-gray-800 bg-[#101c24] hover:bg-[#192c38] hover:text-gray-200"} relative w-9 cursor-pointer rounded-md border p-2 duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>

        <svg
          onClick={() => setTheme("dark")}
          className={`${theme === "light" ? "border-gray-600 bg-[#194064] hover:bg-[#295781]" : "border-gray-800 bg-[#101c24] hover:bg-[#192c38] hover:text-gray-200"} relative w-9 cursor-pointer rounded-md border p-2 duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
        </svg>
      </div>

      {design === 1 && <Base />}
      {design === 2 && <Structure />}
      {design === 3 && <Spacing />}
      {design === 4 && <Typography />}
      {design === 5 && <Colorization />}
      {design === 6 && <VisualEffects />}
      {design === 7 && <Animation />}
    </div>
  );
}
