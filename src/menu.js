import { content } from "./home.js";

const coffee = new Image();
coffee.src = '../src/coffee.jpg';

const oj = new Image();
oj.src = '../src/oj.jpg';


const eggs = new Image();
eggs.src = '../src/eggs.jpg';


const sando = new Image();
sando.src = '../src/sando.jpg';


const pancakes = new Image();
pancakes.src = '../src/pancakes.jpg';


const frenchToast = new Image();
frenchToast.src = '../src/frenchToast.jpg';

const myMenu = [
    {
        image: coffee,
        name: 'Coffee',
        description: 'Just an honest to god cup of coffee',
        price: '$3',
    },
    {
        image: oj,
        name: 'OJ',
        description: 'Fresh squeezed  orange juice',
        price: '$3',
    },
    {
        image: eggs,
        name: 'Eggs and Things',
        description: 'Eggs, choice of meat, choice of potato',
        price: '$9',
    },
    {
        image: sando,
        name: 'The Sando',
        description: 'Eggs and things between bread',
        price: '$9',
    },
    {
        image: pancakes,
        name: 'Pancakes',
        description: 'Kinda like cake, but for breakfast',
        price: '$9',
    },
    {
        image: frenchToast,
        name: 'French Toast',
        description: 'The French took toast and made it better',
        price: '$9',
    },

]


const background = document.createElement('div');
const menuItems = document.createElement('div');
background.setAttribute('id', 'background');
menuItems.setAttribute('id', 'menuItems');

function renderItem(item) {

    const div = document.createElement('div');
    div.className = 'item';
    menuItems.appendChild(div);
    const itemDiv = document.querySelector('.item:last-of-type');

    for (const prop in item) {
        const div = document.createElement('div');
        div.className = prop;

        if (prop === 'image') {
            itemDiv.appendChild(item[prop]);
        } else {
            div.textContent = item[prop];
            itemDiv.appendChild(div);
        }
    }
}

function renderHeading() {
    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';
    h2.setAttribute('id', 'menuTitle');
    background.appendChild(h2);
}

function clearMenu() {
    while (menuItems.firstChild) {
        menuItems.removeChild(menuItems.firstChild);
    }

    while (background.firstChild) {
        background.removeChild(background.firstChild);
    }
}

function renderMenu() {
    clearMenu();
    renderHeading();

    background.appendChild(menuItems);
    content.appendChild(background);

    myMenu.forEach(item => {
        renderItem(item);
    });
}

export { renderMenu };