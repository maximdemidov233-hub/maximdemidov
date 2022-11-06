export function createElement(html, inner, props) {
    const elem = document.createElement(html);

    for (let prop in props) {
        if (prop == 'className') {
            elem.className = props[prop];
        } else {
            elem.setAttribute(prop, props[prop]);
        }
    }
    elem.innerHTML = inner;
    return elem;
}

// const header = createElement('div', `<p>Hello World!!!</p>`, { className: 'header__first', type: 'text' });
// document.body.append(header);