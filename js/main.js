'use strict'

$(document).ready(function () {
	//WOW(START)
	new WOW().init();
	//WOW(END)

	//Anchor(START)
	$('a[href^="#"]').click(function () {
		let valueHref = $(this).attr("href");
		$('html, body').animate({ scrollTop: $(valueHref).offset().top - 30 + "px" });
	});
	//Anchor(END)

	//Active NavBar(START)--
	$(window).scroll(function () {
		let scrollDistance = $(window).scrollTop();

		$('.section').each(function (i, el) {
			if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance * 1.05) {
				$('.anchor').each(function (i, el) {
					if ($(el).hasClass('active')) {
						$(el).removeClass('active');
					}
				});

				$('.anchor:eq(' + i + ')').addClass('active');
			};
		});
	});
	//Active NavBar(END)

	//Images Dealy(START)--
	function observerImage() {
		let images = document.querySelectorAll('img');
		let options = { threshold: [0.1] };
		let observer = new IntersectionObserver(onEntryImage, options);

		function onEntryImage(myImage, observer) {
			myImage.forEach(myImgSingle => {
				if (myImgSingle.intersectionRatio > 0) {
					imgLoad(myImgSingle.target);
				};
			});
		};

		images.forEach(img => {
			observer.observe(img);
		});

		//Change SRC Image(START)--
		function imgLoad(image) {
			image.src = image.getAttribute('data-img');
		};
		//Change SRC Image(END)
	};

	observerImage();
	//Images Dealy(END)

	//Modal Window Delay(START)--
	let reviewsTimeOut = setTimeout(function reviewsFunction() {
		if (!($('#exampleModalCheck').hasClass('show') || $('#exampleModalCalculator').hasClass('show'))) {
			$('#exampleModalReviews').modal('show');
		} else {
			reviewsTimeOut = setTimeout(reviewsFunction, 20000);
		};
	}, 90000); //Delay Modal(ms)
	//Modal Window Delay(END)

	//Modal Window(START)--
	setTimeout(function () {
		$('#modalCheck').removeClass('d-none').addClass('d-block');
	}, 1000);

	$('.check').click(function () {
		$('#exampleModalCheck').modal('show');
	});

	$('.modalCalc').click(function () {
		$('#exampleModalCalculator').modal('show');
	});

	$('#calculatorButtonSubmit').click(function () {
		$('#modalCalcAnswerTextFirst').attr('value', $('#formTypeSite option:selected').text())
		$('#modalCalcAnswerTextSecond').attr('value', $('#formTypeDesign option:selected').text())
		$('#modalCalcAnswerTextThird').attr('value', $('#formTypeAdaptive option:selected').text())
	});
	//Modal Window(END)

	//AJAX(START)--
	//AJAX Modal Reviews(START)--
	$('#mailReviews').submit(function (event) {
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: 'php/mailReviews.php',
			data: $(this).serialize(),
		}).done(function () {
			$(this).find('input').val('');
			$('form').trigger('reset');
			$('.modalSpinner').removeClass('d-inline-block').addClass('d-none'); //Spinner Off
			$('#exampleModalReviews').modal('hide');
			$('input[type=submit]').removeAttr('disabled'); //Submit On
		});
		return false;
	});
	//AJAX Modal Reviews(END)

	//AJAX Modal Present(START)--
	$('#mailPresent').submit(function (event) {
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: 'php/mailPresent.php',
			data: $(this).serialize(),
		}).done(function () {
			$(this).find('input').val('');
			$('form').trigger('reset');
			$('.modalSpinner').removeClass('d-inline-block').addClass('d-none'); //Spinner Off
			$('#modalCheck').removeClass('d-block').addClass('d-none');
			$('#exampleModalCheck').modal('hide');
			$('input[type=submit]').removeAttr('disabled'); //Submit On
		});
		return false;
	});
	//AJAX Modal Present(END)

	//AJAX Mail Calculator(START)--
	$('#mailCalculator').submit(function (event) {
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: 'php/mailCalculator.php',
			data: $(this).serialize(),
		}).done(function () {
			$(this).find('input').val('');
			$('form').trigger('reset');
			$('.modalSpinner').removeClass('d-inline-block').addClass('d-none'); //Spinner Off
			$('.modalCalc').removeClass('d-block').addClass('d-none');
			$('#exampleModalCalculator').modal('hide');
			$('input[type=submit]').removeAttr('disabled'); //Submit On
		});
		return false;
	});
	//AJAX Mail Calculator(END)

	//AAJAX Mail Contacts(START)--
	$('#mailContacts').submit(function (event) {
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: 'php/mailContacts.php',
			data: $(this).serialize(),
		}).done(function () {
			$(this).find('input').val('');
			$('form').trigger('reset');
			$('.modalSpinner').removeClass('d-inline-block').addClass('d-none'); //Spinner Off
			$('input[type=submit]').removeAttr('disabled'); //Submit On
		});
		return false;
	});
	//AJAX Mail Contacts(END)

	//Submit Off
	$('form').submit(function () {
		$('input[type=submit]', this).attr('disabled', 'disabled'); //Submit Off
		$('.modalSpinner').removeClass('d-none').addClass('d-inline-block'); //Spinner On
	});
	//Submit Off
	//AJAX(END)

	//Animation Numbers(START)--
	function observerNumbersRun() {
		let options = {
			threshold: [0.7],
		};
		let observer = new IntersectionObserver(onEntryNumbers, options);
		let elements = $('.elements-numbers-animation');

		elements.each((i, el) => {
			observer.observe(el);
		});

		function onEntryNumbers(entry) {
			entry.forEach(change => {
				if ($('.statisticsItem').hasClass('animated')) {
					if (!($('.statisticsItem').hasClass('done'))) {
						setTimeout(function () {
							outNumOne(120, 'outNum-1');
						}, 800); //Delay Animation(ms)

						setTimeout(function () {
							outNumTwo(4600, 'outNum-2');
						}, 1200); //Delay Animation(ms)

						setTimeout(function () {
							outNumThree(340, 'outNum-3');
						}, 1600); //Delay Animation(ms)

						setTimeout(function () {
							outNumFour(23, 'outNum-4');
						}, 2000); //Delay Animation(ms)

						$('.statisticsItem').addClass('done');
					};
				};
			});
		};
	};

	observerNumbersRun();

	//OutNumberOne and OutNumberFour
	function outNumOne(num, el) {
		const TIME = 1000; //Time(ms)
		const STEPS = 1; //Steps

		let l = document.querySelector('#' + el);
		let n = 0;
		let t = Math.round(TIME / (num / STEPS));
		let interval = setInterval(() => {
			n = n + STEPS;
			if (n === num) {
				clearInterval(interval);
			};

			l.innerHTML = n;
		}, t);
	};

	//OutNumberTwo
	function outNumTwo(num, el) {
		const TIME = 1000; //Time(ms)
		const STEPS = 10; //Steps

		let l = document.querySelector('#' + el);
		let n = 0;
		let t = Math.round(TIME / (num / STEPS));
		let interval = setInterval(() => {
			n = n + STEPS;
			if (n === num) {
				clearInterval(interval);
			};

			l.innerHTML = n;
		}, t);
	};

	//OutNumberThree
	function outNumThree(num, el) {
		const TIME = 1000; //Time(ms)
		const STEPS = 10; //Steps

		let l = document.querySelector('#' + el);
		let n = 0;
		let t = Math.round(TIME / (num / STEPS));
		let interval = setInterval(() => {
			n = n + STEPS;
			if (n === num) {
				clearInterval(interval);
			};

			l.innerHTML = n;
		}, t);
	};

	//OutNumberFour
	function outNumFour(num, el) {
		const TIME = 1000; //Time(ms)
		const STEPS = 1; //Steps

		let l = document.querySelector('#' + el);
		let n = 0;
		let t = Math.round(TIME / (num / STEPS));
		let interval = setInterval(() => {
			n = n + STEPS;
			if (n === num) {
				clearInterval(interval);
			};

			l.innerHTML = n;
		}, t);
	};
	//Animation Numbers(END)

	//Form Calculator(START)--
	$('#calculatorButtonSubmit').bind('click', function calculator() {
		//Data Attribute First
		let calculatorTermFirstAttribute = document.getElementById("formTypeSite"); //ID elements
		let optionFirst = calculatorTermFirstAttribute.options[calculatorTermFirstAttribute.selectedIndex]; //Option Index
		let calculatorTermFirst = Number(optionFirst.getAttribute('data-term-days')); //Attribute Options

		//Data Attribute Second
		let calculatorTermSecondAttribute = document.getElementById("formTypeDesign"); //ID elements
		let optionSecond = calculatorTermSecondAttribute.options[calculatorTermSecondAttribute.selectedIndex]; //Option Index
		let calculatorTermSecond = Number(optionSecond.getAttribute('data-term-days')); //Attribute Options

		//Data Attribute Third
		let calculatorTermThirdAttribute = document.getElementById("formTypeAdaptive"); //ID elements
		let optionThird = calculatorTermThirdAttribute.options[calculatorTermThirdAttribute.selectedIndex]; //Option Index
		let calculatorTermThird = Number(optionThird.getAttribute('data-term-days')); //Attribute Options

		//Value Option
		let calculatorValueFirst = Number(document.getElementById("formTypeSite").value); //Option Value
		let calculatorValueSecond = Number(document.getElementById("formTypeDesign").value); //Option Value
		let calculatorValueThird = Number(document.getElementById("formTypeAdaptive").value); //Option Value

		let one = document.querySelector('#calculatorNumberTerm');
		let two = document.querySelector('#calculatorNumberCost');

		let calculatorTermAll;
		let calculatorCostAll;

		$('.calculatorIcon').removeClass('done');
		$('.calculatorTextRequired').removeClass('done');
		if ((calculatorValueFirst != 0) && (calculatorValueSecond != 0) && (calculatorValueThird != 0)) {
			calculatorTermAll = calculatorTermFirst + calculatorTermSecond + calculatorTermThird; //Calculated Terms
			calculatorCostAll = calculatorValueFirst + calculatorValueSecond + calculatorValueThird; //Calculated Cost
			one.innerHTML = calculatorTermAll; //Change Terms
			two.innerHTML = calculatorCostAll; //Change Cost
			function modalCalc() {
				let a = $('#modalCheck').hasClass('d-none');
				let b = $('#modalCalcOne').hasClass('d-none');
				let c = $('#modalCalcTwo').hasClass('d-none');
				if (!a & b && c) {
					$('#modalCalcOne').removeClass('d-none').addClass('d-block');
				}
				if (a && b && c) {
					$('#modalCalcTwo').removeClass('d-none').addClass('d-block');
				};
			};
			modalCalc();
		} else {
			changeCalculatorIcon();
		};

		function changeCalculatorIcon() {
			if (calculatorValueFirst == 0) {
				$('.calculatorIconFirst').addClass('done');
				$('.calculatorTextRequired').addClass('done');
			};
			if (calculatorValueSecond == 0) {
				$('.calculatorIconSecond').addClass('done');
				$('.calculatorTextRequired').addClass('done');
			};
			if (calculatorValueThird == 0) {
				$('.calculatorIconThird').addClass('done');
				$('.calculatorTextRequired').addClass('done');
			};
		};


	});
	//Form Calculator(END)

	//Magnific Popup(START)--
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		}
	});
	//Magnific Popup(END)
});