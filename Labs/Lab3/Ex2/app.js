//Declare global variables
var y = 300;

//Create canvas
function setup() {
    createCanvas(2100, 600);
}

//Setup draw function & determine background color & 
function draw() {
    background(255);

    //draw 25 black circles
    for(let x = 1; x < 26; x++) {

        //draw a blue square if the iterand is divisible by 3 AND 5
        if(x % 3 == 0 && x % 5 == 0) {
            fill('blue');
            square(x * 50, y, 25);
        } 
        
        //draw a green square if the iterand is divisible by 5
        else if(x % 5 === 0) {
            fill('green');
            square(x * 50, y, 25)
        }

        //draw a purple circle if the iterand is divisible by 3
        else if(x % 3 === 0) {
            fill('purple');
            circle(x * 50, y, 25);
        }

        //Otherwise draw black circle
        else {
            fill('black');
            circle(x * 50, y, 25);
        }
    }
}