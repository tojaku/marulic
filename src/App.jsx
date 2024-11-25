import { HashRouter, Route } from "@solidjs/router";

import logo from "./assets/favicon.png";

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
            <Route path="/onama" component={About} />
            <Route path="/kuharica" component={Cookbook} />
            <Route path="/predstava" component={Play} />
            <Route path="/radovi" component={Projects} />
            <Route path="/price" component={Stories} />
            <Route path="/biografija" component={Biography} />
            <Route path="/stvaralastvo" component={Works} />
            <Route path="/oprojektu" component={Funding} />
            <Route path="/pomoc" component={Help} />
        </HashRouter>
    );
}

function TopMenu(props) {
    let submenu;

    function closeSubmenu() {
        submenu.removeAttribute("open");
    }

    return (
        <>
            <li><a href="/biografija" onClick={closeSubmenu}>Biografija</a></li>
            <li><a href="/stvaralastvo" onClick={closeSubmenu}>Stvaralaštvo</a></li>
            <li>
                <details ref={submenu}>
                    <summary>Zanimljivosti</summary>
                    <ul class="p-2" onClick={closeSubmenu}>
                        <li><a href="/price">Priče</a></li>
                        <li><a href="/kuharica">Kuharica</a></li>
                        <li><a href="/radovi">Naši radovi</a></li>
                        <li><a href="/predstava">Predstava</a></li>
                    </ul>
                </details>
            </li>
        </>
    );
}

function BottomMenu(props) {
    return (
        <>
            <a href="/pomoc" class="link link-hover">Pomoć</a>
            <a href="/oprojektu" class="link link-hover">O projektu</a>
            <a href="/onama" class="link link-hover">O nama</a>
            <a href="https://ss-obrtnicka-koprivnica.skole.hr" target="_blank" class="link link-hover">Obrtnička škola Koprivnica</a>
        </>
    );
}

function Layout(props) {
    return (
        <>
            <div class="navbar bg-base-200">
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
                        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                    <ul class="menu menu-horizontal px-1 gap-1">
                        <TopMenu />
                    </ul>
                </div>
                <div class="navbar-end">
                    <a href="/onama" class="btn bg-base-100">O nama</a>
                </div>
            </div>

            <div class="container mx-auto px-4 py-8 min-h-[70vh]">
                {props.children}
            </div>

            <footer class="footer footer-center bg-base-200 text-base-content rounded p-6 gap-2">
                <nav class="grid grid-flow-col gap-4">
                    <BottomMenu />
                </nav>
                <img src={logo} class="w-48"/>
                <aside>
                    <p>Vlasnička prava © {new Date().getFullYear()} Obrtnička škola Koprivnica</p>
                </aside>
            </footer>
        </>
    );
}