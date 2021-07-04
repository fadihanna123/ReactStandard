import "normalize.css";
import "sass/main.scss";

import Aos from "aos";
import App from "App";
import React from "react";
import ReactDom from "react-dom";

Aos.init();

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
