

export default class Input {
  constructor(options) {
    this.el = document.createElement('input');
    this.options = options;
    //this.getValidNumber();
    this.getValidData();
  }

  render() {
    this.el.maxLength = this.options.length;
    this.el.type = this.options.type;
    this.el.placeholder = this.options.placeholder;
    this.el.pattern = this.options.pattern;
    //this.el.value = this.options.value;
    return this.el;
  }

  getValidData() {
    this.el.addEventListener('input', function () {
      if (this.value.match(/[\D]/g)) {
        this.style.outlineColor = '#ff0000';
        this.value = this.value.replace(/[\D]/g, '')
        console.log('000')
      }
      let code = this.value;

      if (this.value.length == 2) {
        code = this.value.replace(/(\d{2})/, '$&/').substring(0, 5)

      }
      console.log(code)
      this.value = code.substring(0, 5)


    })
  }

  getValidNumber() {
    this.el.addEventListener('input', function () {
      if (this.value.match(/[\D]/g)) {
        this.style.outlineColor = '#ff0000';
        console.log('000')
      }

      if (this.value.match(/^0/)) {
        this.style.outlineColor = '#ff0000';
        this.value = this.value.replace(/0{1}/, '');
        console.log('111')
      }

      if (this.value === null) {
        console.log('222')
        this.style.outlineColor = '#000';
      }

      if (this.value.match(/[(\d+)((\d+\s))]/g)) {
        console.log('222')
        this.style.outlineColor = '#000';
      }

      let cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
      cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g)
        .join(' ') : '';

      this.value = cardCode;
    })
  }









}

