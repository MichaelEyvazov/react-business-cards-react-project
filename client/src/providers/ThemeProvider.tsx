import React, {
  useState,
  useContext,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

type ContextArgs = {
  isDark: boolean;
  toggleDark: () => void;
};

const ThemeContext = React.createContext<null | ContextArgs>(null);

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isDark, setDark] = useState(false);

  const toggleDark = useCallback(() => setDark(prev => !prev), [setDark]);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(() => {
    return { isDark, toggleDark };
  }, [isDark, toggleDark]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
