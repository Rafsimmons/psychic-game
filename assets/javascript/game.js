//array of computer choices//
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for wins, loss, guesses left, letters guessed//
var win=0;
var loss=0;
var guessesLeft= [];
var lettersGuessed= [];

// set letters to randomize//

$(document).ready(function(){
    var computerGuess= letters[Math.floor(Math.random() * letters.length)];
    computerGuess.push(letters)
    console.log(computerGuess)

})