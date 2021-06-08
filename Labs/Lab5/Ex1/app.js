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
function increaseDiv() {
    dvSquare.style.width = (width) + "px";
    dvSquare.style.height = (height) + "px";

    width = width * 1.1;
    height = height * 1.1;

    console.log(width);
}