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

function Layout(props) {
    return (
        <>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <div class="flex flex-col">
                            <span class="text-2xl font-semibold dark:text-white">Marko Marulić</span>
                            <span class="text-xs italic dark:text-white">u Obrtničkoj školi Koprivnica</span>
                        </div>
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span class="sr-only">Otvori glavni izbornik</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Naslovnica</a>
                            </li>
                            <li>
                                <a href="/biography" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Biografija
                                </a>
                            </li>
                            <li>
                                <a href="/works" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Stvaralaštvo
                                </a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    Zanimljivosti
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/stories" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Priče o Maruliću
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/cookbook" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Kuharica
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/projects" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Naši radovi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/play" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Predstava "Judita"
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    O nama
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 min-h-[75vh]">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">{props.children}</div>
            </div>

            <footer class="bg-white dark:bg-gray-900">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Marko Marulić</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="/about" class="hover:underline me-4 md:me-6">O nama</a>
                            </li>
                            <li>
                                <a href="/funding" class="hover:underline me-4 md:me-6">O projektu</a>
                            </li>
                            <li>
                                <a href="/help" class="hover:underline me-4 md:me-6">Pomoć</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://ss-obrtnicka-koprivnica.skole.hr/" target="_blank" class="hover:underline">Obrtnička škola Koprivnica</a> i učenici</span>
                </div>
            </footer>
        </>
    );
}