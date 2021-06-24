//Create an array for all the values that a card div will hold
//How do I randomly assign each div a number?
//How do I get them to move around every time?
//Remember it's a 4x4 grid so there needs to be 16 total values (two of each number)
//Create another array to store chosen card ids
//Make sure array is empty
//Create another empty array to store values of chosen cards
//Make sure it is empty
//Essentially just variables for card functions
var memoryArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var memoryValues = [];
var cardNumbers = [];

//Also make sure to create variable that calls over all the vards by their class name
let cards = document.getElementsByClassName("cards");

//Create variable to show how many cards have been flipped 
var flippedCards = 0;

//Create a for loop to loop through all the cards
//Also add an event listener so the cards know when to flip
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
}

//Create shuffle function to randomly assign cards numbers
function shuffle() {  
        x = Math.floor(Math.random());
    }

//Create flipcard function to flip the card and store the number of the flipped card in the designated array
function flipCard(cardID, value) {

    //Create an if/else block to determine what the correctly matched cards will return
    //Set the conditions of the if statement to to return the cardID value if true
    if(cardID < memoryValues) {
        cardID = value;
        //Determine what this nested if statement should return
        //Do I need another if statement here? 
        if (memoryValues.length == 0) {
        } else if (memoryValues.length == 1) {
            if (memoryValues[0] == memoryValues[1]) {
                //Have all the flipped cards that match stored in the cardNumbers array
                //Have all the flipped cards that don't match in the memoryValues array
                flippedCards++;
                memoryValues = [];
                cardNumbers = [];
                //Create another if statement to return winner, if all the flipped cards have been matched
                if (flippedCards == memoryArray.length) {
                    //Set the alert to winner, if the user successfully matches all the cards
                    alert("Winner!");
                }
            } else {
                //Create the flipBack function to flip the cards back over if they do not match
                function flipBack() {
                    memoryValues = [];
                    cardNumbers = [];
                }
                //Travis gave us this code in the application requirements
                setTimeout(flipBack, 700);
            }
        }

    }

}