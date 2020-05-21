'use strict';

const indexOfChild = (child) => Array.from(child.parentNode.children).indexOf(child);

window.onload = () => {
	const slides = document.querySelector('.slides');
	const slidesCount = slides.childElementCount;

	this.slide = (direction) => {
		const currentSlideIndex = indexOfChild(document.querySelector('.active'));
		let nextSlideIndex = currentSlideIndex + direction;

		nextSlideIndex > (slidesCount - 1) && (nextSlideIndex = 0);
		nextSlideIndex < 0 && (nextSlideIndex = slidesCount - 1);

		slides.children[currentSlideIndex].classList.remove('active');
		slides.children[nextSlideIndex].classList.add('active');
	};
};