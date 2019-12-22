var letters = ["a", "b", "c"];


var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;


var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};


var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};


updateLetterToGuess();
updateGuessesLeft();


document.onkeydown = function(event) {
 
  guessesLeft--;

  // Lowercase the letter
  var letter = event.key.toLowerCase();

  // Then add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();


  // We'll check if there's a match.
  if (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

   
    reset();
  }

  
  if (guessesLeft === 0) {

  
    losses++;
    document.querySelector("#losses").innerHTML = losses;

   
    reset();
  }
};