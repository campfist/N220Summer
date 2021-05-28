//Create array
var brick = [];

//Create Canvas
function setup() {
    createCanvas(800, 600);
}

//Create draw function & set background color
function draw() {
    background(255);

    //Create for loop
    for(var x = 0; x < brick.length; x++) {
        let bricks = brick[x];

        //Create the bricks & determine colors & allow for more bricks to be created & determine falling y position
        fill('red');
        rect(bricks[0], bricks[1], 25, 20);
        bricks[1] += 1;
    }
}

//Create function for when user presses mouse to create brick
function mousePressed() {
    brick.push([mouseX, mouseY, random()]);
}