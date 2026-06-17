import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { ThemeProvider } from "./src/theme/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}