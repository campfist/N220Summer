//Setup for loop and determine conditions
for(var x = 0; x < 101; x++) {

    //Create new element for divs
    let newEl = document.createElement("div");

    //Set the width & height & have the element float left
    newEl.style.width = "20px";
    newEl.style.height = "20px";
    newEl.style.float = "left";

    //Create background color function
    newEl.style.backgroundColor = divColor();

    document.body.appendChild(newEl);
}

//Setup backgroundcolor function
function divColor() {
    var c = Math.floor(Math.random())
}