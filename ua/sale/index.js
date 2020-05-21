'use strict';

$(document).ready(() => {
	const types = JSON.parse(localStorage.getItem('motorcycles')).types;

	$.each(types, (index, type) => {
		$('main').append(`
			<div class="card features-grid">
				<img id="image" src="./image/${type}.png">
				<span id="name">${type} Bike</span>
			</div>
		`);
	});

	$('.features-grid').fadeOut(3000);

	$('h1 span').fadeOut(1000)
				.fadeIn(2000);
});