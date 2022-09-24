const gulp = require('gulp');

function task(cb) {
	console.log('my first task completed!');
	console.log(new Date());
	cb();

}

exports.default = task;
