//Create arrays
var x = [];
var y = [];

//Create Canvas
function setup() {
    createCanvas(800, 600);
}

//Create draw function & determine background color
function draw() {
    background(255);

    //Create if function to setup shift and push method for the x array
    if(x.length > 10) {
        x.shift();
    }
    x.push(mouseX);

    //Create if function to setup shift and push method for the y array
    if(y.length > 10) {
        y.shift();
    }
    y.push(mouseY);

    //Create for loop to draw circle and determine conditions
    for(var a = 0; a < 10; a++) {
        circle(x[a], y[a], 25);
    }
}