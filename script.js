'use strict';

const nav = document.querySelector('nav');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');
const navMenu = document.querySelector('.navMenu');



openNav.addEventListener('click', function(){
    navMenu.style.display = 'flex';
    nav.style.position = 'fixed';
    nav.style.width = '100%';
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
});

closeNav.addEventListener('click', function(){
    navMenu.style.display = 'none';
    nav.style.position = 'relative';
    nav.style.width = '100%';
    openNav.style.display = 'block';
    closeNav.style.display = 'none';
});


// default
window.onload = function() {
    navMenu.style.display = 'none';
    closeNav.style.display = 'none';
};