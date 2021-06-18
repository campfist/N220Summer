//Create variable to call input field
let txtExample = document.getElementById("txtExample");

//Create variables for divs that contain tallys of the bad words
let dvFound = document.getElementById("dvFound");
let dvNotFound = document.getElementById("dvNotFound");

//Create array for bad words
let badWords = ["clear", "water", "tires"];

//Create word catcher function
function wordCatcher() {

    //Create variable for words written in the input field
    let words = txtExample.value;

    //Create splitwords variable
    let splitWords = words.split(" ");

    //Create sum variable to tally word counts
    let sum = 0;

    console.log(splitWords);

    //Create a for loop and a nested for loop to compare the words in the input field to the words I have listed in my array
    for(let i = 0; i < splitWords.length; i++) {
        for(let x = 0; x < badWords.length; x++) {
            console.log(badWords[x]);
            console.log(splitWords[i]);
            //console.log(words);
            //Create if statement to tally and catch whenever bad words have been written in the input field
            if(splitWords[i] == badWords[x]) {
                console.log("They match");
                sum += 1;
            }
        }
    }

    //Create if/else statement to tally the count of words and bad words found and not found in the input field 
    if(sum == 0) {
        console.log("No Bad Words");
        dvNotFound.innerHTML = "Not Found: " + sum;
    } else {
        console.log("We found Bad Words");
        dvFound.innerHTML = "Found: " + sum;        
    }

    console.log(sum);

    // for(let i = 0; i < badWords.length; i++) {
    //     console.log(words, badWords[0]);
    //     sum += Number();
    //     if(words.length == "clear") {
    //         dvFound.innerHTML = "Found: " + sum;
    //     } else {
    //         dvNotFound.innerHTML = "Not Found: "
    //     }
    //     console.log(words.length);
    // }

    //Ran tires through clear water

}