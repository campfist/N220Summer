//Create variable that calls div
let newEl = document.getElementsByClassName("dvSquares");

//Add event listener through for loop to assign color values to each square and call the click element
for(var i = 0; i < newEl.length; i++) {

    //Add event listener
    newEl[i].addEventListener("click", itsClicked);
}

//Create function for when div is clicked
function itsClicked() {

    //Use the this method to retrieve the desired attribute
    this.style.backgroundColor = this.getAttribute("data-color");
}


// //Create variable that calls divs
// let newEl = document.getElementById("oneSquare"); 

// //Add event listener for onclick function
// newEl.addEventListener("click", itsClicked);

// //Create function for onclick and have it display the data-color defined in the div
// function itsClicked(event) {

//     console.log(event.target);

//     //console.log(newEl);

//     //newEl.style.backgroundColor = "red";

//     event.target.style.backgroundColor = "data-color";

//     console.log("data-color");
// }

