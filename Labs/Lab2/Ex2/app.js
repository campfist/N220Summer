//Setup canvas
function setup() {
    createCanvas(400, 300);
}

//Draw a circle where the mouse is at using variables mouseX & mouseY
//Use an if statement to draw the circle in red on the right side of canvas 
//Use an if statement to draw the circle in blue on the left side of the canvas
function draw() {
    background(0);

    if(mouseX < 200) {
        fill('blue');
        circle(mouseX, mouseY, 50);
    } 
    
    if(mouseX > 200) {
        fill('red');
        circle(mouseX, mouseY, 50);
    }
}