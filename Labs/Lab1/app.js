//Create two variables 
let x = 'blue';
let y = 200;

//Create a canvas
function setup() {
    createCanvas(800, 600);
}

//Make a design
function draw() {
    fill(x);
    circle(y, y, 25);

    strokeWeight(15);
    stroke(x);
    noFill();
    circle(y, y, 60);

    strokeWeight(8);
    stroke(x);
    noFill();
    square(125, 125, 150, 20, 20, 20, 20);
}