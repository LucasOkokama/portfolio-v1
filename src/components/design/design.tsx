import { motion } from "motion/react";
import GlitchText from "../ui/glitch-text/glitch-text";
import { useState } from "react";
import { Rethink_Sans, Geist, Inter, Lexend } from "next/font/google";
import Canvas from "./canvas";
import DesignThemeContextProvider from "@/context/DesignThemeContext";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });
const geistSans = Geist({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export default function Design() {
  const [selectedDesign, setSelectedDesign] = useState(6);

  const steps = [
    "Base",
    "Estrutura",
    "Espaçamento",
    "Tipografia",
    "Colorização",
    "Efeitos Visuais",
    "Animações",
  ];

  const colors = [
    "bg-blue-300",
    "bg-neutral-200",
    "bg-purple-300",
    "bg-blue-300",
    "bg-emerald-300",
    "bg-yellow-300",
    "bg-neutral-200",
  ];

  return (
    <div className="flex w-full flex-col gap-12">
      <div className="flex w-full items-center justify-center gap-12">
        {/* Divider 1 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-transparent to-neutral-200 dark:to-neutral-800"></div>
        {/* Title */}
        <GlitchText text="Design" />
        {/* Divider 2 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800"></div>
      </div>
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:justify-between">
        {/* Left Column */}
        <div className="flex w-full min-w-[336px] justify-center gap-7 lg:flex-col lg:justify-start lg:gap-12 lg:pt-8">
          {steps.map((topics, index) => (
            <motion.label
              id={"design_topic_" + (index + 1).toString()}
              key={index}
              className={`${lexend.className} relative flex w-fit items-end gap-3 text-neutral-700`}
            >
              {/* Input */}
              <input
                className="hidden"
                type="radio"
                name="good-design"
                value={index}
                checked={selectedDesign === index + 1}
                onChange={() => setSelectedDesign(index + 1)}
              />

              {/* Filling text effect */}
              <motion.span
                animate={{
                  width: selectedDesign === index + 1 ? "100%" : "0%",
                }}
                className={`absolute inset-0 flex w-0 items-end gap-3 whitespace-nowrap ${colors[index]} bg-clip-text text-transparent`}
              >
                <span className="text-5xl">
                  {index + 1}
                  <span className="hidden lg:inline-block">.</span>
                </span>
                <span className="hidden text-2xl lg:block">{topics}</span>
              </motion.span>

              {/* Text */}
              <span className="text-5xl">
                {index + 1}
                <span className="hidden lg:inline-block">.</span>
              </span>
              <span className="hidden text-2xl lg:block">{topics}</span>
            </motion.label>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <DesignThemeContextProvider>
            <Canvas design={selectedDesign} />
          </DesignThemeContextProvider>
        </div>
      </div>
    </div>
  );
}
