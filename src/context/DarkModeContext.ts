import { createContext, useContext } from "react";

export interface SearchContextType {
  darkModeEnabled: boolean,
  setDarkModeEnabled: React.Dispatch<React.SetStateAction<boolean>>,
}

// Create the context
export const DarkModeContext = createContext<SearchContextType | undefined>(true);

// Create the function to get the context value
export const useDarkModeContext = (): SearchContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("Context not found!");
  }
  return context;
}