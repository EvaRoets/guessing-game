(function guessingGame() {
    //create a random (whole) number between 1-15
    function randomNmb(max) { //min = 1(incl), max = 16(excl)
        return Math.floor(Math.random() * max) + 1;// round to whole numbers, min = 1
    }

    const classNmb = 15;
    let secretNmb = parseInt(randomNmb(classNmb));
    // console.log(secretNmb)

    // register userGuess between 1-15 (after btn click => in function)
    document.getElementById("buttonClick").addEventListener("click", function () {
        let userGuess = parseInt(document.getElementById("guessedNum").value)
        // compare random number to userGuess when btn click
        // display corresponding messages
        if (userGuess === secretNmb) {
            alert(`Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);
        } else if (userGuess + 1 === secretNmb || userGuess - 1 === secretNmb) {
            alert
            ("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
        } else {
            alert(`Bummer... You guessed ${userGuess} and the secret number was ${secretNmb}.`);
        }
    })
})();

