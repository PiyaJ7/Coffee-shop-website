let mybutton = document.getElementById("myBtn"); const

    textAnimation = document.getElementById("home-link");
let animationDuration = 4;

function startAnimation() {
    textAnimation.style.opacity = 1;
    textAnimation.style.transition = `opacity ${animationDuration}s linear`;

    setTimeout(function () {
        textAnimation.style.opacity = 0;
    }, animationDuration * 1000);
}

startAnimation();

setInterval(startAnimation, animationDuration * 1000 * 2);