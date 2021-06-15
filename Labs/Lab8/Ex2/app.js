function setup() {
    createCanvas(800, 600);
}

function draw() {

    drawStopLight(["green", "yellow", "red"], 400, 300, 25);

}

function drawStopLight(lightColor, x, y, size) {

    fill(lightColor++);

    for(var i = 1; i < 4; i++) {
        circle(x, y, size);
    }
}