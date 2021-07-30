document.body.onload = function () {
	setTimeout(function () {
		let preloader = document.getElementById('preloader')
		let itemLoadHeader = document.getElementById('itemLoadHeader')
		let itemLoadMain = document.getElementById('itemLoadMain')
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
			itemLoadHeader.classList.add('done');
			itemLoadMain.classList.add('done');
		}
	}, 1000);
}