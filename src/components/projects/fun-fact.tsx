import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

export default function FunFact({ funFact }: { funFact: string | null }) {
  if (funFact === null) {
    return null;
  }

  return (
    <div
      className={`${lexend.className} flex max-w-[500px] gap-2 rounded-xl bg-neutral-900/80 px-5 py-3 text-xs leading-5 text-neutral-500`}
    >
      <svg
        className="mt-[0.9px]"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
      <p className="w-full">{funFact}</p>
    </div>
  );
}
