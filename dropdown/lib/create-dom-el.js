export const createDomEl = (tagName, classes, attributes=[]) => {
    const domEl = document.createElement(tagName);
    if (classes) {
        domEl.classList.add(classes);
    }

    if (attributes) {
        attributes.forEach(atr => {
            domEl.setAttribute(atr.name, atr.value);
        })
    }

    return domEl;
};