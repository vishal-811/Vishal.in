import { createContext, useContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export default function useTheme() {
  return useContext(ThemeContext);
}
