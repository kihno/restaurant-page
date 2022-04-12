import './style.css';

function home() {
    const element = document.createElement('div');

    element.textContent = 'does this work?';

    return element;
}

document.body.appendChild(home());