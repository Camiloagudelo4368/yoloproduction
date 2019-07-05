import React from "react";
import App from "./App";
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";


render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
  , document.getElementById("root"));
