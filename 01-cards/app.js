function plugSlides(activeSlide = 1) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    const clearActiveClasses = () => {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });
    };

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();
            slide.classList.add("active");
        });
    }
}

plugSlides();