const luckyNumber = 7;
let guessNumber = Math.floor(Math.random()*10) + 1; // a number between 1 and 10;

while (guessNumber!=luckyNumber) {
    console.log("Nope, it is not " + guessNumber)
    guessNumber = Math.floor(Math.random()*10) + 1
}

console.log("My lucky number is " + guessNumber);