
//Задача 1

function square(num) {
	return num * num;
}
function cube(num) {
	return num * num * num;
}

// module.exports.square = square;
// module.exports.cube = cube;

exports.square = square;
exports.cube = cube;

//Задача 2

function square(num) {
	return num * num;
}
function cube(num) {
	return num * num * num;
}

//exports = {square, cube};

module.exports = { square, cube };

