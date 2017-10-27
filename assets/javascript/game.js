var library = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var loseCount = 0;
var guessLeft = 5;
var guessed = [];
var userGuess;
var currentLtr;

// Function to render questions.
function gameManager()
{
  if(userGuess === currentLtr)
  {
    alert("Winner! You're right, it was '" + currentLtr + "' !!");
    document.querySelector("#winCount").innerHTML = winCount + 1;
    console.log(winCount);
    reset();
  }
  // If there are still more guesses, render the next one.
  else if (guessLeft >= 2)
  {
    guessLeft --;
    document.querySelector("#guessLeft").innerHTML = guessLeft;      // <--updates guess amount on screen text
    guessed.push(userGuess);
    document.querySelector("#guessedLtrs").innerHTML = guessed;    // <--adds recent guess letter on screen text
    console.log("Guessed Letters: " + guessed);
  }
  // If no more guesses, render the end game screen.
  else
  {
    alert("Game Over!");
    document.querySelector("#loseCount").innerHTML = loseCount + 1;
    console.log(loseCount);
    reset();
  }
};

function loadNewLtr()
{
  newIndex = [Math.floor(Math.random() * library.length)];
  newLtr = library[newIndex];
  return newLtr;
};

function reset()
{
  currentLtr = loadNewLtr();
  guessed.length = 0;
  document.querySelector("#guessedLtrs").innerHTML = guessed;
  guessLeft = 5;
  console.log("Guesses left: " + guessLeft);
  document.querySelector("#guessLeft").innerHTML = guessLeft;
};

//Start game with reset
reset();
// #winCount #loseCount  #guessLeft  #guessedLtrs

document.onkeyup = function(event)
{
  // If there are no more questions, stop the function.

  console.log("Current Letter: " + currentLtr);
  // Determines which key was pressed
  userGuess = event.key;
  console.log("User guessed: " + event.key);
  gameManager();
};
