import '../index.html';
import '../scss/main.scss';


var valid = require("card-validator");
import creditCardType, {
  getTypeInfo,
  types as CardType,
} from "credit-card-type";

console.log(creditCardType('4111'))

var numberValidation = valid.number("2222");

if (!numberValidation.isPotentiallyValid) {
  renderInvalidCardNumber();
}

if (numberValidation.card) {
  console.log(numberValidation.card.type); // 'visa'
}
