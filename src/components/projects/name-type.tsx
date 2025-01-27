import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

export default function NameType({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  // Get the project type tag
  function getTypeTag(type: string) {
    switch (type) {
      case "Projeto pessoal":
        return (
          <span
            className={`${lexend.className} static bottom-2 w-fit whitespace-nowrap rounded-full bg-green-950/60 px-3 py-[6px] text-xs font-medium tracking-wide text-green-600 lg:absolute lg:ml-5`}
          >
            {type}
          </span>
        );

      case "Tempo integral":
        return (
          <span
            className={`${lexend.className} static bottom-2 w-fit whitespace-nowrap rounded-full bg-sky-950/60 px-3 py-[6px] text-xs font-medium tracking-wide text-sky-500/90 lg:absolute lg:ml-5`}
          >
            {type}
          </span>
        );
    }
  }

  return (
    <div className="flex gap-6">
      <h3
        className={`${lexend.className} relative flex flex-col gap-2 text-xl font-semibold lg:block lg:text-4xl`}
      >
        <span className="leading-relaxed lg:leading-normal">{name}</span>
        {getTypeTag(type)}
      </h3>
    </div>
  );
}
