const burgerMenu = document.querySelector('.burger-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const popup_basket = document.querySelector('.busket');
// busket


burgerMenu.addEventListener('click', () => {
    menuOverlay.classList.toggle('show-menu');
});

menuOverlay.addEventListener('click', () => {
    menuOverlay.classList.remove('show-menu');
});

// const popupBasket


