import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Theme as ThemeProvider } from "./utils/Theme";
import { BlogsProvider } from "./contexts/BlogsContext";

ReactDOM.render(
  <React.StrictMode>
    <BlogsProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BlogsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
