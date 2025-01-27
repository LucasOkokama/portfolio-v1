import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

export default function ProjectDate({
  startDate,
  finishDate,
}: {
  startDate: string;
  finishDate: string | null;
}) {
  const dateOptions = { year: "numeric", month: "short" } as const;

  function formatDate(date: string | null): string {
    if (date === null) return "Presente";
    if (date === "-") return "Pausado";
    return new Date(date)
      .toLocaleDateString("pt-BR", dateOptions)
      .replace(". de", "");
  }

  function getDateTag(finishDate: string | null) {
    switch (finishDate) {
      case null:
        return (
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="relative">
              <span className="absolute size-[10] animate-ping rounded-full bg-green-700"></span>
              <span className="block size-[10] rounded-full bg-green-800"></span>
            </div>
            <span className={`${lexend.className} text-sm text-neutral-400`}>
              Ativo
            </span>
          </div>
        );

      case "-":
        return (
          <div className="flex items-center gap-[3px] whitespace-nowrap rounded-full bg-yellow-900/50 px-2 py-[3px] text-yellow-600/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
              <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
            </svg>
            <span className={`${lexend.className} text-xs`}>Parado</span>
          </div>
        );

      default:
        return (
          <div className="flex items-center gap-[3px] whitespace-nowrap rounded-full bg-neutral-700/70 px-2 py-[3px] text-neutral-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
            </svg>
            <span className={`${lexend.className} text-xs`}>Finalizado</span>
          </div>
        );
    }
  }

  return (
    <div className="flex items-center gap-6">
      <div className="flex gap-2 text-neutral-500">
        <span className="capitalize">{formatDate(startDate)}</span>-
        <span className="capitalize">{formatDate(finishDate)}</span>
      </div>
      {getDateTag(finishDate)}
    </div>
  );
}
