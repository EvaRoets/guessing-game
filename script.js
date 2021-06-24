//create a random (whole) number between 1-15
function randomNumber(min, max) { //min = 1(incl), max = 16(excl)
    return Math.floor(Math.random() * (max - min) + min); // round to whole numbers
}
//console.log(randomNumber()) //Nan, because function

const classNmb = 15;
let secretNmb = parseInt(randomNumber(1, classNmb));
console.log(secretNmb)

// compare random number to userGuess when btn click
// register userGuess between 1-15 (after btn click => in function)
// display different messages
document.getElementById("buttonClick").addEventListener("click", function () {
    let userGuess = parseInt(document.getElementById("guessedNum").value)

    if (userGuess === secretNmb) {
        alert(`Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);
    } else if (userGuess + 1 === secretNmb || userGuess - 1 === secretNmb) {
        alert
        ("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
    } else {
        alert(`Bummer... You guessed ${userGuess} and the secret number was ${secretNmb}.`);
    }
})

