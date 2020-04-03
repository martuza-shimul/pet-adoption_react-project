import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "blue",
  (theme) => theme,
]);

export default ThemeContext;
