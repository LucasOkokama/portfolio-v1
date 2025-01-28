import { useSearchContext } from "@/context/SearchContext";
import { clearInterval } from "timers";

export default function SearchBox() {
  const { setSearchValue } = useSearchContext();

  // Debounce function
  const debounce = (fn: (value: string) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (searchValue: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(searchValue), delay);
    };
  };

  // Update search value with debounce
  const debouncedSearchValue = debounce((searchValue: string) => {
    setSearchValue(searchValue);
  }, 500);

  // Handle the text typed
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-xl rounded-lg text-neutral-400 focus-within:text-neutral-700 dark:text-neutral-600 dark:focus-within:text-neutral-400">
      <svg
        className="absolute left-4 top-[10]"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <input
        className="w-full rounded-lg border border-neutral-400 bg-neutral-100 px-[49] py-2 placeholder-neutral-400 focus:placeholder-neutral-700 focus:outline focus:outline-neutral-500 dark:border-neutral-700/50 dark:bg-neutral-900 dark:placeholder-neutral-600 dark:focus:placeholder-neutral-500"
        type="text"
        placeholder="Pesquise por um projeto ou tecnologia"
        onChange={handleInputChange}
      />
    </div>
  );
}
