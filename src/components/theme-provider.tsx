"use client"

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string,
    secondary: string,
  }
}

const defaultTheme: Theme = {
  colors: {
    primary: 'purple',
    secondary: 'blue',
  }
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ThemeContext.Provider value={defaultTheme}>
          {children}
      </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
