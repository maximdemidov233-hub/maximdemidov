import createElem from "../lib/create-elem.js";

export function cardField() {
  return createElem('div',
    `
     <div class="card-bounding"></div >
    `
  );
}
