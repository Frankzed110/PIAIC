import randomInteger from "random-int"; //library installed
import PromptSync from "prompt-sync"; // library installed

// The available choices
let choices = ["rock", "paper", "scissors"];

// user will see these messages
let userprompt= "0 for rock, 1 for paper, or 2 scissors";
let outcome = "ready to play";

//Computer chooses randomly; install random - int [this is advantage of using NPM and node.js]
let computerChoice = randomInteger(0,2); // this is random between 0-2 (0,1,2)
computerChoice = choices[computerChoice];

//prompt the user for an input
const prompt = PromptSync();
let userInput = prompt(userprompt);
let userChoice = choices[userInput];

if (computerChoice === userChoice) {
    outcome = "Draw";
} else if (computerChoice === "rock" && userChoice === "paper") {
    outcome = "Player Wins";
} else if (computerChoice === "rock" && userChoice === "scissors"){
    outcome = "Computer Win";
} else if(computerChoice === "paper" && userChoice === "rock"){
    outcome = "Computer Win";
} else if(computerChoice === "paper" && userChoice ==="scissors"){
    outcome = "Player Wins";
} else if(computerChoice === "scissors" && userChoice === "rock"){
    outcome = "Player Wins";
} else if(computerChoice === "scissors" && userChoice === "paper"){
    outcome = "Computer Wins";
}

console.log("Computer chooses " + computerChoice);
console.log("Player chooses " + userChoice);
console.log(outcome);
// basic node.js application made. 
//if else can be used to check multiple condition and if single variable or single value then switch is used.
//Assignment for both chapter 3 and 4






