import { projectData } from "./constants/projects";
import { socmeds } from "./constants/socmeds";

/**
 * Populates a container element with social media links.
 * @param container The HTML element to append the logos to.
 */

export function populateSocmedLinks(container: HTMLElement) {
	container.innerHTML = "";

	socmeds.forEach((logo) => {
		const linkElement = document.createElement("a");
		linkElement.href = logo.link;
		linkElement.className = "bx-tada-hover";
		linkElement.id = logo.name;
		linkElement.target = "_blank";
		linkElement.innerHTML = logo.icon;

		container.appendChild(linkElement);
	});
}

/**
 * Populates a container element with project cards.
 * @param container The HTML element to append the cards to.
 */

export function populateProjectCards(container: HTMLElement) {
	container.innerHTML = "";

	projectData.forEach((data) => {
		const card = document.createElement("div");
		card.className = "card";

		card.innerHTML = `
      <a href="${data.link}" target="_blank">
        <div class="info">
          <div class="title"><p>${data.name}</p></div>
          <div class="hero">
            <img src="${data.img}" alt="Project image for ${data.name}" />
          </div>
        </div>
        <div class="detail">
          <div class="date">
            ${data.date.month}.${data.date.day} <br />
            ${data.date.year}
          </div>
        </div>
      </a>
    `;

		container.appendChild(card);
	});
}
