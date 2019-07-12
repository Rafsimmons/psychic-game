//array of computer choices//
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for wins, loss, guesses left, letters guessed//
var win=0;
var loss=0;
var guessesLeft= 8
var lettersGuessed= [];

// set letters to randomize//

window.onload = function() {
    var computerGuess= letters[Math.floor(Math.random() * letters.length)];
    lettersGuessed.push(computerGuess)
    console.log(computerGuess)
}

// player guess//
document.onkeyup = function(event) {
    var playerGuess= event.key;
    lettersGuessed.push(playerGuess);
    
if (playerGuess === computerGuess) {
    win++
    lettersGuessed=[];
  
}

if (playerGuess != computerGuess){
    guessesLeft--
    lettersGuessed.push(playerGuess)
}
if (guessesLeft ===0) {
    loss--
    lettersGuessed=[]
}
}
var html=
"<h2>Guess what I'm thinking of</h2>" +
    "<p> Win: " + win + "</p" +
    "<p>Loss: " + loss + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p"
    "<p>Letters Guessed: " + lettersGuessed + "</p"
    document.querySelector("#game").text = html;


