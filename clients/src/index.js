import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Router } from "react-router-dom";
import history from "./history";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#F0D8FE",
      main: "#903DF4",
      dark: "#280B75",
    },
    secondary: {
      light: "#FFDDD5",
      main: "#FF2D54",
      dark: "#7A0848",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
