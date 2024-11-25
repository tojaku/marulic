import { HashRouter, Route } from "@solidjs/router";

import Home from "./pages/Home";
import About from "./pages/About";
import Cookbook from "./pages/Cookbook";
import Play from "./pages/Play";
import Projects from "./pages/Projects";
import Stories from "./pages/Stories";
import Biography from "./pages/Biography";
import Works from "./pages/Works";
import Funding from "./pages/Funding";
import Help from "./pages/Help";

export default function App(props) {
    return (
        <HashRouter root={Layout}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cookbook" component={Cookbook} />
            <Route path="/play" component={Play} />
            <Route path="/projects" component={Projects} />
            <Route path="/stories" component={Stories} />
            <Route path="/biography" component={Biography} />
            <Route path="/works" component={Works} />
            <Route path="/funding" component={Funding} />
            <Route path="/help" component={Help} />
        </HashRouter>
    );
}

function TopMenu(props) {
    return (
        <>
            <li><a href="/biography">Biografija</a></li>
            <li><a href="/works">Stvaralaštvo</a></li>
            <li>
                <details>
                    <summary>Zanimljivosti</summary>
                    <ul class="p-2">
                        <li><a href="/stories">Priče</a></li>
                        <li><a href="/cookbook">Kuharica</a></li>
                        <li><a href="/projects">Naši radovi</a></li>
                        <li><a href="/play">Predstava</a></li>
                    </ul>
                </details>
            </li>
        </>
    );
}

function BottomMenu(props) {
    return (
        <>
            <a href="/help" class="link link-hover">Pomoć</a>
            <a href="/funding" class="link link-hover">O projektu</a>
            <a href="/about" class="link link-hover">O nama</a>
            <a href="https://ss-obrtnicka-koprivnica.skole.hr" target="_blank" class="link link-hover">Obrtnička škola Koprivnica</a>
        </>
    );
}

function Layout(props) {
    return (
        <>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <TopMenu />
                        </ul>
                    </div>
                    <a href="/" class="btn btn-ghost">
                        <div class="flex flex-col items-start">
                            <span class="text-xl">Marko Marulić</span>
                            <span class="text-xs">u Obrtničkoj školi Koprivnica</span>
                        </div>
                    </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <TopMenu />
                    </ul>
                </div>
                <div class="navbar-end">
                    <a href="/about" class="btn">O nama</a>
                </div>
            </div>

            <div class="container mx-auto px-4 py-8 min-h-[70vh]">
                {props.children}
            </div>

            <footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav class="grid grid-flow-col gap-4">
                    <BottomMenu />
                </nav>
                <aside>
                    <p>Vlasnička prava © {new Date().getFullYear()} Obrtnička škola Koprivnica i učenici</p>
                </aside>
            </footer>
        </>
    );
}