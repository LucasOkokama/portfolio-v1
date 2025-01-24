import DarkModeToggle from "../ui/dark-mode-toggle";
import MyLogo from "../ui/my-logo";
import MenuMobile from "./menu-mobile";
import Tooltip from "../ui/tooltip";
import styles from "./css/menu.module.css";

export default function Menu() {
  const menuItems = ["About", "Skills", "Projects", "Statistics"];

  return (
    <nav
      className={`duration-800 ${styles.transparentBackground} flex w-full items-stretch justify-between rounded-xl bg-neutral-100/60 px-5 py-2 shadow-md shadow-neutral-900/[0.1] sm:px-8 dark:bg-neutral-950/70 dark:shadow-neutral-100/[0.02]`}
    >
      <MyLogo />
      <div className="flex items-center gap-4">
        <ul className="hidden gap-5 text-[15px] font-semibold text-neutral-400 sm:flex dark:text-neutral-500">
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

        <div className="flex gap-2">
          <Tooltip text="Ctrl B" y={10} position="center">
            <DarkModeToggle />
          </Tooltip>

          <div className="block sm:hidden">
            <MenuMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}
