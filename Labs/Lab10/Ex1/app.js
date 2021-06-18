let newEl = document.getElementById("oneSquare"); 

newEl.addEventListener("click", itsClicked);

function itsClicked(event) {
    event.target.style.backgroundcolor = newEl.dataset.color;
}