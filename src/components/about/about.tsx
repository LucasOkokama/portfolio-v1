"use client";

import { Geist, IBM_Plex_Mono } from "next/font/google";
import DownloadResume from "./download-resume";
import Name from "./name";
import Role from "./role";
import PersonalLinks from "./personal-links";
import { motion } from "motion/react";

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
      text: "Atualmente estudando NextJS, AngularJS e TailwindCSS.",
    },
    {
      icon: "straw-hat.png",
      text: "Tenho um blog de review de anime chamado <b><u><a href='https://korosenku.vercel.app/' target='_blank'>Korosenku</a></u></b>",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-10 md:flex-row">
      {/* Left Column */}
      <div className="flex flex-col items-center gap-6">
        {/* Name and role for mobile version */}
        <div className="flex w-full justify-center md:hidden">
          <div className="flex w-fit flex-col items-center">
            <Name />
            <Role />
          </div>
        </div>

        {/* Profile picture */}
        <img
          src="#"
          alt="my profile picture"
          className="h-[450px] w-[320px] bg-neutral-900 dark:bg-neutral-100"
        />

        {/* Download resume button */}
        <DownloadResume />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-10 md:gap-6">
        {/* Name and Role */}
        <div className="hidden flex-col md:flex">
          <Name />
          <div className="mt-[-4px]">
            <Role />
          </div>
        </div>

        {/* About me text */}
        <div className="flex justify-center">
          <p
            className={`${ibmPlexMono.className} line-clamp-[12] max-w-xl text-[15px] leading-7 text-neutral-700 md:line-clamp-5 md:max-w-none dark:text-neutral-400`}
          >
            Sou um desenvolvedor frontend apaixonado por tecnologia e design.
            Meu foco principal está em construir interfaces intuitivas
            utilizando ferramentas como Angular, TailwindCSS, NextJS e Figma,
            sempre buscando aliar beleza e funcionalidade para criar
            experiências digitais únicas.
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
                <img
                  className="mt-[2px] h-4 w-4"
                  src={`/about/${item.icon}`}
                  alt={`${item.icon} icon`}
                ></img>
                <p
                  className={`${ibmPlexMono.className} text-[14px] text-neutral-700 dark:text-neutral-400`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex h-full items-end justify-center md:justify-start">
          <PersonalLinks />
        </div>
      </div>
    </div>
  );
}
