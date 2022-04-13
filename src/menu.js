import { content } from "./home";

function renderMenu() {
    const background = document.createElement('div');

    background.setAttribute('id', 'background');

    content.appendChild(background);
}

export { renderMenu}