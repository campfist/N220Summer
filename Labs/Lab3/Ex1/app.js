//Create canvas
function setup() {
    createCanvas(800, 600);
}

//Setup draw function & determine background color & determine circle color
function draw() {
    background(100);
    noFill();

    //Create for loop and determine conditions
    for(var x = 0; x < 50; x++) {
        circle(400, 300, x * 5);
    }
}