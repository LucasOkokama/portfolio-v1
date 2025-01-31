import { useDesignThemeContext } from "@/context/DesignThemeContext";
import { motion } from "motion/react";

import { Lexend, Poppins, Urbanist } from "next/font/google";
import { useState } from "react";

const lexend = Lexend({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Animation() {
  const { theme } = useDesignThemeContext();
  const [imageHovered, setImageHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(78);

  const tags = ["#AranhaVerso", "#Sony", "#Animação"];
  const stats = [
    {
      icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>`,
      value: "4.739",
    },
    {
      icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>`,
      value: countLikes,
    },
    {
      icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                </svg>`,
      value: 28,
    },
  ];

  const handleLikeButton = () => {
    if (liked) {
      if (theme === "light") {
        return "text-rose-600";
      } else {
        return "text-rose-500";
      }
    } else {
      if (theme === "light") {
        return "text-neutral-400/60";
      } else {
        return "text-gray-900/80";
      }
    }
  };

  // Increase the number of likes
  const handleLiked = () => {
    console.log(liked);
    setLiked(true);
    setCountLikes((prev) => prev + 1);
  };

  return (
    <div
      className={`${theme === "light" ? "border-neutral-700 bg-[#ffffff]" : "border-neutral-700/80 bg-[#14181C]"} z-[2] h-full w-full overflow-hidden rounded-xl border shadow-2xl`}
    >
      {/* Banner */}
      <div
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
        className="relative overflow-hidden rounded-t-xl"
      >
        {/* Banner Tag */}
        <motion.span
          animate={{
            x: imageHovered ? 100 : 0,
            scale: imageHovered ? 0.6 : 1,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 1,
            },
          }}
          className={`${lexend.className} absolute right-4 top-3 z-[2] rounded-md bg-yellow-500 px-2 py-1 text-sm font-bold text-neutral-800`}
        >
          NOVO
        </motion.span>
        {/* Banner IMG */}
        <motion.img
          whileHover={{ scale: 1.12 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          src="/design/design-card.png"
          alt="design card"
          className="rounded-t-xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-5 py-4 text-neutral-500">
        <div>
          {/* Content Tag & Publish date */}
          <div className={`${poppins.className} flex justify-between text-sm`}>
            {/* Content Tag */}
            <motion.h3
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 1,
                },
              }}
              className={`${theme === "light" ? "text-rose-500/80" : "text-rose-500/80"} font-semibold tracking-widest`}
            >
              FILME
            </motion.h3>

            {/* Publish date */}
            <motion.h4
              initial={{ opacity: 0, y: -70 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1,
                },
              }}
            >
              30 Jan, 2025
            </motion.h4>
          </div>

          {/* Content Title */}
          <h1
            className={`${theme === "light" ? "text-neutral-700 hover:text-[#3b7cbd]" : "text-neutral-100 hover:text-[#5aa3ec]"} ${lexend.className} mt-4 cursor-pointer text-[22px] duration-300`}
          >
            Novo filme do Homem Aranha já disponível nos cinemas!
          </h1>

          {/* Content Intro text */}
          <p
            className={`${theme === "light" ? "text-neutral-700" : "text-neutral-400"} ${poppins.className} mt-3 text-sm font-light leading-[28px]`}
          >
            O herói favorito da Marvel está de volta às telonas com uma nova e
            eletrizante aventura! Confira tudo sobre o mais recente filme do
            Homem-Aranha e prepare-se para muita ação e emoção.
          </p>

          {/* Content Tags */}
          <div
            className={`${theme === "light" ? "text-sky-800/80" : "text-sky-700"} ${poppins.className} mt-1 flex items-end justify-between text-sm`}
          >
            <div className="flex gap-[10]">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.2 * index,
                    },
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Like button */}
            <motion.div
              onClick={() => handleLiked()}
              whileTap={{ scale: 0.76 }}
              className={`${handleLikeButton()} ${theme === "light" ? "bg-neutral-200 hover:bg-neutral-400/60 hover:text-rose-600" : "bg-gray-700/60 hover:bg-gray-600/80 hover:text-rose-500"} rounded-3xl p-[6px] duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Divisor line */}
        <div
          className={`${theme === "light" ? "border-[#e0e0e0]" : "border-[#22282e]"} border-b`}
        ></div>

        {/* Author & Stats */}
        <div className="flex gap-3">
          {/* Author IMG */}
          <div className="flex">
            <motion.a
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                },
              }}
              href="https://www.imdb.com/name/nm0799777/"
              target="_blank"
            >
              <img
                src="/design/jjj.png"
                alt="J. Jonah Jameson"
                className="w-[90px] rounded-full"
              />
            </motion.a>
          </div>

          <div className="flex w-full overflow-hidden">
            {/* Author Name & Number of followers */}
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 2.5,
                },
              }}
              className={`${urbanist.className} w-full`}
            >
              <a href="https://www.imdb.com/name/nm0799777/" target="_blank">
                <h4
                  className={`${theme === "light" ? "text-neutral-500 hover:text-neutral-700" : "text-neutral-400 hover:text-neutral-200/90"} font-semibold duration-300`}
                >
                  J. Jonah Jameson
                </h4>
              </a>
              <p className="text-sm tracking-wider"> 8.6k seguidores</p>
            </motion.div>

            {/* Stats */}
            <div
              className={`${theme === "light" ? "text-neutral-400" : "text-neutral-600"} flex h-full flex-col justify-center gap-1 pr-1`}
            >
              {stats.map((item, index) =>
                index != 1 ? (
                  // Views & Comments
                  <motion.div
                    key={index}
                    className={`${theme === "light" ? "hover:text-neutral-700/90" : "hover:text-neutral-400"} flex cursor-pointer items-center justify-end gap-[4px] text-[13px] font-semibold duration-200`}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>
                    <span> {item.value} </span>
                  </motion.div>
                ) : (
                  // Likes
                  <motion.div
                    key={countLikes}
                    animate={{
                      scale: [1, 1.1, 1],
                      color:
                        theme === "light"
                          ? ["#f1305b", "#f1305b", "#a3a3a3"]
                          : ["#ea456a", "#ea456a", "#525252"],
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div
                      className={`${theme === "light" ? "hover:text-neutral-700/90" : "hover:text-neutral-400"} flex cursor-pointer items-center justify-end gap-[4px] text-[13px] font-semibold duration-200`}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></span>
                      <span> {item.value} </span>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
