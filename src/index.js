import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import StyleTheme from "./Styles/StyleTheme";
import StyleGlobal from "./Styles/StyleGlobal";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={StyleTheme}>
      <StyleGlobal />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
