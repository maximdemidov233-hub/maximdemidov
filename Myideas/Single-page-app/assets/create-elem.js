export function createElem(nod, html) {
    const el = document.createElement(nod);
    el.innerHTML = html;
    return el.firstElementChild;
};