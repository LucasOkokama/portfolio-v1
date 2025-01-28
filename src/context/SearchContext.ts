import { createContext, useContext } from "react";

export interface SearchContextType {
  searchValue: string,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  showMoreCount: number,
  setShowMoreCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create the function to get the context value
export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("Context not found!");
  }
  return context;
}