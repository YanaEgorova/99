const menuBtn = document.querySelector('.js_menu__btn');
const menu = document.querySelector('.js_menu');
let menuToggle = true;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(menuToggle) {
        document.body.classList.add('menu__active');
        menuToggle = false;
    } else {
        document.body.classList.remove('menu__active');
        menuToggle = true;
    }
}