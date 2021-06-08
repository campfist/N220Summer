//Create new div element
let dvSquare = document.getElementById("div");

//Set width and height
var width = 100;
var height = 100;

//Set background color
dvSquare.style.background = "#00FF00";

//Set div element width and height
dvSquare.style.width = width + "px";
dvSquare.style.height = height + "px";

//Setup increase div function 
function increaseSq() {
    dvSquare.style.width = (width + 0.1) + "px";
    dvSquare.style.height = (height + 0.1) + "px";
}