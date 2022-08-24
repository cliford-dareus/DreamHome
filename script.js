const menuBtn = document.querySelector(".menu_toggle");
const closeBtn = document.querySelector('.nav_close_btn');
const menu = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('mobile_menu');
    console.log('clicked')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('mobile_menu')
})