let swiper1, swiper2, swiper3, swiper4

document.addEventListener('DOMContentLoaded', function () {
	// Инициализация слайдера для swiper1
	swiper1 = new Swiper('#swiper1', {
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
	})

	// Инициализация слайдера для swiper2
	swiper2 = new Swiper('#swiper2', {
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
	})
})

function openSwiper(position) {
	// Скрыть оба слайдера
	document.getElementById('swiper1').style.display = 'none'
	document.getElementById('swiper2').style.display = 'none'

	// Показать нужный слайдер в зависимости от позиции
	if (position === 1) {
		document.getElementById('swiper1').style.display = 'block'
	} else if (position === 2) {
		document.getElementById('swiper2').style.display = 'block'
	} else if (position === 3) {
		document.getElementById('swiper3').style.display = 'block'
	} else if (position === 4) {
		document.getElementById('swiper4').style.display = 'block'
	}
}
