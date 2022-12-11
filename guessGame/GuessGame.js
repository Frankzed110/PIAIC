#! /usr/bin/env node
///Guess Game///
///////////////////////////
///libraries need async functions such as inquirer. and when you can call any async function inside a function then you make that entire function async that why we write async at the start.
//1-5/// Range
import inquirer from "inquirer"; // to remove squiggly line we write following in terminal: npm i -d @types/inquirer
import chalk from "chalk";
import showBanner from "node-banner";
let score = 0; // we also have  to make while loop to keep running the application until the write answer is get
let playContinously = true;
(async () => {
    await showBanner(`Time to Guess, roll your dice bruhs`); // node banner used here
})();
async function guessTheNumber() {
    while (playContinously) { // whole logic is placed inside while loop
        let randomNumber = Math.ceil(Math.random() * 4) + 1; //will give value less than 4 and we added to 5
        let answer = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter any Number between 1 and 5"
            }]); // with inquirer we took input from the user.and before this we generated a random number. 
        if (answer.userNumber === randomNumber) {
            console.log(chalk.green("you guess the right number. Hurray!"));
            score += 10;
            console.log(chalk.yellowBright(`Bingo! you've scored: ${score}`));
        }
        else {
            console.log(chalk.redBright("You failed, better luck next time!"));
            playContinously = false; // on wrong answer it will terminate
        }
    }
}
; //this condition was set for random error and chalk library was utilised.
setTimeout(() => {
    guessTheNumber();
}, 1500);
//install node - banner: npm i node-banner
//1:32:59 minutes aleady done of video rest remaining
//we can reduce the range to get answer quickly.
// console.log(randomNumber);
