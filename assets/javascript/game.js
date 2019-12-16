

// variables for wins losses guesses and guesses left
var wins = ""
var losses = ""
var guessesLeft = 7
var guessesSoFar = ""



// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text")

// create an array for the letter choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for (i = 0; i < computerChoices.length; i--)

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    var userGuess = event.key.toLowerCase();

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //take the user choice and hook it into the HTML guesses-so-far-text
    

    //make an IF statement for if the userchoice and computer choie are the same (the logic)
    if (userGuess === computerGuess) {
        wins++;
        updateWins();
    }

    else {
        losses++;
        updateLosses();


    }

    // Display the user wins/losses/ties.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left:" + guessesLeft;
    guessesSoFarText.textContent = "Guesses So Far:" + guessesSoFar;

    function clear()

    function reset()
};