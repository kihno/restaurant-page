import { content } from './home.js';

function renderContact() {
    // renderNavbar();

    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    form.appendChild(h2);

    const formArray = ['name', 'email', 'message'];

    formArray.forEach(item => {
        const row = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const textarea = document.createElement('textarea');

        if (item === 'message') {
            label.textContent = item + ':'
            label.setAttribute('for', item)
            textarea.setAttribute('id', item)
            textarea.setAttribute('required', '')
            row.setAttribute('class', 'row')

            row.appendChild(label)
            row.appendChild(textarea)
            form.appendChild(row)
        } else {
            label.textContent = item + ':'
            label.setAttribute('for', item)
            input.setAttribute('id', item)
            input.setAttribute('required', '');
            row.setAttribute('class', 'row')

            row.appendChild(label)
            row.appendChild(input)
            form.appendChild(row)
        }
    });

    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.setAttribute('type', 'submit');
    form.appendChild(button);

    content.appendChild(form);

    form.addEventListener('submit', () => {
        alert('Message successfully sent')
    });
}

export { renderContact };
