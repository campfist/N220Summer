//Create variable calling div
let create = document.getElementById("create");

//Create object given to us by Travis
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];

//Create for loop and determine conditions for creating new elements
for (let i = 0; i < objects.length; i++) {

    //Create new Element
    let newEl = document.createElement("div");

    //Call styling options from the objects created above
    newEl.style.backgroundColor = objects[i].color;
    newEl.style.height = objects[i].height + "px";
    newEl.style.width = objects[i].width + "px";
    create.appendChild(newEl);
}