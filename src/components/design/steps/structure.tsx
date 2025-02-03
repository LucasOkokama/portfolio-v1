import { useDesignThemeContext } from "@/context/DesignThemeContext";
import Image from "next/image";
import { useState } from "react";

export default function Structure() {
  const { theme } = useDesignThemeContext();
  const [, setImageHovered] = useState(false);
  const [liked] = useState(false);
  const [countLikes] = useState(78);

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
        return "text-[#ffffff]";
      } else {
        return "text-[#000000]";
      }
    }
  };

  return (
    <div
      className={`${theme === "light" ? "border-neutral-700 bg-[#ffffff]" : "border-neutral-700/80 bg-[#14181C]"} z-[2] h-full w-full overflow-hidden border font-serif`}
    >
      {/* Banner */}
      <div
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
        className="relative overflow-hidden"
      >
        {/* Banner Tag */}
        <span className={`absolute z-[2] bg-[#fffb01] text-black`}>NOVO</span>
        {/* Banner IMG */}
        <Image
          src="/design/design-card.png"
          alt="design card"
          width={400}
          height={225}
          className=""
        />
      </div>

      {/* Content */}
      <div className="flex flex-col text-[#8f8f8f]">
        <div>
          {/* Content Tag & Publish date */}
          <div className={`flex justify-between`}>
            {/* Content Tag */}
            <h3
              className={`${theme === "light" ? "text-[#ff0e0e]" : "text-[#ff0e0e]"}`}
            >
              FILME
            </h3>

            {/* Publish date */}
            <h4>30 Jan, 2025</h4>
          </div>

          {/* Content Title */}
          <h1
            className={`${theme === "light" ? "text-[#000000]" : "text-[#ffffff]"} cursor-pointer duration-300`}
          >
            Novo filme do Homem Aranha já disponível nos cinemas!
          </h1>

          {/* Content Intro text */}
          <p
            className={`${theme === "light" ? "text-[#000000]" : "text-[#ffffff]"}`}
          >
            O herói favorito da Marvel está de volta às telonas com uma nova e
            eletrizante aventura! Confira tudo sobre o mais recente filme do
            Homem-Aranha e prepare-se para muita ação e emoção.
          </p>

          {/* Content Tags */}
          <div
            className={`${theme === "light" ? "text-[#134aff]" : "text-[#134aff]"} flex items-end justify-between`}
          >
            <div className="flex">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>

            {/* Like button */}
            <div
              className={`${handleLikeButton()} ${theme === "light" ? "bg-[#858585]" : "bg-[#8b8b8b]"} duration-300`}
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
            </div>
          </div>
        </div>

        {/* Divisor line */}
        <div
          className={`${theme === "light" ? "border-[#000000]" : "border-[#ffffff]"} border-b`}
        ></div>

        {/* Author & Stats */}
        <div className="flex">
          {/* Author IMG */}
          <div className="flex">
            <a href="https://www.imdb.com/name/nm0799777/" target="_blank">
              <Image
                src="/design/jjj.png"
                alt="J. Jonah Jameson"
                className="w-[90px]"
                width={90}
                height={90}
              />
            </a>
          </div>

          <div className="flex w-full overflow-hidden">
            {/* Author Name & Number of followers */}
            <div className={`w-full`}>
              <a href="https://www.imdb.com/name/nm0799777/" target="_blank">
                <h4
                  className={`${theme === "light" ? "text-[#000000]" : "text-[#ffffff]"} duration-300`}
                >
                  J. Jonah Jameson
                </h4>
              </a>
              <p className=""> 8.6k seguidores</p>
            </div>

            {/* Stats */}
            <div
              className={`${theme === "light" ? "text-[#000000]" : "text-[#ffffff]"} flex h-full flex-col justify-center`}
            >
              {stats.map((item, index) =>
                index != 1 ? (
                  // Views & Comments
                  <div
                    key={index}
                    className={`${theme === "light" ? "" : ""} flex cursor-pointer items-center justify-end duration-200`}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>
                    <span> {item.value} </span>
                  </div>
                ) : (
                  // Likes
                  <div key={countLikes}>
                    <div
                      className={`${theme === "light" ? "" : ""} flex cursor-pointer items-center justify-end duration-200`}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></span>
                      <span> {item.value} </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
