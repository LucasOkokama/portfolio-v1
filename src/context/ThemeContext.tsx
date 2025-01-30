"use client"

import React, { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

export interface ThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// Create the context
export const ThemeContext = createContext<ThemeContext | null>(null);

// Create the provider
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create the function to get the context value
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  }
  return context;
}
