let swiper1, swiper2, swiper3, swiper4;

document.addEventListener('DOMContentLoaded', function () {
	swiper1 = new Swiper('.swiper', { // Убедитесь, что селектор соответствует разметке
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		autoHeight: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
	});
});
