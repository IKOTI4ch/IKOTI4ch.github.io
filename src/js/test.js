/*Calculator*/
let typeSite, checkFirst = 0, checkSecond = 0, checkThird = 0, numberCalculatorFirst = 0, numberCalculatorSecond = 0, numberCalculatorThird = 0, calculatorCost, costAnswer;

//questionCalculator();

function questionCalculator() {
	let answer = confirm('Расчитать стоимость сайта?');

	if (answer == true) {
		trueAnswer();
	};
};

function trueAnswer() {
	typeSite = prompt('Выберите пункт: Тип сайта / Дизайн / Адаптивность');

	if (typeSite == null) {
		questionCalculator();
	} else if ((typeSite === 'Тип сайта') || (typeSite === 'тип сайта')) {
		typeBackFirst();
	} else if ((typeSite === 'Дизайн') || (typeSite === 'дизайн')) {
		typeBackSecond();
	} else if ((typeSite === 'Адаптивность') || (typeSite === 'адаптивность')) {
		typeBackThird();
	} else {
		alert('Пункт указан не верно! Проверьте свой ответ.');
		trueAnswer();
	};
};


function typeBackFirst() {
	let typeAnswer = prompt('Выберите пункт: Сайт-визитка = 1 unit / Корпоративный = 2 units / Интернет-магазин 3 units / Landing page 4 units');

	if ((typeAnswer === 'Сайт-визитка') || (typeAnswer === 'сайт-визитка') || (typeAnswer === 'Сайт визитка') || (typeAnswer === 'сайт визитка')) {
		numberCalculatorFirst = 1;
	} else if ((typeAnswer === 'Корпоративный') || (typeAnswer === 'корпоративный')) {
		numberCalculatorFirst = 2;
	} else if ((typeAnswer === 'Интернет-магазин') || (typeAnswer === 'интернет-магазин') || (typeAnswer === 'Интернет магазин') || (typeAnswer === 'интернет магазин')) {
		numberCalculatorFirst = 3;
	} else if ((typeAnswer === 'Landing page') || (typeAnswer === 'landing page') || (typeAnswer === 'Лендинг пейдж') || (typeAnswer === 'лендинг пейдж')) {
		numberCalculatorFirst = 4;
	} else {
		alert('Пункт указан не верно! Проверьте свой ответ.');
		typeBackFirst();
	};


	if (numberCalculatorFirst != 0) {
		let answer = confirm('Выбрать следующий пункт.');

		checkFirst = 1;

		if (answer == true) {
			trueAnswer();
		} else {
			checkAll();
		}
	};

	return numberCalculatorFirst;
};

function typeBackSecond() {
	let typeAnswer = prompt('Выберите пункт: : Жесткий = 1 unit / Гибкий = 2 units / Комбинированный 3 units');

	if ((typeAnswer === 'Жёсткий') || (typeAnswer === 'Жесткий') || (typeAnswer === 'жёсткий') || (typeAnswer === 'жесткий')) {
		numberCalculatorSecond = 1;
	} else if ((typeAnswer === 'Гибкий') || (typeAnswer === 'гибкий')) {
		numberCalculatorSecond = 2;
	} else if ((typeAnswer === 'Комбинированный') || (typeAnswer === 'комбинированный') || (typeAnswer === 'Интернет магазин') || (typeAnswer === 'интернет магазин')) {
		numberCalculatorSecond = 3;
	} else {
		alert('Пункт указан не верно! Проверьте свой ответ.');
		typeBackFirst();
	};

	if (numberCalculatorSecond != 0) {
		let answer = confirm('Выбрать следующий пункт.');

		checkSecond = 1;

		if (answer == true) {
			trueAnswer();
		} else {
			checkAll();
		}
	};

	return numberCalculatorSecond;
};

function typeBackThird() {
	let typeAnswer = prompt('Выберите пункт: Perfect Pixel(PP) = 1 unit / Адаптивный = 2 units / Резиновый 3 units / Отзывчивый 4 units');

	if ((typeAnswer === 'Perfect Pixel') || (typeAnswer === 'perfect pixel') || (typeAnswer === 'PP') || (typeAnswer === 'pp')) {
		numberCalculatorThird = 1;
	} else if ((typeAnswer === 'Адаптивный') || (typeAnswer === 'адаптивный')) {
		numberCalculatorThird = 2;
	} else if ((typeAnswer === 'Резиновый') || (typeAnswer === 'резиновый')) {
		numberCalculatorThird = 3;
	} else if ((typeAnswer === 'Отзывчивый') || (typeAnswer === 'отзывчивый')) {
		numberCalculatorThird = 4;
	} else {
		alert('Пункт указан не верно! Проверьте свой ответ.');
		typeBackFirst();
	};

	if (numberCalculatorThird != 0) {
		let answer = confirm('Выбрать следующий пункт.');

		checkThird = 1;

		if (answer == true) {
			trueAnswer();
		} else {
			checkAll();
		}
	};

	return numberCalculatorThird;
}

function checkAll() {
	if ((checkFirst != 0) && (checkSecond != 0) && (checkThird != 0)) {
		calculator();
	} else {
		alert('Выбраны не все пункты!');
		trueAnswer();
	};
};

function calculator() {
	if ((numberCalculatorFirst != 0) || (numberCalculatorSecond != 0) || (numberCalculatorThird != 0)) {
		calculatorCost = numberCalculatorFirst + numberCalculatorSecond + numberCalculatorThird;
		costQuestion();
	};
};

function costQuestion() {
	costAnswer = confirm('Сумма составляет ' + calculatorCost + ' units. ' + "Вас устраивает данная сумма?")

	if (costAnswer == false) {
		trueAnswer();
	};
};