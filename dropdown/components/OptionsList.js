import { Option } from './Option.js';
import { createDomEl } from '../lib/create-dom-el.js';

export class OptionsList {
    constructor(elem, items) {
        this.elem = elem;
        this.items = items;
        this.list = []
    }

    getOptionsList() {
        this.items.map(item => {
            const $option = createDomEl('li', 'option__item', [{ name: 'data-id', value: `${item.id}` }]);
            $option.textContent = `${item.label}`;
            const option = new Option($option, item.id);
            this.list.push(option);
            this.elem.append(option.$option);   
        })            
    }
}