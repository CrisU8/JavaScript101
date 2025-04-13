let answers = [
    "Yes - definitely", "It is decidedly so",
    "Without a doubt", "Reply hazy, try again.",
    "Ask again later", "Better not tell you now",
    "My sourcers says no","Outlook not so good",
    "Very doubtful"
]

let randomAnswer = Math.floor(Math.random() * answers.length);

let question = "Do you like rock music?"
console.log("Question: " + question);
console.log("Magic 8 ball: " + answers[randomAnswer]);