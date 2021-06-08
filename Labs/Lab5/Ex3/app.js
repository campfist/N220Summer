//Create a new element
let newEl = document.getElementById("square");

//Set background color
newEl.style.backgroundColor = "#0000FF";

//Set both the height and the width
newEl.style.width = "100px";
newEl.style.height = "100px";

//Create functions for the onmouseover and onmouseout 
function over() {
    newEl.style.backgroundColor = "#000000";
}
function out() {
    newEl.style.backgroundColor = "0000FF";
}