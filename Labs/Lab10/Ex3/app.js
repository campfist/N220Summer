//Create variable that calls divs and buttons
let newEl = document.getElementsByClassName("answers");
let result = document.getElementById("result");

//Add event listener through for loop to assign response values to each button and call the click element
for(var i = 0; i < newEl.length; i++) {

    //Add event listener 
    newEl[i].addEventListener("click", itsClicked);
}

//Create function for onclick
function itsClicked() {

    //Have the div display the proper color
    result.innerHTML = this.getAttribute("data-response");
}