'use strict';

const navBtn = document.querySelectorAll('.nav-link');
const sectionView = document.querySelectorAll('.section-view');

const changeContent = (array, value) => {
	array.forEach((elem) => {
		if (elem.dataset.tabsField === value) {
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}
	});
};

navBtn.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		const tabValue = btn.dataset.tabsHandler;		

		changeContent(sectionView, tabValue);

		navBtn.forEach((btn) => {
			if (btn === event.target) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}
		});
	});
});
