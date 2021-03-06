const navbar = document.querySelector('nav')
const hamburger = document.querySelector('.main-page__hamburger');
const hamburgerMenu = document.querySelector('.main-page__hamburger-menu');


hamburger.addEventListener('click', () => {
	navbar.classList.toggle('change');
})