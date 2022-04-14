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
        name: 'Orange Juice',
        description: 'Fresh squeezed  oj',
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



function renderItem(item) {
    const div = document.createElement('div');
    div.className = 'item';
    background.appendChild(div);
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

function renderMenu() {
    while (background.firstChild) {
        background.removeChild(background.firstChild);
    }

    background.setAttribute('id', 'background');
    content.appendChild(background);

    myMenu.forEach(item => {
        renderItem(item);
    });
}




// function renderMenu() {
//     const background = document.createElement('div');

//     background.setAttribute('id', 'background');
    
//     for (let i = 0; i < 6; i++) {
//         const div = document.createElement('div');

//         div.setAttribute('id', `grid${i}`);
//         background.appendChild(div);
//     }

//     content.appendChild(background);

//     const p = document.createElement('p');
//     const grid0 = document.getElementById('grid0');
//     const grid1 = document.getElementById('grid1');
//     const grid2 = document.getElementById('grid2');
//     const grid3 = document.getElementById('grid3');
//     const grid4 = document.getElementById('grid4');
//     const grid5 = document.getElementById('grid5');

//     const coffee = new Image();
//     coffee.src = '../src/coffee.jpg';
   
//     grid0.appendChild(coffee);
//     grid0.appendChild(p);

//     const oj = new Image();
//     oj.src = '../src/oj.jpg';
   
//     grid1.appendChild(oj);
//     grid1.appendChild(p);

//     const eggs = new Image();
//     eggs.src = '../src/eggs.jpg';
   
//     grid2.appendChild(eggs);
//     grid2.appendChild(p);

//     const sando = new Image();
//     sando.src = '../src/sando.jpg';
   
//     grid3.appendChild(sando);
//     grid3.appendChild(p);

//     const pancakes = new Image();
//     pancakes.src = '../src/pancakes.jpg';
   
//     grid4.appendChild(pancakes);
//     grid4.appendChild(p);

//     const frenchToast = new Image();
//     frenchToast.src = '../src/frenchToast.jpg';
   
//     grid5.appendChild(frenchToast);
//     grid5.appendChild(p);
    
// }


export { renderMenu };