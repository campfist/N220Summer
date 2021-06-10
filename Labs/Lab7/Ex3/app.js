//Create variables to call input fields
let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");

//Create variable that calls the div
let status = document.getElementById("status");

//Create function that verifies the Username and Password fields 
function verify() {

    //Create username and password variables
    let username = txtUsername.value; 
    let password = txtPassword.value; 

    //Create if/else statement that checks the values entered in the input fields and outputs a message in the div
    if((username == "Username") && (password == "Password")) {
        status.innerHTML = "Success";
    } else {
        status.innerHTML = "Wrong Information";
    }
}