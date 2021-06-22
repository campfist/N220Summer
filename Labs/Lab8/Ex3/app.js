// //Create variables for functions when style is changed
// let dv1 = changeStyle("blue", 25);
// let dv2 = changeStyle2("blue", 30);
// let dv3 = changeStyle3("blue", 35);

//Create variable that defines an argument for the onclick function
//let dvs1 = changeStyle("blue", 25);


// //Create variable to call over class of divs
// let dvs = document.getElementsByClassName("dvs");

//Create variables for calling divs
let sq1 = document.getElementById("dv1");
let sq2 = document.getElementById("dv2");
let sq3 = document.getElementById("dv3");

// sq1.style.backgroundColor = "blue";
// sq1.style.width = 25 + "px";
// console.log("sq1");

//Create functions for changing background color and width of each div
function changeStyle(aDiv) {
    // let color = backgroundColor;
    // let w = width;

    //Create styling for divs
    aDiv.style.backgroundColor = "blue";
    aDiv.style.width = 25 + "px";

    // sq1.style.backgroundColor = color;
    // sq1.style.width = w;
}

//Create each function to modify the elements on the page
function changeColor1() {
    changeStyle(sq1);

}

function changeColor2() {
    changeStyle(sq2);
    
}

function changeColor3() {
    changeStyle(sq3);
    
}