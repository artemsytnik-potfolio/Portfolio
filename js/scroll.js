document.addEventListener('DOMContentLoaded', function () {
	let animItems = document.querySelectorAll('._anim-items')

	if (animItems.length > 0) {
		animItems.forEach(item => item.classList.add('_active'))
		window.addEventListener('scroll', animOnScroll)

		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index]
				const animItemHeight = animItem.offsetHeight
				const animItemOffset = offset(animItem).top
				const animStart = 4

				let animItemPoint = window.innerHeight - animItemHeight / animStart

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart
				}

				if (
					pageYOffset > animItemOffset - animItemPoint &&
					pageYOffset < animItemOffset + animItemHeight
				) {
					animItem.classList.add('_active')
				} else {
					animItem.classList.remove('_active')
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollTop = window.pageYOffset || document.documentElement.scrollTop
			return { top: rect.top + scrollTop }
		}
		// animOnScroll()
		// Function to get offset of an element
	}
})
