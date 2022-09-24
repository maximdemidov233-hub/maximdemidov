export default class Spoiler {
    constructor(element, options = {}) {
        this.element = element;
        element.classList.add('spoiler');
        this.element.addEventListener('click', this.showContent);
        this.options = options;
        this.render();
    }

    render() {
        if (this.options) {
            this.options?.shown ? this.element.classList.add('shown') : null;
            if (this.options?.shown && this.options?.background) {
                return;
            }
            else {
                this.element.querySelector('.header').style.backgroundColor = `${this.options.background}`;
            }
            if (this.options?.shown && this.options?.background) {
                return;
            }
            else {
                this.element.querySelector('.header').style.color = `${this.options.color}`;
            }

            this.options?.border ? this.element.style.border = `${this.options.border}` : null;
        }
    }

    showContent(e) {
        if (e.target.tagName == 'A') {
            this.classList.toggle('shown');
            if (this.classList.contains('shown')) {
                this.classList.remove('em');;
            } else {
                this.classList.add('em');
            }
        }
    }

    // changeColor() {
    //     if (!this.shown) {
    //         this.element.classList.add('em');
    //     }

    // }

    // get shown() {
    //     return this.element.classList.contains('shown')
    // }

    // set shown(value) {
    //     if (value) {
    //         if (!this.shown) {
    //             this.element.classList.toggle('shown');

    //         }

    //     } else {
    //         if (this.shown) {
    //             this.element.classList.toggle('shown');

    //         }

    //     }
    // }
}