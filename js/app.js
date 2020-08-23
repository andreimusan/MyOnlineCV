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
TweenMax.from("#brand", 1, {
    delay: 3.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#brand", 1, {
    delay: 1.1,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

TweenMax.from("#menu li", 1, {
    delay: 3.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 1.1,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

// title text animation
TweenMax.from("#sub-title", 2, {
    delay: 1.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

// scroll down animation delay
window.addEventListener('load', (event) => {
    setTimeout(() => {
        document.querySelector('#scroll-down').classList.remove('notVisible');
        document.querySelector('#find-more').classList.remove('notVisible');
    }, 3100);
  });

// initialize wow.js
new WOW().init();

// initialize smooth scroll
let scroll = new SmoothScroll('a[href*="#"]');

// display skills percentage and progress bar after scroll down to their position
(function() {

    let tech1s, tech2s, tech3s, tech4s, tech5s;

    function init() {
        tech1s = document.querySelectorAll('.tech-1');
        tech2s = document.querySelectorAll('.tech-2');
        tech3s = document.querySelectorAll('.tech-3');
        tech4s = document.querySelectorAll('.tech-4');
        tech5s = document.querySelectorAll('.tech-5');
        windowHeight = window.innerHeight;
    }
  
    function checkPosition() {

        for (let i = 0; i < tech1s.length; i++) {
            let tech1 = tech1s[i];

            let positionFromTopTech1 = tech1s[i].getBoundingClientRect().top;
      
            if (positionFromTopTech1 - windowHeight <= 0) {
                tech1.classList.add('progress-fill-1');
                tech1.classList.remove('hidden');
            }
        }

        for (let i = 0; i < tech2s.length; i++) {
            let tech2 = tech2s[i];

            let positionFromTopTech2 = tech2s[i].getBoundingClientRect().top;
      
            if (positionFromTopTech2 - windowHeight <= 0) {
                tech2.classList.add('progress-fill-2');
                tech2.classList.remove('hidden');
            }
        }

        for (let i = 0; i < tech3s.length; i++) {
            let tech3 = tech3s[i];

            let positionFromTopTech3 = tech3s[i].getBoundingClientRect().top;
      
            if (positionFromTopTech3 - windowHeight <= 0) {
                tech3.classList.add('progress-fill-3');
                tech3.classList.remove('hidden');
            }
        }

        for (let i = 0; i < tech4s.length; i++) {
            let tech4 = tech4s[i];

            let positionFromTopTech4 = tech4s[i].getBoundingClientRect().top;
      
            if (positionFromTopTech4 - windowHeight <= 0) {
                tech4.classList.add('progress-fill-4');
                tech4.classList.remove('hidden');
            }
        }

        for (let i = 0; i < tech5s.length; i++) {
            let tech5 = tech5s[i];

            let positionFromTopTech5 = tech5s[i].getBoundingClientRect().top;
      
            if (positionFromTopTech5 - windowHeight <= 0) {
                tech5.classList.add('progress-fill-5');
                tech5.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

// show / hide carousel
function showHideCarousel() {
    let btn = document.getElementById('view-projects');
    btn.addEventListener('click', function() {
        document.getElementById('carousel').classList.toggle('change-height');
    });
};
showHideCarousel();

// carousel
function carousel1(){
    let itemClassName = "carousel-photo",
        items = document.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;

    // Set classes
    function setInitialClasses() {
        // Targets the previous, current, and next items. This assumes there are at least three items.
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    // Set event listeners
    function setEventListeners() {
        let next = document.getElementsByClassName('carousel-button-next')[0],
            prev = document.getElementsByClassName('carousel-button-prev')[0];

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    // Next navigation handler
    function moveNext() {
        // Check if moving
        if (!moving) {
            // If it's the last slide, reset to 0, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }
            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Previous navigation handler
    function movePrev() {
        // Check if moving
        if (!moving) {
        // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }
                    
            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    function disableInteraction() {
        // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)
        moving = true;

        // setTimeout runs its function once after the given time
        setTimeout(function(){
            moving = false
        }, 500);
    }

    function moveCarouselTo(slide) {
        // Check if carousel is moving, if not, allow interaction
        if(!moving) {
            // temporarily disable interactivity
            disableInteraction();
            // Update the "old" adjacent slides with "new" ones
            let newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;

            // Test if carousel has more than three items
            if ((totalItems - 1) > 3) {
                // Checks and updates if the new slides are out of bounds
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)){
                    oldNext = 0;
                }

                // Checks and updates if slide is at the beginning/end
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems -1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }

                // Now we've worked out where we are and where we're going, by adding/removing classes we'll trigger the transitions. Reset old next/prev elements to default classes
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                // Add new classes
                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    function initCarousel() {
        setInitialClasses();
        setEventListeners();
        // Set moving to false so that the carousel becomes interactive
        moving = false;
    }

    initCarousel();
};
carousel1();

// send form to email
function submitForm() {
    event.preventDefault();
    
    emailjs.sendForm('gmail', 'andrei_template', '#contact-form', 'user_H7c01DIrLpTuRGbCwvkrq')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Your message was successfully sent! I will get back to you as soon as possible.')
           document.getElementById("contact-form").reset();
        }, function(error) {
           console.log('FAILED...', error);
           alert('Your message was not sent! Please try again.')
        });
}