const initMenu = () => {
	const menuOpener = document.getElementById('menu-opener');
	const menuCloser = document.getElementById('menu-closer');
	const menuWrapper = document.querySelector('.menu__wrapper');
	const header = document.querySelector('header');
	//const contactMeLink = document.querySelector('a[href="#contact-me"]');
	const body = document.body;

	menuOpener.addEventListener('click', () => {
		menuOpener.classList.add('hidden');
		menuWrapper.classList.add('open');
		header.classList.remove('header-hidden');
		body.classList.add('no-scroll');
	});

	menuCloser.addEventListener('click', () => {
		menuOpener.classList.remove('hidden');
		menuWrapper.classList.remove('open');
		body.classList.remove('no-scroll');
	});

	/* if (contactMeLink) {
		contactMeLink.addEventListener('click', () => {
			menuWrapper.classList.remove('open');
			body.classList.remove('no-scroll');
		});
	} */
};

const initSmoothScroll = () => {
	const scrollToElement = (elementId) => {
		const targetElement = document.querySelector(elementId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
	};

	const handleAnchorClick = (e) => {
		const targetElementId = e.currentTarget.getAttribute('href');
		if (targetElementId.startsWith('#')) {
			e.preventDefault();
			scrollToElement(targetElementId);
		}
	};

	const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

	anchorLinks.forEach((link) => {
		link.addEventListener('click', handleAnchorClick);
	});
};

const initHeaderColorChange = () => {
	const menu = document.querySelector('#menu-opener');
	const windowHeight = window.innerHeight;

	const handleScroll = () => {
		if (window.scrollY >= windowHeight) {
			menu.classList.add('black');
		} else {
			menu.classList.remove('black');
		}
	};

	window.addEventListener('scroll', handleScroll);
};

const initHeaderAppearing = () => {
let lastScrollTop = 0;
const nav = document.getElementById('menu');

window.addEventListener('scroll', () => {
	const currentScrollTop = window.pageYOffset;
	const isScrollingDown = currentScrollTop > lastScrollTop;

	if (window.innerWidth >= 980) {
			if (isScrollingDown) {
				nav.classList.remove('animate__fadeInLeft');
				nav.classList.add('animate__fadeOut');
				setTimeout(() => {
					nav.style.display = 'none';
				}, 500); // Match the animation duration
			} else {
				nav.style.display = 'block';
				nav.classList.remove('animate__fadeOut');
				nav.classList.add('animate__fadeIn');
			}
		}

		lastScrollTop = currentScrollTop;
	});
};

const initStickedButton = () => {
	const div = document.querySelector('.house-agent');
	const button = document.querySelector('#contact-agent');
	const windowHeight = window.innerHeight;

	const handleScroll = () => {
		if (window.scrollY >= windowHeight) {
			button.classList.add('sticked-button');
			div.classList.add('sticked-to-bottom');
		} else {
			button.classList.remove('sticked-button');
			div.classList.remove('sticked-to-bottom');
		}
	};

	window.addEventListener('scroll', handleScroll);
};

const initModal = () => {
	const body = document.body;
	const openModalButtons = document.querySelectorAll('[data-modal-target]');
	const closeModalButtons = document.querySelectorAll('[data-close-button]');
	const overlay = document.querySelector('#overlay');

	openModalButtons.forEach(button => {
		button.addEventListener('click', () => {
			const modal = document.querySelector(button.dataset.modalTarget);
			openModal(modal);
		})
	});

	overlay.addEventListener('click', () => {
		const modals = document.querySelectorAll('.modal.active');
		modals.forEach(modal => {
			closeModal(modal);
		})
	});

	closeModalButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const modal = button.closest('.modal');
			closeModal(modal);
		});
	});

	function openModal(modal) {
		if (modal == null) return;
		body.classList.add('no-scroll');
		modal.classList.add('active');
		overlay.classList.add('active');
	}

	function closeModal(modal) {
		if (modal == null) return;
		body.classList.remove('no-scroll');
		modal.classList.remove('active');
		overlay.classList.remove('active');
	}
}

export { initMenu, initSmoothScroll, initHeaderColorChange, initStickedButton, initModal, initHeaderAppearing };