import '../index.html';
import '../scss/main.scss';
//import '../img/visa.png';
import Input from './components/Input';

const container = document.querySelector('.container');

// const options = {
//   length: '19',
//   type: 'text',
//   placeholder: 'xxx xxxx xxx xxxx',
//   pattern: '\\d[1-9]{4}\\s\\d[0-9]{4}',
// }

const options_2 = {
  length: '6',
  type: 'text',
  placeholder: 'xx/xx',
  value: '00/00'

}

//container.append(new Input(options).render());
container.append(new Input(options_2).render());

var valid = require("card-validator");
import creditCardType, {
  getTypeInfo,
  types as CardType,
} from "credit-card-type";

//console.log(creditCardType('4111'))

var numberValidation = valid.number("2222");

if (!numberValidation.isPotentiallyValid) {
  renderInvalidCardNumber();
}

if (numberValidation.card) {
  //console.log(numberValidation.card.type); // 'visa'
}
