import { createContext } from "react";

export const themes = {
  light: {
    color: "green",
    backgroundColor: "#FFFFFF",
  },
  dark: {
    color: "orange",
    backgroundColor: "#696969",
  },
};

export const ThemeContext = createContext();
