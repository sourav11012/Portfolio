import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const selectedTheme = localStorage.getItem("theme");
    return selectedTheme === "light" ? "light" : "dark";
  });
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
