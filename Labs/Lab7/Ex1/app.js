//Create variable that calls the input field
let txtName = document.querySelector("#txtName");

//Create function for when the button is clicked  
function sayHello() {

    //Output the phrase to the console
    console.log("Hello " + txtName.value);
}