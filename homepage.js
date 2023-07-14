
'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})
var offerHook5 = document.querySelector ('.offer-hook-5');
var offerHook4 = document.querySelector ('.offer-hook-4');
offerHook5.addEventListener('mouseover', function(){
    offerHook5.style.display = 'none';
    offerHook4.style.display = 'block';
});
offerHook4.addEventListener('mouseout',function(){
    offerHook5.style.display = 'block';
    offerHook4.style.display = 'none';
})

