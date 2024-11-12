import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";

import Home from "./pages/Home";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("#root not found");
}

render(() => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
), root);
