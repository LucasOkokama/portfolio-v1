"use client"

import { createContext, useContext, useState } from "react";

export interface SearchContextType {
  searchValue: string,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  showMoreCount: number,
  setShowMoreCount: React.Dispatch<React.SetStateAction<number>>;
}

type SearchContextProviderProps = {
  children: React.ReactNode;
}

// Create the context
export const SearchContext = createContext<SearchContextType | null>(null);

// Create the provider
export default function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showMoreCount, setShowMoreCount] = useState<number>(3);

  return (
  <SearchContext.Provider
    value={{
      searchValue,
      setSearchValue,
      showMoreCount,
      setShowMoreCount,
    }}
  >
    {children}
  </SearchContext.Provider>
  )
}

// Create the function to get the context value
export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }
  return context;
}