const search = document.querySelector('#search');
const trigger = document.querySelector('.find');
const burger = document.querySelector('.burger_button');
const nav = document.querySelector('.nav');

trigger.addEventListener('click', function () {
    console.log('click');
    search.classList.toggle('input__active');
})

burger.addEventListener('click', function () {
    nav.classList.toggle('open')
})