//Create variables that call Divs
let dogDiv = document.getElementById("dogDiv");
let dogEnergy = document.getElementById("dogEnergy");
let dogHappiness = document.getElementById("dogHappiness");

//Create dog object and display the dog's name
let myDog = {
    name: "Zuko",
    energy: 10,
    happiness: 10,
    age: 2
};
console.log(myDog.name);

//Display dog's name
dogDiv.innerHTML = "Name: " + myDog.name;

//Create feedDog function and display the dog's energy in the dogEnergy div
function feedDog() {
    myDog.energy = myDog.energy + 5;
    dogEnergy.innerHTML = "Energy: " + myDog.energy;
    console.log(myDog.energy);
}

//Create playWithDog function and display the dog's happiness in the dogHappiness div
function playWithDog() {
    myDog.happiness = myDog.happiness + 5; 
    dogHappiness.innerHTML = "Happiness: " + myDog.happiness;
    console.log(myDog.happiness);
}