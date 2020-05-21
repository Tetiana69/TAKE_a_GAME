'use strict';

$(document).ready(() => {
	const brands = JSON.parse(localStorage.getItem('motorcycles')).brands;

	$.each(brands, (index, brand) => {
		$('#manufacturers').append(`
			<li id="item-${index + 1}" class="${index % 2 === 0 ? 'odd' : ''}">
				<div class="info">
					<img id="image-${index + 1}" src="./image/${brand}.png" alt="${brand}-logo">
					<span id="brand-${index + 1}" class="brand">${brand}</span>
				</div>
			</li>
		`);
	});

	$('img[alt*="logo"]').hide();

	const randomFadeById = (idArray, fadeDurationMS = 5000) => {
		const randomInRange = (minInclusive, maxExclusive) => parseInt(Math.random() * (maxExclusive - minInclusive) + minInclusive);

		const randomIndex = randomInRange(0, idArray.length);

		$(`#${idArray[randomIndex]}`).fadeOut(fadeDurationMS);

		idArray.splice(randomIndex, 1);
	};

	randomFadeById(['item-3', 'brand-5', 'brand-1']);
});