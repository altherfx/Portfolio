const imgs = document.getElementById("carrossel_img");
const imgWidth = imgs.offsetWidth;
const imgCount = imgs.querySelectorAll("img").length;
let idx = 0;

function carrossel() {
    idx++;

    imgs.style.transition = "transform 0.5s ease-in-out";

    imgs.style.transform = `translateX(${-idx * imgWidth}px)`;

    setTimeout(() => {
        imgs.appendChild(imgs.firstElementChild);
        imgs.style.transition = "none";
        imgs.style.transform = `translateX(0)`;
        idx = 0;
    }, 500);
}

setInterval(carrossel, 1800);
