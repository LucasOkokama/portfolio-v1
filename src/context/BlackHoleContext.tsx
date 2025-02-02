"use client";

import { createContext, useContext, useState } from "react";

export interface BlackHole {
  blackHoleHovered: boolean;
  setBlackHoleHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

type BlackHoleContextProviderProps = {
  children: React.ReactNode;
};

// Create the context
export const BlackHoleContext = createContext<BlackHole | null>(null);

// Create the provider
export default function BlackHoleContextProvider({
  children,
}: BlackHoleContextProviderProps) {
  const [blackHoleHovered, setBlackHoleHovered] = useState<boolean>(false);

  return (
    <BlackHoleContext.Provider
      value={{ blackHoleHovered, setBlackHoleHovered }}
    >
      {children}
    </BlackHoleContext.Provider>
  );
}

// Create the function to get the context value
export function useBlackHoleContext() {
  const context = useContext(BlackHoleContext);
  if (!context) {
    throw new Error(
      "useBlackHoleContext must be used within a BlackHoleContextProvider",
    );
  }
  return context;
}
