import { Rethink_Sans } from "next/font/google";
import DarkModeToggle from "./dark-mode-toggle";
import MyLogo from "./my-logo";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });

export default function Menu() {
  const menuItems = ["About", "Skills", "Projects", "Statistics"];

  return (
    <nav className="duration-800 flex w-full items-stretch justify-between rounded-xl bg-neutral-200/20 px-8 py-2 shadow-md shadow-neutral-900/[0.08] dark:bg-neutral-800/20 dark:shadow-neutral-100/[0.03]">
      <MyLogo />
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
