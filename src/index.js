import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { AccountProvider } from "./AccountProvider";

ReactDOM.render(
  <AccountProvider>
    <App />
  </AccountProvider>,
  document.getElementById("root")
);
