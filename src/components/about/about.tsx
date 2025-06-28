"use client";

import { Geist, IBM_Plex_Mono } from "next/font/google";
import { motion } from "motion/react";
import Name from "./name";
import Role from "./role";
import DownloadResume from "./download-resume";
import PersonalLinks from "./personal-links";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { useBlackHoleContext } from "@/context/BlackHoleContext";
import Image from "next/image";

const geistSans = Geist({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const quickIntroFadeIn = {
  hidden: {
    opacity: 0,
    x: -330,
    y: 22,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      bouce: 1,
      duration: 2.5,
      delay: 0.5 * index,
      ease: "easeIn",
    },
  }),
};

export default function About() {
  const { theme } = useThemeContext();
  const { blackHoleHovered } = useBlackHoleContext();
  const [pfpPath, setPfpPath] = useState("pfp-dark.png");

  useEffect(() => {
    const definePfpPath = () => {
      if (theme === "light") setPfpPath("pfp.png");
      else setPfpPath("pfp-dark.png");
    };

    definePfpPath();
  }, [theme]);

  useEffect(() => {
    if (blackHoleHovered) setPfpPath("pfp-dark-blackhole.png");
    else setPfpPath("pfp-dark.png");
  }, [blackHoleHovered]);

  const quickIntro = [
    {
      icon: "desktop.png",
      text: "Em busca da minha primeira oportunidade no mercado de trabalho.",
    },
    {
      icon: "heart.png",
      text: "Ama assistir animes, filmes e séries.",
    },
    {
      icon: "book.png",
      text: "Estudando SQL Server e Java.",
    },
    {
      icon: "straw-hat.png",
      text: "Tenho um blog de reviews de anime chamado <b><u><a href='https://korosenku.vercel.app/' target='_blank'>Korosenku</a></u></b>.",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <div>
        {/* Name and Role */}
        <div className="hidden flex-col md:flex">
          <Name />
          <div className="mt-[-4px]">
            <Role />
          </div>
        </div>

        {/* Name and role for mobile version */}
        <div className="flex w-full justify-center md:hidden">
          <div className="flex w-fit flex-col items-center">
            <Name />
            <Role />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 md:flex-row">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-6">
          {/* Profile picture */}
          <Image
            src={`/${pfpPath}`}
            alt="my profile picture"
            className="w-[350px] bg-transparent"
            width={350}
            height={470}
            priority
          />

          {/* Download resume button */}
          <DownloadResume />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-end gap-10 md:gap-6">
          <div className="flex h-full flex-col justify-center gap-7">
            {/* About me text */}
            <div className="flex justify-center">
              <p
                className={`${ibmPlexMono.className} line-clamp-[12] max-w-xl text-[15px] leading-8 text-neutral-700 md:line-clamp-5 md:max-w-xl dark:text-neutral-400`}
              >
                Sou um desenvolvedor fullstack apaixonado por tecnologia e
                design. Meu foco está em construir soluções completas e
                intuitivas, combinando ferramentas como Angular, React, NextJS,
                TailwindCSS, Spring Boot, Express e MySQL. Busco
                sempre aliar beleza e funcionalidade, criando experiências
                digitais únicas.
              </p>
            </div>

            {/* About me items */}
            <div className="flex flex-col items-center justify-center gap-3">
              <h4
                className={`${geistSans.className} w-full max-w-xl text-sm font-bold tracking-widest text-neutral-500 md:max-w-none dark:text-neutral-600`}
              >
                QUICK INTRO
              </h4>
              <div className="flex w-full max-w-xl flex-col gap-2 overflow-hidden md:max-w-none">
                {quickIntro.map((item, index) => (
                  <motion.div
                    variants={quickIntroFadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    key={index}
                    className="items-top relative flex gap-4"
                  >
                    <Image
                      className="mt-[2px] h-4 w-4"
                      src={`/about/${item.icon}`}
                      alt={`${item.icon} icon`}
                      width={16}
                      height={16}
                    />
                    <p
                      className={`${ibmPlexMono.className} text-[14px] text-neutral-700 dark:text-neutral-400`}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center md:justify-start">
            <PersonalLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
