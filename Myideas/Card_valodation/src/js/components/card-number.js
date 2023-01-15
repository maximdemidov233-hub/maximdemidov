import createElem from "../lib/create-elem.js";

export function cardNumber() {

  const numberContainer = createElem('div',
    `
      <div class="card-container">
        <aside>Card Number:</aside>
        <div class="card-type"></div>
        <div class="card__number">
          ${new Input()}
          <div class="card-valid">&#xea10;</div>
        </div>
      </div>
    `
  );
  return numberContainer;
}



//  <div class="card-bounding">
//    <div class="card-container">
//

//    </div>
//  </div>
//  <div class="card-details clearfix">
//    <div class="expiration">
//      <aside>Expiration Date</aside>
//      <input maxlength="5" placeholder="mm/yy" />
//    </div>
//    <div class="cvv">
//      <aside>CVV</aside>
//      <input type="password" placeholder="xxx"/>
//    </div>

//    <div class="email">
//      <aside>E-mail</aside>
//      <input type="email" placeholder="xxxx@.xxx"/>
//    </div>


//  </div>
// </div>
// <button disabled>Оплатить</button>
