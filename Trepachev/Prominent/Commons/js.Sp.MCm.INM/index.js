
let arr = require('./Commons/js.Sp.MCm.SVE/module');

let sum = 0;
for (elem of arr) {
	sum += elem;
}

console.log(sum);

let _ = require('lodash');

let array = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6];

let unique = _.union(array);
console.log(unique);

let randomInt = _.random(1, 20);

console.log(randomInt);
