let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const textAnimation = document.getElementById("home-link");
let animationDuration = 4;

function startAnimation() {
    textAnimation.style.opacity = 1;
    textAnimation.style.transition = `opacity ${animationDuration}s linear`;

    setTimeout(function() {
        textAnimation.style.opacity = 0;
    }, animationDuration * 1000);
}

startAnimation();

setInterval(startAnimation, animationDuration * 1000 * 2);