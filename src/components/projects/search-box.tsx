import { useSearchContext } from "@/context/SearchContext";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function SearchBox() {
  const { searchValue, setSearchValue } = useSearchContext();
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchValue;
    }
  }, [searchValue]);

  useEffect(() => {
    // Shortcut to focus the search box
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        if (inputRef.current) inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        ref={inputRef}
        className="w-full rounded-lg border border-neutral-400 bg-neutral-100 px-[49] py-2 placeholder-neutral-400 focus:placeholder-neutral-700 focus:outline focus:outline-neutral-500 dark:border-neutral-700/50 dark:bg-neutral-900 dark:placeholder-neutral-600 dark:focus:placeholder-neutral-500"
        type="text"
        placeholder="Pesquise por um projeto ou tecnologia"
        onChange={handleInputChange}
      />
      <AnimatePresence mode="wait">
        {searchValue === "" && (
          <motion.span
            key="shortcut"
            className="absolute right-2 top-[7px] hidden rounded-lg bg-neutral-300/70 px-2 py-[2px] text-neutral-600 md:block dark:bg-neutral-800/80 dark:text-neutral-400"
            initial={{ opacity: 0, translateX: 20 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                type: "spring",
                bounce: 0.5,
              },
            }}
            exit={{ opacity: 0, translateX: 10 }}
          >
            <kbd>Ctrl K</kbd>
          </motion.span>
        )}

        {searchValue != "" && (
          <motion.span
            key="deleteX"
            onClick={() => setSearchValue("")}
            className="absolute right-3 top-[9px] cursor-pointer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.5,
                duration: 1,
              },
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ color: "#ef4444" }}
          >
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
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
