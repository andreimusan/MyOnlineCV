// navigation starts here
const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', function (event) {
    console.log(event.target.parentElement)
    menuBtn.classList.toggle('on');
    menuBtn.classList.toggle('open');
    document.querySelector('#resize').classList.toggle('active');
});

const menuItem = document.querySelectorAll('#resize ul li a');
menuItem.forEach(elem => elem.addEventListener('click', function (event) {
    console.log(event.target.parentElement)
    event.target.parentElement.classList.toggle('on');
    menuBtn.classList.toggle('open');
    document.querySelector('#resize').classList.toggle('active');
}));

// progress bar on scroll
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// navigation ends here

// nav animation

TweenMax.from("#brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

// nav animation ends

// initialize wow.js
new WOW().init();

// initialize smooth scroll
let scroll = new SmoothScroll('a[href*="#"]');