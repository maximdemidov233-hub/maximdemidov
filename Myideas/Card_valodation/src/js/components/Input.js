export default class Input {
  constructor(length, type, options) {
    this.el = document.createElement('input');
    this.length = length;
    this.type = type;
    this.options = options;
  }

  render() {
    this.el.maxLength = this.length;
    this.el.type = this.type;
    this.el.placeholder = this.options.placeholder;
    this.el.pattern = this.options.pattern;
  }
}

{/* <input maxlength="16" placeholder="0000 0000 0000 0000" pattern="\d[1-9]{4}\s\d[0-9]{4}"/> */ }
