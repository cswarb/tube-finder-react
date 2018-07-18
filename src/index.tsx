import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";
import "./css/main.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter } from "react-router-dom"

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("root"));

registerServiceWorker();
