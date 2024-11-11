import { render } from 'solid-js/web';

import "./css/global/index.css";
import Pocetna from "./pages/Pocetna";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error("No root element");
}

render(() => <Pocetna />, root);
