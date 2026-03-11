import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";

import "./iconos.js";
import Home from "./Home.jsx";

let counter = 0;

const root = ReactDOM.createRoot(document.querySelector("#root"));

setInterval(() => {

  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  counter++;

  root.render(
    <Home
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
    />
  );

}, 1000);