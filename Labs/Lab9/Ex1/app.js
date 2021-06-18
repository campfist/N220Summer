//Create variable to call input field
let numbersList = document.getElementById("numbersList");

//Create divs to display the average and sum of the numbers written in the input field
let totalNumber = document.getElementById("totalNumber");
let averageNumber = document.getElementById("averageNumber");

//Create function for calculating the average
function average() {

    //Create variable for numbers written in the input field
    var stringVals = numbersList.value;

    //Create myArray variable
    let myArray = stringVals.split(",");

    //Create both the sum and average variables
    let sum = 0;
    let avg = 0;

    //Create for loop to calculate the sum of numbers entered in the input field
    for(let i = 0; i < myArray.length; i++) {
        sum += Number(myArray[i]);
    }

    //Calculate the average for the numbers entered in the input field and display them on the page in the correct divs
    avg = sum/myArray.length;
    console.log(avg);    
    totalNumber.innerHTML = "Sum: " + sum;    
    averageNumber.innerHTML = "Average: " + avg;
}