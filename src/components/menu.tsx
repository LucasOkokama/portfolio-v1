"use client";

import { Rethink_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });

export default function Menu() {
  const menuItems = ["About", "Skills", "Projects", "Statistics"];
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    console.log(isDarkMode);
  }, []);

  return (
    <nav className="flex w-full items-stretch justify-between rounded-xl bg-neutral-200/20 px-8 py-2 shadow-md dark:bg-neutral-800/20 dark:shadow-neutral-100/[0.03]">
      <div className="flex">
        <svg
          className="w-[17px]"
          viewBox="0 0 19 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3.218C0 1.81356 1.13852 0.675049 2.54295 0.675049V32.0256C2.54295 32.7279 1.97369 33.2971 1.27148 33.2971C0.569259 33.2971 0 32.7279 0 32.0256V3.218Z"
            fill="currentColor"
          />
          <path
            d="M0 32.2285C0 31.5263 0.569259 30.9571 1.27148 30.9571H18.6483C18.6483 32.3615 17.5098 33.5 16.1054 33.5H1.27147C0.569257 33.5 0 32.9307 0 32.2285Z"
            fill="currentColor"
          />
          <path
            d="M14.5129 23.2545C13.5198 24.2476 11.9097 24.2476 10.9166 23.2545L4.02376 16.3617C3.52721 15.8651 3.52721 15.0601 4.02376 14.5635C4.5203 14.067 5.32535 14.067 5.82189 14.5635L14.5129 23.2545Z"
            fill="currentColor"
          />
          <path
            d="M11.3882 10.7746L2.69722 19.4656C2.20068 19.9622 1.39562 19.9622 0.89908 19.4656C0.402538 18.9691 0.402538 18.164 0.89908 17.6675L7.79194 10.7746C8.78502 9.78155 10.3951 9.78156 11.3882 10.7746Z"
            fill="currentColor"
          />
          <path
            d="M16.1053 1.77148C16.1053 1.06926 16.6746 0.5 17.3768 0.5C18.079 0.5 18.6483 1.06926 18.6483 1.77148V9.60779C18.6483 11.0122 17.5098 12.1507 16.1053 12.1507V1.77148Z"
            fill="currentColor"
          />
          <path
            d="M6.78119 3.1013C6.78119 1.69687 7.91971 0.558349 9.32414 0.558349L17.1605 0.558349C17.8627 0.558349 18.4319 1.12761 18.4319 1.82982C18.4319 2.53204 17.8627 3.1013 17.1605 3.1013L6.78119 3.1013Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex items-center gap-4">
        <ul
          className={`${rethinkSans.className} flex gap-6 font-semibold text-[15px] text-neutral-400 dark:text-neutral-500`}
        >
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer p-2 transition-colors duration-200 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="h-[75%] w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
        <div className="cursor-pointer p-3">
          {isDarkMode && (
            <svg
              className="w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M283.2 512c79 0 151.1-35.9 198.9-94.8 7.1-8.7-.6-21.4-11.6-19.4-124.2 23.7-238.3-71.6-238.3-197 0-72.2 38.7-138.6 101.5-174.4 9.7-5.5 7.3-20.2-3.8-22.2A258.2 258.2 0 0 0 283.2 0c-141.3 0-256 114.5-256 256 0 141.3 114.5 256 256 256z" />
            </svg>
          )}

          {!isDarkMode && (
            <svg
              className="w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
}
