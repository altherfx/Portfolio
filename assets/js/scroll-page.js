function smoothScrollTo(element) {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2,
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));
            smoothScrollTo(target);
        });
    });
});