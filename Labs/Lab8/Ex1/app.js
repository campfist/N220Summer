//Create variable to call input field and div
let number = document.getElementById("number");
let result = document.getElementById("result");

//Create function for the button
function divide() {

    //Create variable for value called from the input field
    let value = Number(number.value);
    //console.log(number.value);

    //Create variable for taking the value entered in the input field divided by 7
    let divisible = value % 7;
    //console.log(divisible);

    //Return 0 if the value is divisible by 7
    return value % 7 == 0;
}

//Create function to return wanted values
function check() {

    //console.log(divide());

    //Create an if/else statement to display true if the value is divisible by 7 or false if the value isn't divisible by 7
    if(divide()) {
        result.innerHTML = "True";
    } else {
        result.innerHTML = "False";
    }
}