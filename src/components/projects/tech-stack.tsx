import { Ubuntu_Sans_Mono } from "next/font/google";
import { motion } from "motion/react";

const ubuntoSansMono = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const techStackFadeIn = {
  hidden: { opacity: 0, x: -50, y: 30, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      delay: 0.2 * index,
    },
  }),
};

export default function TechStack({ techStack }: { techStack: string[] }) {
  // Logos that need color inversion for dark mode
  const blackWhiteIcons = ["flask", "pandas", "vercel"];

  // Function that formats the icon name to locate it in the files
  function formatItemName(name: string) {
    return name.toLocaleLowerCase().replace(" ", "");
  }

  // Function that changes the black/white logo based on dark mode
  function getImageFilter(name: string) {
    if (blackWhiteIcons.includes(name.toLocaleLowerCase())) {
      return {
        filter: document.documentElement.classList.contains("dark")
          ? "invert(100%) sepia(4%) saturate(141%) hue-rotate(256deg) brightness(114%) contrast(76%)"
          : "invert(24%) sepia(15%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(88%)",
      };
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((item: string, index) => (
        <motion.div
          variants={techStackFadeIn}
          initial="hidden"
          animate="visible"
          custom={index}
          key={index}
          className="flex items-center gap-2 rounded-[4px] border border-neutral-700/70 px-[7px] py-[5px]"
        >
          {/* Tech icon */}
          <img
            src={`/skills/icons/colorized/${formatItemName(item)}.svg`}
            className="h-[16px] w-[16px] rounded-sm"
            alt={item + " icon"}
            style={getImageFilter(item)} // Style to change the color of black/white logos
          />
          {/* Tech name */}
          <p className={`text-sm ${ubuntoSansMono.className} text-neutral-400`}>
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
