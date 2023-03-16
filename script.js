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

function halfScroll(){
    const controller = new ScrollMagic.Controller();
    console.log(controller)
    
    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.about-us',
        triggerHook: 0
    })
    .setPin('.about-us')
    .addIndicators({
        colorTrigger: "red",
        colorStart : "green",
        colorEnd: 'blue',
    })
    .addTo(controller);
}

halfScroll();


