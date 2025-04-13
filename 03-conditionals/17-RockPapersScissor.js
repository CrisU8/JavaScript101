let userInput = "Rock"
let rockPaperScissor = [
    "Rock", "Paper", "Scissor"
]
let randomNumber = Math.floor(Math.random() * rockPaperScissor.length)
let randomChoice = rockPaperScissor[randomNumber]

console.log("User's choice: ", userInput)
console.log("Machine's choice: " + randomChoice)

if (// Draw
    (randomChoice === "Rock" && userInput === "Rock") ||
    (randomChoice === "Paper" && userInput === "Paper") ||
    (randomChoice === "Scissor" && userInput === "Scissor")
) {
    console.log("Draw")
}else if ( //User's wins
    (randomChoice === "Rock" && userInput === "Paper") ||
    (randomChoice === "Paper" && userInput === "Scissor") ||
    (randomChoice === "Scissor" && userInput === "Rock")
){
    console.log("You win")
}else if (
    (randomChoice === "Scissor" && userInput === "Paper") ||
    (randomChoice === "Rock" && userInput === "Scissor") ||
    (randomChoice === "Paper" && userInput === "Rock")
){
    console.log("You lose")
}else {
    console.log("Invalid choice. Please pick Rock, Paper, or Scissor.")
}