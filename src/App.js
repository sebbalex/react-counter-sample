import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

const initialData = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  rootElement
);

