//Create global variable
let x = 0;

//Output a number to the console every draw call of P5
function draw() {
    x = x + 1;
    console.log(x)
}