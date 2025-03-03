document.addEventListener('DOMContentLoaded', function () {
	new Swiper('.image-slider', {
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		autoHeight: true,
		effect: 'fade',

		fadeEffect: {
			crossFade: true,
		},
	})
})
