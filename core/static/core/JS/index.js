// Video Slider navigation

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".home-slide");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })

    slides.forEach((slide) => {
        slide.classList.remove("active");
    })


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
};

// let currentSlide = 0;
// setInterval(() => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   sliderNav(currentSlide);
// }, 4000);

btns.forEach((btns, i) => {
    btns.addEventListener("click", () => {
        sliderNav(i);
    });
});