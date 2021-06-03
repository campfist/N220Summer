//Create dog object and display the dog's name
let myDog = {
    name: "Zuko",
    energy: 10,
    happiness: 10,
    age: 2
};
console.log(myDog.name);

//Create feedDog function and display the dog's energy
function feedDog() {
    myDog.energy = myDog.energy + 5;
    console.log(myDog.energy);
}

//Create playWithDog function and display the dog's happiness
function playWithDog() {
    myDog.happiness = myDog.happiness + 5;
    console.log(myDog.happiness);
} 