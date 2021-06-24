//create a random (whole) number between 1-15
function randomNumber(min,max) { //min = 1(incl), max = 16(excl)
    return Math.floor(Math.random() * (max - min) + min); // round to whole numbers
}
randomNumber(1,16) //execute


// register userGuess between 1-15
let userGuess = parseInt(document.getElementById("guessedNum").value)

// compare random number to userGuess when btn click
document.getElementById("buttonClick").addEventListener("click", function() {
if (userGuess === randomNumber){ // compare to function?
    alert(`Awesome! You number ${guessedNum} was correct. You can be named many things, hungry not being one of them.`;)
else if (userGuess + 1 === randomNumber|| userGuess -1 === randomNumber)
    alert "So close, but you just missed it! Are you in a class that started on the thirteenth or what?"
else
    alert(`Bummer... You guessed ${guessedNum} and the secret number was ${secretNum}.`;)

}
})
// display different messages

