import { createDomEl } from '../lib/create-dom-el.js';
import { Select } from './Select.js';
import { OptionsList } from './OptionsList.js';

export class Dropdown {
    constructor($root, items) {
        this.items = items;
        this.$el = $root;       
    }

    getSelect() {
        const $select = createDomEl('div', 'dropdown__label');
        $select.textContent = this.items[0].label;
        this.select = new Select($select);
       
        return this.select.$select;
    }

    getOptions() {
        this.options = createDomEl('ul', 'dropdown__menu');
        this.optionsList = new OptionsList(this.options, this.items);           
        this.optionsList.getOptionsList();
        console.log(this.optionsList);
        
        return this.options;
    }
  
    handleClick = (e) => {
        if (e.target === this.select.$select) {
            let elem = document.querySelector('.dropdown__menu');
            if (!elem) {                
                elem = this.getOptions();
                this.select.open(elem);            
            } else {                
                this.select.close();
            };
        } else if (e.target.closest('ul')) {
            const optionElem = this.optionsList.list.filter(i => i.id === e.target.dataset.id)[0];
            let item = this.items.filter(i => i.id === optionElem.select());            
            this.select.$select.textContent = item[0].label;
            this.select.close();
        } else {
            return;
        }
    }

    render() {      
        this.$el.append(this.getSelect());
        this.$el.addEventListener('click', this.handleClick)
    }   
}


    // getOptions() {
    //     this.options = createDomEl('ul', 'dropdown__menu');
    //     const optionsList = new OptionsList(this.options, this.items).getOptionsList()
    //     // this.items.forEach(item => {
    //     //     const $option = createDomEl('li', 'option__item', [{ name: 'data-id', value: `${item.id}` }]);
    //     //     $option.textContent = `${item.label}`;
    //     //     this.option = new Option($option, item.id);
    //     //     this.options.append(this.option.$option);   
    //     // })    
    //     // console.log(this.option);
        
    //     console.log(this.options);
        
    //     return this.options;
    // }
    
      // handleClick = (e) => {
    //     if (e.target !== this.select.$select) { return; };

    //     let elem = document.querySelector('.dropdown__menu');
    //     if (!elem) {                
    //         elem = this.getOptions();
    //         this.select.open(elem);            
    //     } else {                
    //         this.select.close(elem);
    //         console.log(123);
    //     };
    // }