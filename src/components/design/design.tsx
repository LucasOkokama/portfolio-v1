import { motion } from "motion/react";
import GlitchText from "../ui/glitch-text/glitch-text";
import { useEffect, useState } from "react";
import { Lexend } from "next/font/google";
import Canvas from "./canvas";
import DesignThemeContextProvider from "@/context/DesignThemeContext";
import { useThemeContext } from "@/context/ThemeContext";

const lexend = Lexend({ subsets: ["latin"] });

export default function Design() {
  const { theme } = useThemeContext();
  const [selectedDesign, setSelectedDesign] = useState(7);
  const [colors, setColors] = useState<string[]>([]);

  const steps = [
    { topic: "Base", desc: "Define os elementos e as cores iniciais." },
    { topic: "Estrutura", desc: "Configura os displays e as posições." },
    {
      topic: "Espaçamento",
      desc: "Define dimensões, margens, paddings e gaps.",
    },
    {
      topic: "Tipografia",
      desc: "Escolhe as fontes e define seu tamanho, peso e espaçamento entre linhas e letras.",
    },
    {
      topic: "Colorização",
      desc: "Ajusta as cores para garantir contraste e criar uma hierarquia visual.",
    },
    {
      topic: "Efeitos Visuais",
      desc: "Adiciona efeitos de hover, bordas arredondadas e sombreamento",
    },
    {
      topic: "Animações",
      desc: "Finaliza o componente com animações interativas.",
    },
  ];

  useEffect(() => {
    const defineTopicsColor = () => {
      if (theme === "light") {
        setColors([
          "bg-neutral-800",
          "bg-red-500",
          "bg-amber-500",
          "bg-teal-500",
          "bg-sky-500",
          "bg-purple-500",
          "bg-pink-500",
        ]);
      } else {
        setColors([
          "bg-white",
          "bg-red-400",
          "bg-amber-400",
          "bg-teal-400",
          "bg-sky-400",
          "bg-purple-400",
          "bg-pink-400",
        ]);
      }
    };

    defineTopicsColor();
  }, [theme]);

  return (
    <div className="flex w-full flex-col items-center gap-16">
      <div className="flex w-full items-center justify-center gap-12">
        {/* Divider 1 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-transparent to-neutral-200 dark:to-neutral-800"></div>
        {/* Title */}
        <GlitchText text="Design" />
        {/* Divider 2 */}
        <div className="h-[2px] w-[25%] rounded-full bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800"></div>
      </div>
      <div className="flex w-fit flex-col gap-8 lg:flex-row lg:justify-between lg:gap-16">
        {/* Left Column */}
        <div className="flex w-full justify-center gap-0 lg:flex-col lg:justify-start lg:gap-7">
          {steps.map((item, index) => (
            <motion.label
              id={"design_topic_" + (index + 1).toString()}
              key={index}
              className={`${lexend.className} relative flex w-full items-end gap-3 cursor-pointer`}
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

              <div className="flex">
                {/* Number */}
                <div className="px-5 text-5xl font-semibold text-neutral-400">
                  {/* Filling text effect */}
                  <motion.span
                    animate={{
                      width: selectedDesign === index + 1 ? "100%" : "0%",
                      transition: { duration: 0.7 },
                    }}
                    className={`absolute ${colors[index]} bg-clip-text text-transparent`}
                  >
                    <span className="flex">
                      {index + 1}
                      <span className="hidden lg:block">.</span>
                    </span>
                  </motion.span>

                  {/* Topic Number */}
                  <span className="flex">
                    {index + 1}
                    <span className="hidden lg:block">.</span>
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[2px]">
                  <div className="flex text-2xl text-neutral-500">
                    {/* Filling text effect */}
                    <motion.span
                      animate={{
                        width: selectedDesign === index + 1 ? "100%" : "0%",
                        transition: {
                          duration: 0.7,
                          delay: 0.08,
                        },
                      }}
                      className={`absolute whitespace-nowrap ${colors[index]} bg-clip-text text-transparent`}
                    >
                      <span className="hidden lg:block">{item.topic}</span>
                    </motion.span>

                    {/* Topic Title */}
                    <span className="hidden lg:block">{item.topic}</span>
                  </div>

                  {/* Topic description */}
                  <div className="hidden font-light leading-6 text-neutral-600 lg:block">
                    {item.desc}
                  </div>
                </div>
              </div>
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
