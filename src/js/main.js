'use strict'

$(document).ready(function () {
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

	//Observer 'What I Can'START)--
	function observerWhatCan() {
		let options = { threshold: [0.25] };
		let observer = new IntersectionObserver(onEntryWhatCan, options);
		let elements = $('.elements-whatCan-animation');

		elements.each((i, el) => {
			observer.observe(el);
		});

		//Change Class 'What I Can'(START)--
		function onEntryWhatCan(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					$('.elements-whatCan-animate').addClass('elements-whatCan-animate-done')
				};
			});
		};
		//Change Class 'What I Can'(END)
	};

	observerWhatCan();
	//Observer 'What I Can'(END)

	//Observer 'Statistics'(START)--
	function observerStatistics() {
		let options = { threshold: [0.25] };
		let observer = new IntersectionObserver(onEntryStatistics, options);
		let elements = $('.elements-statistics-animation');

		elements.each((i, el) => {
			observer.observe(el);
		});

		//Change Class 'Statistics'(START)--
		function onEntryStatistics(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					$('.elements-statistics-animate').addClass('elements-statistics-animate-done')

					setTimeout(function () {
						outNum(120, 'outNum-1');
					}, 1000); //Delay Animation(ms)

					setTimeout(function () {
						outNumTwo(4600, 'outNum-2');
					}, 1400); //Delay Animation(ms)

					setTimeout(function () {
						outNumThree(340, 'outNum-3');
					}, 1800); //Delay Animation(ms)

					setTimeout(function () {
						outNum(23, 'outNum-4');
					}, 2200); //Delay Animation(ms)
				};
			});
		};
		//Change Class 'Statistics'(END)
	};

	observerStatistics();
	//Observer 'Statistics'(END)

	//Animation Numbers(START)--
	//OutNumberOne and OutNumberFour
	function outNum(num, el) {
		const TIME = 2000; //Time(ms)
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
		const TIME = 2000; //Time(ms)
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
		const TIME = 2000; //Time(ms)
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

		if ((calculatorValueFirst != 0) && (calculatorValueSecond != 0) && (calculatorValueThird != 0)) {
			calculatorTermAll = calculatorTermFirst + calculatorTermSecond + calculatorTermThird; //Calculated Terms
			calculatorCostAll = calculatorValueFirst + calculatorValueSecond + calculatorValueThird; //Calculated Cost
			one.innerHTML = calculatorTermAll; //Change Terms
			two.innerHTML = calculatorCostAll; //Change Cost
		} else {
			alert('Выбраны не все пункты!');
		};
	});
	//Form Calculator(END)

	//Modal Window Delay(START)--
	setTimeout(function () {
		$('#exampleModal').modal('show');
	}, 1000); //Delay Modal(ms)
	//Modal Window Delay(END)

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
			image.src = image.getAttribute('data');
		};
		//Change SRC Image(END)
	};

	observerImage();
	//Images Dealy(END)

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