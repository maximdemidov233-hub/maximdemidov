(() => {

	let elem = document.querySelector('#elem');
	let button = document.querySelector('#button');
	button.addEventListener('click', function () {
		let li = document.createElement('li');
		li.textContent = 'пункт';
		elem.append(li);

		li.addEventListener('click', function () {
			this.textContent += '!';
		})
	})
})();

(() => {

	let table = document.querySelector('#table');
	let select1 = document.querySelector('#select1');
	let select2 = document.querySelector('#select2');
	let k = 1;
	let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

	//select1.addEventListener('change', function () {
	// 	if (table.children) {
	// 		console.log(table.children)
	// 		for (let i = 0; i < this.value; i++) {
	// 			let tr = document.createElement('tr');

	// 			select2.addEventListener('change', function () {
	// 				for (let i = 0; i < this.value; i++) {
	// 					let td = document.createElement('td');
	// 					td.textContent = k;
	// 					tr.append(td);
	// 					k++;
	// 				}

	// 			})
	// 			table.append(tr);
	// 		}
	// 	}
	//})



	// 	for (let i = 0; i < this.value; i++) {
	// 		let tr = document.createElement('tr');

	// 		select2.addEventListener('change', function () {
	// 			for (let i = 0; i < this.value; i++) {
	// 				let td = document.createElement('td');
	// 				td.textContent = k;
	// 				tr.append(td);
	// 				k++;
	// 			}

	// 		})
	// 		table.append(tr);
	// 	}
	// })

	// for (let sub of arr) {
	// 	let tr = document.createElement('tr');
	// 	for (let num of sub) {
	// 		let td = document.createElement('td');
	// 		td.textContent = num * num;
	// 		tr.append(td);
	// 	}
	// 	table.append(tr);
	// }

	let employees = [
		{ name: 'Ivanov', age: 30, salary: 400 },
		{ name: 'Petrov', age: 31, salary: 500 },
		{ name: 'Sidorov', age: 32, salary: 600 },
	];
	let head = Object.keys(employees[0]);
	let tr = document.createElement('tr');

	for (let col of head) {
		let th = document.createElement('th');
		th.innerHTML = col;
		tr.append(th);
	}
	table.prepend(tr);


	for (let rows of employees) {
		let tr = document.createElement('tr');
		let arr = Object.values(rows)
		for (let i = 0; i < arr.length; i++) {
			let td = document.createElement('td');
			td.innerHTML = arr[i];
			tr.append(td)
		}
		table.append(tr);
	}

})();

(() => {

	let elem3 = document.querySelector('#elem3');
	let show = document.querySelector('#show');
	let hide = document.querySelector('#hide');

	// hide.addEventListener('click', function () {
	// 	elem3.classList.add('hidden');
	// });

	show.addEventListener('click', function () {

		elem3.classList.toggle('hidden');

		// if (elem3.classList == 'hidden') {
		// 	elem3.classList.remove('hidden');
		// }
		// else {
		// 	elem3.classList.add('hidden');
		// }

	});

})();

(() => {
	let buttons = document.querySelectorAll('.container4 button');
	console.log(buttons);

	for (let button of buttons) {

		button.addEventListener('click', function () {
			this.previousElementSibling.classList.toggle('hidden');


		})

	}
})();
