const search = document.querySelector('#search');
const trigger = document.querySelector('.find');
const burger = document.querySelector('.burger_button');
const nav = document.querySelector('.nav__wrapper');

trigger.addEventListener('click', function () {
    search.classList.toggle('input__active');
})

burger.addEventListener('click', toggleNav)

function toggleNav() {
    const status = nav.getAttribute('aria-expanded') === 'true' || false;
    const isOpen = burger.dataset.opened == 'true' || false;
    burger.dataset.opened = !isOpen
    nav.setAttribute('aria-expanded', !status)
}

nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName == 'A' || target.tagName == 'BUTTON') {
        return
    } else {
        nav.setAttribute('aria-expanded', false)
    }
})