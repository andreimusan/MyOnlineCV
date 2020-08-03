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
    delay: 3.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 3.1,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

// title text animation
TweenMax.from("#sub-title", 2, {
    delay: 6.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

// scroll down animation delay
window.addEventListener('load', (event) => {
    setTimeout(() => {
        document.querySelector('#scroll-down').classList.remove('notVisible');
    }, 3100);
  });

// initialize wow.js
new WOW().init();

// initialize smooth scroll
let scroll = new SmoothScroll('a[href*="#"]');

// // send form to email
// const sendBtn = document.getElementById('contact-submit');
// sendBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     const contactName = document.getElementById('contact-name').value;
//     const contactEmail = document.getElementById('contact-email').value;
//     const contactMessage = document.getElementById('contact-message').value;
//     console.log(contactName, contactEmail, contactMessage);

//     let templateParams = {
//         contactName: contactName,
//         contactEmail: contactEmail,
//         contactMessage: contactMessage
//     };
    
    
//     emailjs.sendForm('gmail', 'template_oSN3FJxX', templateParams)
//         .then(function(response) {
//            console.log('SUCCESS!', response.status, response.text);
//         }, function(error) {
//            console.log('FAILED...', error);
//         });
// });