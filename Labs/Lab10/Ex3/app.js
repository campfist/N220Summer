//Create variable that calls divs and buttons
let newEl = document.getElementsByClassName("answers");
let result = document.getElementById("result");

//Add event listener through for loop to assign response values to each button and call the click element
for(var i = 0; i < newEl.length; i++) {
    newEl[i].addEventListener("click", itsClicked);
}

//Create function for onclick
function itsClicked() {
    result.innerHTML = this.getAttribute("data-response");
}