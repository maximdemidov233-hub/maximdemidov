
function renderTitle() {
	let container = document.querySelector('.container');

	let sectionTitle = document.createElement('section');
	sectionTitle.classList.add('header');

	let title = document.createElement('h2');
	title.textContent = 'Игра угадай число';
	title.style.color = `rgb(${getRandomInt(1, 255)}, ${getRandomInt(1, 255)}, ${getRandomInt(1, 255)})`;

	let subTitle = document.createElement('p');
	subTitle.innerHTML = 'Угадайте случайное число от 1 до выбранного вами. У вас будет одна минута и 5 попыток';

	sectionTitle.append(title, subTitle);
	container.append(sectionTitle);

	return sectionTitle;
}

function renderChoice() {
	let container = document.querySelector('.container');

	let sectionChioce = document.createElement('section');
	sectionChioce.classList.add('choice');

	let titleChoice = document.createElement('h5');
	titleChoice.classList.add('choice__title');
	titleChoice.textContent = 'Выберите размерность игры от 1 до';
	let sectionMax = document.createElement('select');

	for (let i = 20; i <= 100; i += 20) {
		let option = document.createElement('option');
		option.value = i;
		option.textContent = option.value;
		if (i == 100) {
			option.selected = true;
		}
		sectionMax.append(option);
	}

	sectionChioce.append(titleChoice, sectionMax);
	container.append(sectionChioce);

	return sectionMax;
}

function renderGameField() {
	let container = document.querySelector('.container');

	let sectionGame = document.createElement('section');
	sectionGame.classList.add('game');

	let input = document.createElement('input');
	input.classList.add('input');
	input.placeholder = 'Угадай число';
	input.disabled = true;

	let button = document.createElement('button');
	button.textContent = 'Начать игру';
	button.classList.add('button');

	let paragraph = document.createElement('p');
	paragraph.classList.add('paragraph')
	paragraph.textContent = 'Здесь будут введенные вами числа:';

	sectionGame.append(input, button, paragraph);

	container.append(sectionGame);

	return {
		sectionGame,
		input,
		button,
		paragraph
	};
}

function renderPopUp(randomInt, num, count, input, button) {
	let popUp = document.createElement('div');
	popUp.classList.add('popup');

	let text = document.createElement('p');

	if (num == randomInt) {
		text.textContent = 'Поздравляем!!! Вы угадали число!!!';
		text.style.color = 'green';
		input.disabled = true;
		input.style.border = '1px solid red';
		button.disabled = false;
	} else if (num < randomInt) {
		text.textContent = 'Увы. Попробуйте выбрать число побольше';
		text.style.color = 'red';
	} else if (num > randomInt) {
		text.textContent = 'Увы. Попробуйте выбрать число поменьше';
		text.style.color = 'red';
	}

	if (count == 5) {
		text.textContent = 'Игра закончена.Для начала новой игры нажмите на кнопку.';
		text.style.color = 'red';
		input.disabled = true;
		input.style.border = '1px solid red';
		button.disabled = false;
	}

	popUp.append(text);

	return popUp;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ticket(time, element, input, button) {
	let watch = document.createElement('div');
	watch.classList.add('watch');
	let countDawn = document.createElement('p');
	countDawn.classList.add('countdawn');
	countDawn.textContent = '00' + ':' + time;
	watch.append(countDawn);
	element.append(watch);

	let interval = setInterval(function func() {
		time--;

		if (time >= 10) {
			countDawn.textContent = '00' + ':' + time;
		} else {
			countDawn.textContent = '00' + ':' + '0' + time;
		}


		let text = document.createElement('p');

		if (time < 10) {
			countDawn.style.color = 'red';
			watch.style.border = '2px solid red';
			watch.style.width = '55px';
			watch.style.height = '55px';
		}

		if (time == 0) {
			clearInterval(interval);
			text.textContent = 'Игра закончена.Для начала новой игры нажмите на кнопку.';
			text.style.color = 'red';
			input.disabled = true;
			input.style.border = '1px solid red';
			button.disabled = false;


			setTimeout(function () {
				watch.remove();
			}, 1000);

		}


	}, 1000);
	return watch;
}

export function guessRandomInt() {

	let title = renderTitle();
	let maxInt = renderChoice();
	let gameField = renderGameField();
	let randomInt = getRandomInt(1, Number(maxInt.value));
	let input = gameField.input;
	let button = gameField.button;

	let count = 0;
	let time = 0;

	maxInt.addEventListener('change', function func() {
		randomInt = getRandomInt(1, Number(this.value));
		console.log(randomInt)

	});

	button.addEventListener('click', function () {
		count = 0;
		time = 30;
		randomInt = getRandomInt(1, Number(maxInt.value));

		ticket(time, title, input, this);

		let paragraph = document.querySelector('.paragraph');
		paragraph.textContent = 'Здесь будут введенные вами числа:';
		input.disabled = false;
		input.style.border = '1px solid green';
		this.disabled = true;

		console.log(randomInt)

		input.addEventListener('blur', function () {
			console.log(randomInt)
			count++;

			console.log(count)

			let popUp = renderPopUp(randomInt, gameField.input.value, count, this, button);
			document.body.append(popUp);

			let intAddedList = gameField.paragraph;
			if (count == 5) {
				intAddedList.textContent += gameField.input.value + '.';
			} else {
				intAddedList.textContent += gameField.input.value + ',' + ' ';
			}

			let coord = this.getBoundingClientRect();
			let coordPopUp = popUp.getBoundingClientRect();
			popUp.style.top = (coord.top - coordPopUp.height) + 'px';
			popUp.style.left = (coord.left - coordPopUp.width) + 'px';

			setTimeout(function () {
				popUp.hidden = true;
			}, 2000);

			popUp.hidden = false;


			input.value = '';
		});






	});



}
