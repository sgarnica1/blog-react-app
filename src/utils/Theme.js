import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#FFF",
    background: "#FFF",
    primary: "#000",
    secondary: "#19494b",
    hover: "#519a9d",
    border: "#D4D6B9",
    skeletonPrimary: "#ddd",
    skeletonSecondary: "#eee",
    error: "#e53935",
  },
  fonts: {
    headers: "'Crimson Pro', serif",
    body: "'Montserrat', sans-serif",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { theme, Theme };
