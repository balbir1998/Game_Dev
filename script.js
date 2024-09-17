let nav = document.querySelector(".nav-container")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add("scroll", "max-width");

    } else {
        nav.classList.remove("scroll", "max-width");
    }
}