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
// navigation ends here

// progress bar on scroll
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// nav animation
TweenMax.from("#menu li", 1, {
    delay: 8.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 8.1,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

// title text animation
TweenMax.from("#sub-title", 3, {
    delay: 6.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

// scroll down animation delay
window.addEventListener('load', (event) => {
    setTimeout(() => {
        document.querySelector('#scroll-down').classList.remove('notVisible');
    }, 9100);
  });

// initialize wow.js
new WOW().init();

// initialize smooth scroll
let scroll = new SmoothScroll('a[href*="#"]');


const title = document.querySelectorAll('#title path');

for (let i = 0; i < title.length; i++) {
    console.log(`Letter ${i} is ${title[i].getTotalLength()}`);
}