import React, { createContext, useContext } from "react";

const theme = {
  primary: "#FF9933",
  background: "#FFF5E6",
};

const ThemeContext = createContext(theme);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}