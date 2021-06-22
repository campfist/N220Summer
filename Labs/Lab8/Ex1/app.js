//Create variable to call input field and div
let number = document.getElementById("number");
let result = document.getElementById("result");

//Create function for the button
function divide() {

    let value = Number(number.value);
    //console.log(number.value);

    let divisible = value % 7;
    //console.log(divisible);

    return value % 7 == 0;
}

//Create function to return wanted values
function check() {

    //console.log(divide());

    if(divide()) {
        result.innerHTML = "True";
    } else {
        result.innerHTML = "False";
    }
}