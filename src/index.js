import { renderHome, renderLogo, content, renderNavbar } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';
import './style.css';

renderHome();

const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');

function clear() {
    
        content.removeChild(content.lastChild);
    
}

homeLink.addEventListener('click', () => {
    clear();
    renderLogo();
});

menuLink.addEventListener('click', () => {
    clear();
    renderMenu();
});

contactLink.addEventListener('click', () => {
    clear();
    renderContact();
});