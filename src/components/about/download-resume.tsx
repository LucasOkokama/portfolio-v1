export default function DownloadResume() {
  return (
    <div className="flex w-full gap-3">
      <button className="relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#E447A0] to-[#853BE6] px-4 py-2 text-white">
        Baixar Currículo
        {/* Download icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
        </svg>
      </button>

      <button className="rounded-lg border-2 border-neutral-400 p-2 text-neutral-400 duration-200 hover:border-neutral-600 hover:text-neutral-600 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-500 dark:hover:text-neutral-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        </svg>
      </button>
    </div>
  );
}
