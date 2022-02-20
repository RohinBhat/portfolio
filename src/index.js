import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

ReactGA.initialize("UA-221042328-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
