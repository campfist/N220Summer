//Create global variables
var x = 0;
var y = 0;

//Create canvas
function setup() {
    createCanvas(800, 600);
}

//Setup draw function & determine background color
function draw() {
    background(255);

    //Create for loop & determine conditions
    for(var a = 0; a < 4; a++) {

        //Create another for loop to determine how many red squares will be placed in each row
        for(var b = 0; b <= a; b++){
            fill('red');
            square(x, y, 25);
        }
    }
}