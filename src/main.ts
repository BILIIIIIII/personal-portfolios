import { AboutMe } from "./components/AboutMe.ts";
import { Footer } from "./components/Footer.ts";
import { Header } from "./components/Header.ts";
import { Hero } from "./components/Hero.ts";
import { Interest } from "./components/Interest.ts";
import { Projects } from "./components/Projects.ts";

import {
	populateProjectCards,
	populateSocmedLinks,
} from "./shared/lib/dynamicContent.ts";

import "./globals.css";

const appElement = document.querySelector<HTMLDivElement>("#app");

if (appElement) {
	appElement.innerHTML = `
    <div id="cont">
      ${Header()}
      ${Hero()}
      <main>  
        ${AboutMe()}
        ${Interest()}
      </main>
      <main>
        ${Projects()}
      </main>
      ${Footer()}
    </div>
  `;

	const logosContainer = document.querySelector<HTMLDivElement>("#logos");
	const projectsContainer =
		document.querySelector<HTMLDivElement>("#project-cards");

	if (logosContainer) {
		populateSocmedLinks(logosContainer);
	}
	if (projectsContainer) {
		populateProjectCards(projectsContainer);
	}
} else {
	console.error("Fatal: Could not find element with id #app");
}

// <marquee behavior="" direction=""><span id="title">My Portfolio's</span> .</marquee>
