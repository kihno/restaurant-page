import './style.css';

const Home = (() => {

    const content = document.getElementById('content');

    function renderNavbar() {
        const navbar = document.createElement('ul');

        const links = ['Home', 'Menu', 'Contact'];

        navbar.setAttribute('id', 'navbar');
        for (let i = 0; i < links.length; i++) {
            const li = document.createElement('li');

            li.textContent = links[i];
            navbar.appendChild(li);
        }

        content.appendChild(navbar);
    }

    function renderLogo() {
        const h1 = document.createElement('h1');

        h1.textContent = 'Brekkie';
        content.appendChild(h1);
    }

    function renderTagline() {
        const p = document.createElement('p');

        p.textContent = "It's never too late to start your day with a little Brekkie.";
        content.appendChild(p);    
    }

    renderNavbar();
    renderLogo();
    renderTagline();
})();

