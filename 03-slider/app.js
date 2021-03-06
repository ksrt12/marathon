const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.childElementCount;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

document.body.addEventListener('wheel', checkScrollDirection);
document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
        changeSlide(true);
    } else if (event.key === "ArrowDown") {
        changeSlide(false);
    }
});
upBtn.addEventListener("click", () => changeSlide(true));
downBtn.addEventListener("click", () => changeSlide(false));

function changeSlide(up) {
    if (!up) {
        activeSlideIndex += 1;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else {
        activeSlideIndex -= 1;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        changeSlide(true);
    } else {
        changeSlide(false);
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}