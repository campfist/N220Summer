//Create array
let colors = ["#F2EE6D", "#1411C2", "#C211B6"]

//Create canvas
function setup() {
    createCanvas(800, 600);
}

//Create draw function
function draw() {

    //Create for loop to create shape and determine conditions
    for(var x = 0; x < colors.length; x++) {

        //Set fill to call values from array
        fill(colors[x]);
        rect(200 * x, 100, 199, 100)
    }
}