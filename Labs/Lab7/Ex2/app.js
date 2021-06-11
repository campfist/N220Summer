//Create variable that calls the input field
let txtbill = document.getElementById("txtbill");

//Create function for when button is clicked
function calculateTip() {

    //Create new bill var and make it to accept numbers only
    let bill = Number(txtbill.value); 

    //Create bill variable
    let tip = bill * .20;

    //Create total variable
    let total = bill + tip;

    //Output the calculated tip and total to the console
    console.log("Tip: $" + tip + ". " + "Total: $" + total);
}