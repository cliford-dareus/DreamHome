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

const controllerw = new ScrollMagic.Controller();
const tl = new TimelineMax();

tl.fromTo(
    '.about-us-shape',
    1,
    {x: '0%', scale: .4},
    {x: '0%',scale: 1.5, ease: Linear.easeNone},
    '+=0.1'
)

new ScrollMagic.Scene({
    triggerElement: '.about-us',
    triggerHook: 0,
    duration: '200%',
})
    .setTween(tl)
    .addIndicators({
        colorTrigger: "red",
        colorStart : "red",
        colorEnd: 'red',
        indent: 40
    })
    .addTo(controllerw)



