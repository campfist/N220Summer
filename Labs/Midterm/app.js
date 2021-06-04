var circs = [100, 100, 20, 300, 200, 20];

function setup() {
    createCanvas(800, 600);
    //Store mouseX and mouseY location in a for loop that creates a new circle after every 30 frames
}

function draw() {
    //Do not understand what the last condition for the for loop should be
    //Should I use frameRate function to create this new circle
    for(var i = 0; i < 31; i++) {

        circle(circs[0], circs[1], circs[2] += .1);
        circle(circs[3], circs[4], circs[5] += .1);

        if(frameRate() < 31){
            circle(mouseX, mouseY, 20);
            
        }
    }
}