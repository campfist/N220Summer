//Create object and define all the properties of the object
let myCircle = {
    x: 50,
    y: 40,
    radius: 25,
    color: 'purple' 
};

//Create canvas
function setup() {
    createCanvas(800, 600);
}

//Create draw function and have it display properties from the object created above
//adjust one of the properties from the object created above 
function draw() {
    fill(myCircle.color);
    myCircle.x += 1;
    circle(myCircle.x, myCircle.y, myCircle.radius);
}