const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen"); const timeList = document.querySelector("#time-list");
const timerStr = document.querySelector("#time");
const timeSpan = timerStr.querySelector("span");
const board = document.querySelector("#board");
const COLORS = ["indianred", "steelblue", "green", "gold", "moccasin", "darkcyan", "royalblue", "plum"];

let score = 0;

startBtn.addEventListener("click", event => {
    event.preventDefault();
    screens[0].classList.add("up");

});

timeList.addEventListener("click", event => {
    if (event.target.classList.contains) {
        const time = parseInt(event.target.innerText);
        screens[1].classList.add("up");
        startGame(time);
    }
});

board.addEventListener("click", event => {
    if (event.target.classList.contains("circle")) {
        score += 1;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame(time) {
    board.innerHTML = "";
    timerStr.style.display = "";
    const timer = setInterval(() => {
        let currTime = --time;
        if (currTime < 0) {
            clearInterval(timer);
            endGame();
        } else {
            setTime(currTime);
        }
    }, 1000);
    createRandomCircle();
    setTime(time);
}

function setTime(val) {
    timeSpan.innerHTML = `00:${(val < 10) ? '0' : ''}${val}`;
}

function endGame() {
    const reset = document.createElement("h2");
    timerStr.style.display = "none";
    board.style.flexDirection = "column";
    board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`;
    reset.innerText = "Начать заново";
    reset.onclick = () => screens[1].classList.remove("up");
    board.appendChild(reset);
};

function createRandomCircle() {
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const color = getRandomColor();

    circle.classList.add("circle");
    circle.style.backgroundColor = color;
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}