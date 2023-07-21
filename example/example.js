// example/example.js
import React from "react";
import ReactDOM from "react-dom";
import { NumberMultiplier, NumberDivider } from "../lib/main.js";

ReactDOM.render(
  <div>
    <NumberMultiplier multiplier={3} />,
    <NumberDivider />
  </div>,
  document.getElementById("root")
);
