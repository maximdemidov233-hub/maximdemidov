export default function createElem(html, nod) {
    const el = document.createElement(html);
    el.innerHTML = nod;

    return el.firstElementChild;
};