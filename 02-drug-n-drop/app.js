const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener('dragstart', drugstart);
item.addEventListener("dragend", drugend);

placeholders.forEach(placeholder => {
    placeholder.addEventListener("dragover", dragover);
    placeholder.addEventListener("dragenter", dragenter);
    placeholder.addEventListener("dragleave", dragleave);
    placeholder.addEventListener("drop", dragdrop);
});

function drugstart(event) {
    event.target.classList.add("hold");
    setTimeout(() => event.target.classList.add("hide"), 0);
}

function drugend(event) {
    event.target.className = "item";
    leave(false);
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add("hovered");
}

function dragleave(event) {
    leave(true);
    event.target.classList.remove("hovered");
}

function dragdrop(event) {
    dragleave(event);
    leave(false);
    event.target.append(item);
}

function leave(leaved) {
    placeholders.forEach(placeholder => {
        if (leaved) {
            placeholder.classList.add("leaved");
        } else {
            placeholder.classList.remove("leaved");
        }
    });
}