"use client";

import { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

export interface DesignTheme {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

type DesignThemeContextProviderProps = {
  children: React.ReactNode;
};

// Create the context
export const DesignThemeContext = createContext<DesignTheme | null>(null);

// Create the provider
export default function DesignThemeContextProvider({
  children,
}: DesignThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <DesignThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DesignThemeContext.Provider>
  );
}

// Create the function to get the context value
export function useDesignThemeContext() {
  const context = useContext(DesignThemeContext);
  if (!context) {
    throw new Error(
      "useDesignThemeContext must be used within a DesignThemeContextProvider",
    );
  }
  return context;
}
