import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { mainTheme } from "./styles/themes/themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";


function Root() {
  return (
    <>
      <MuiThemeProvider theme={ mainTheme }>
        <CssBaseline/>
        <App />
      </MuiThemeProvider>
    </>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
