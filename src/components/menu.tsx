import { Rethink_Sans } from "next/font/google";
import DarkModeToggle from "./dark-mode-toggle";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });

export default function Menu() {
  const menuItems = ["About", "Skills", "Projects", "Statistics"];

  return (
    <nav className="flex w-full items-stretch justify-between rounded-xl bg-neutral-200/20 px-8 py-2 shadow-md duration-800 dark:bg-neutral-800/20 dark:shadow-neutral-100/[0.03]">
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
          className={`${rethinkSans.className} flex gap-5 text-[15px] font-semibold text-neutral-400 dark:text-neutral-500`}
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
        <DarkModeToggle />
      </div>
    </nav>
  );
}
