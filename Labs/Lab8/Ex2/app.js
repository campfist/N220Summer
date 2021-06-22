//Create Canvas
function setup() {
    createCanvas(800, 600);
}

//Setup draw function
function draw() {

    //Create arguments for draw stoplight function
    drawStopLight(["green", "yellow", "red"], 400, 150, 25);

}

//Create another function for drawing the stoplight and looping through the three colors
function drawStopLight(lightColor, x, y, size) {

    //Created for loop to loop through colors array and draw the specified amount of circles
    for(var i = 0; i < lightColor.length; i++) {

        //Trying to get each circle to fill with the colors from the array I created
        fill(lightColor[i]);
        console.log(lightColor[i]);

        //Drawing the circle with the conditions from the drawstopLight function listed above
        circle(x, y * i + 25, size);
    }
}