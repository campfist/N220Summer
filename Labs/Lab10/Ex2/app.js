//Create global color values
var r = 0;
var g = 0;
var b = 0;

//Create variables to call elements
let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");
let bt4 = document.getElementById("bt4");
let bt5 = document.getElementById("bt5");
let bt6 = document.getElementById("bt6");
let bt7 = document.getElementById("bt7");
let bt8 = document.getElementById("bt8");
let bt9 = document.getElementById("bt9");

//Create variable to call results div & color div
var result = document.getElementById("result");
var color = document.getElementById("color");

//Add event listeners for all buttons
bt1.addEventListener("click", itsClicked1);
bt2.addEventListener("click", itsClicked2);
bt3.addEventListener("click", itsClicked3);
bt4.addEventListener("click", itsClicked4);
bt5.addEventListener("click", itsClicked5);
bt6.addEventListener("click", itsClicked6);
bt7.addEventListener("click", itsClicked7);
bt8.addEventListener("click", itsClicked8);
bt9.addEventListener("click", itsClicked9);

//Create each function for each event listener and properly style the results div and display the colors defined div 
function itsClicked1(event) {
    r = r + 1;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked2(event) {
    r = r + 5;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked3(event) {
    r = r + 10;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked4(event) {
    g = g + 1;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked5(event) {
    g = g + 5;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked6(event) {
    g = g + 10;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked7(event) {
    b = b + 1;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked8(event) {
    b = b + 5;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}
function itsClicked9(event) {
    b = b + 10;
    result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    color.innerHTML = `${r},${g},${b}`;
}