import './style.css';

const home = (() => {

    const content = document.getElementById('content');

    function renderNavbar() {
        const navbar = document.createElement('ul');

        const links = ['home', 'menu', 'contact'];

        navbar.setAttribute('id', 'navbar');
        for (let i = 0; i < links.length; i++) {
            const li = document.createElement('li');

            li.textContent = links[i];
            li.setAttribute('id', `${links[i]}`)
            navbar.appendChild(li);
        }

        content.appendChild(navbar);
    }

    function renderLogo() {
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const container = document.createElement('div');

        container.setAttribute('id', "logo");

        h1.textContent = 'Brekkie';
        container.appendChild(h1);

        p.textContent = "It's never too late to start your day with a little Brekkie.";
        container.appendChild(p); 

        content.appendChild(container);
    }

    renderNavbar();
    renderLogo();

})();

const contact = (() => {
    const content = document.getElementById('content');
    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    const formArray = ['name', 'email', 'message'];

    formArray.forEach(item => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const textarea = document.createElement('textarea');

        if (item === 'message') {
            label.textContent = item
            label.setAttribute('for', item)
            textarea.setAttribute('id', item)

            label.appendChild(textarea)
            form.appendChild(label)
        } else {
            label.textContent = item
            label.setAttribute('for', item)
            input.setAttribute('id', item)

            label.appendChild(input)
            form.appendChild(label)
        }
    });
    
    const container = document.getElementById('container');
    content.remove(container);
    content.appendChild(form);
});

