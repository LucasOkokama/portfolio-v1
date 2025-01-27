import { Ubuntu_Sans_Mono } from "next/font/google";

const ubuntoSansMono = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TechStack({ techStack }: { techStack: string[] }) {
  // Logos that need color inversion for dark mode
  const blackWhiteIcons = ["flask", "pandas", "vercel"];

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
        <div
          key={index}
          className="flex items-center gap-2 rounded-[4px] border border-neutral-700/70 px-[7px] py-[5px]"
        >
          {/* Tech icon */}
          <img
            src={`/skills/icons/colorized/${item}.svg`}
            className="h-[16px] w-[16px] rounded-sm"
            alt={item + " icon"}
            style={getImageFilter(item)} // Style to change the color of black/white logos
          />
          {/* Tech name */}
          <p className={`text-sm ${ubuntoSansMono.className} text-neutral-400`}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
