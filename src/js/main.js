'use strict';

console.log('>> Ready :)');

const navbar = document.querySelector('.main-navbar');
const toggle = document.querySelector('.toggle-btn');

toggle.addEventListener('click', () => {
    navbar
        .classList
        .toggle('is-open');
    toggle
        .querySelector('i')
        .classList
        .toggle('fa-times');
} );