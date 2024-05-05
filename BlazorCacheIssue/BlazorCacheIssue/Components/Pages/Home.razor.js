// Called when the script first gets loaded on the page.
export function onLoad() {
    console.log("home load");
}

export function onUpdate() {
    console.log("home");
    AnimatedScrolling();

    window.addEventListener("scroll", function () {
        console.log("home3");

        AnimatedScrolling();
    });
}

function AnimatedScrolling() {
    console.log("home scrolling");

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;

        var revealTop = reveals[i].getBoundingClientRect().top;

        var revealspoint = 150;

        if (revealTop < windowHeight - revealspoint) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
