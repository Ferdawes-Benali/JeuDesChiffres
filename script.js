let nbToGuess;
let diff = prompt("Choose difficulty :\n1 - Easy (1-20)\n2 - Medium (1-50)\n3 - Difficult (1-150)");
let min = 1;
let max;
let tentative;

switch (diff) {
    case "1":
        max = 20;
        tentative = 10;
        alert("Easy. Guess a number between 1 and 20.");
        break;
    case "2":
        max = 50;
        tentative = 8;
        alert("Medium. Guess a number between 1 and 50.");
        break;
    case "3":
        max = 150;
        tentative = 5;
        alert("Difficult. Guess a number between 1 and 150.");
        break;
    default:
        alert("Invalid. Default Difficulty: Medium (1-50).");
        max = 50;
        tentative = 8;
        break;
}

nbToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;

while (tentative > 0) {
    guess = prompt(`Guess the number (between ${min} and ${max}) :`);
    if (guess === null) {
        alert("Game canceled.");
        break;
    }
    guess = Number(guess);
    if (isNaN(guess)) {
        alert("Enter a valid number, please!");
        continue; // Prevents attempts from decreasing for invalid input
    }

    if (guess < nbToGuess) {
        alert(`The number is greater! Try again\n${tentative} attempts remaining.`);
    } else if (guess > nbToGuess) {
        alert(`The number is lower! Try again\n${tentative} attempts remaining.`);
    } else {
        alert(`Congrats! You did it.`);
        break;
    }
    tentative--; // Decrement only on valid guesses
}

if (tentative === 0 && guess !== nbToGuess) {
    alert(`Sadly :( , You lost!! The number was ${nbToGuess}.`);
}