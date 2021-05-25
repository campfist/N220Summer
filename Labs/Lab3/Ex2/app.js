//Declare global variables
y = 300;

//Create canvas
function setup() {
    createCanvas(800, 600);
}

//Setup draw function & determine background color & 
function draw() {
    background(255);

    //draw 25 black circles
    for(var x = 0; x < 25; x++) {

        //draw a blue square if the iterand is divisible by 3 AND 5
        if(x % 3 == 0 && x % 5 == 0) {
            fill('blue');
            square(x, y, 25);
        } 
        
        //draw a green square if the iterand is divisible by 5
        else if(x % 5 === 0) {
            fill('green');
            square(x, y, 25)
        }

        //draw a purple circle if the iterand is divisible by 3
        else if(x % 3 === 0) {
            fill('purple');
            circle(x, y, 25);
        }

        //Otherwise draw black circle
        else {
            fill('black');
            circle(x, y, 25);
        }
    }
}