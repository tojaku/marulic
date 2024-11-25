import { render } from "solid-js/web";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("#root not found");
}

render(() => <App />, root);