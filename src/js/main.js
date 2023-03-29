import '../scss/styles.scss';
import './vendor/modernizr-3.12.0.min';

import { initHeaderAppearing, initHeaderColorChange, initMenu, initModal, initSmoothScroll, initStickedButton } from './plugins';

import lightGallery from './vendor/lightgallery.min';

initMenu();
initSmoothScroll();
initHeaderColorChange();
initStickedButton();
initModal();
initHeaderAppearing();

lightGallery(document.querySelector('#gallery'), {
	captions: false,
	lastRow: 'hide',
	rowHeight: 180,
	margins: 5,
	zoomFromOrigin: false,
	toggleThumb: true,
	allowMediaOverlap: true,
	animateThumb: false,
});
