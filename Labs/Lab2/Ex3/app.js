//Create global variables
let x = 1;

//Create canvas
function setup() {
    createCanvas(800, 600);
}

//Draw the circle in the center of the canvas
//Use an if statement to display the conditions for increasing the circle diameter 
function draw() {
    background(255);
    if(x > 200) {
        x = 1;
    } 

    stroke('black');
    fill('red');
    circle(400, 300, x++);
}
