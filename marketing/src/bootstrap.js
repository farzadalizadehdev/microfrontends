import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_marketing-dev-root");
  if (root) {
    mount(root);
  }
}

export { mount };
