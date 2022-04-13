import {content, renderNavbar } from './home.js';

function renderContact() {
    // renderNavbar();

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

    content.appendChild(form);
}

export { renderContact };
