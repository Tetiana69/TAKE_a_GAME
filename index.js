'use strict';

$(document).ready(() => {
	
	const alertH1 = ( () => alert($('h1').text()) )();

	const alertBrands = ( () => {
		const brands = JSON.parse(localStorage.getItem('motorcycles')).brands;
		alert(brands.join(' '));
	} )();

	const alertNavItems = ( () => {
		let navItems = '';

		$.each($('.nav__item'), (index, element) => {
			navItems += `${ $(element).text() } `;
		});

		alert(navItems);
	} )();

	const hideMoreButton = ( () => $('#main-button').hide() )();

	const fadeOutMoto = ( () => $('#moto').fadeOut(3500) )();

	const fadeInBanner = ( () => $('#banner').fadeIn(2500) )();
});