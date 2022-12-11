#! /usr/bin/env node

//folder we can create from mkdir or from PC
//tsc --init: for tscconfig file
// npm init: package json file
//make changes in ts config and also packagejson. 
//install dependencies: inquirer, chalk and chalk-animation
//add types: npm i -D @types/inquirer 
// add types: npm i -D @types/chalk
// add types: npm i -D @types/chalk-animation
//write shebang code #!/usr/bin/env node
//import librarires 

import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

//npx is the testing command

const sleep = (ms = 2000) => new Promise((res, rej) => setTimeout(res, ms)); //arrow function to stop the rainbow animation 

async function welcome() {
    const rainbowTitle = chalkAnimation. rainbow('Wait is Over. Here is another "Play it To Win it" by Frank')
    await sleep(); //after 2sec this funtion will move forward
    rainbowTitle.stop();
}
// welcome();
//we can use compiler and node together: tsc && node index.js
let playerLife = 3;

async function askQuestion() {
    let randomNumber: number = Math.floor(Math.random()*10 + 1);

    do{
    playerLife--;
    console.log(`Player Life Left ${playerLife}`);
    var que = await inquirer
    .prompt([
        {
        type: "number",
        name: "usr_num",
        message: chalk.cyanBright('Select any number between 1-10: '),
        // validate: (answers: number) => {
        //     if (isNaN(answers)) {
        //         return chalk.red('Please enter a numeric!');
        //     }
        //     return true;
        // }
    }]);
    if(que.usr_num === randomNumber) {
        console.log(chalk.greenBright("Bingo! Your Guess was perfect."))
    } else if (que.usr_num < randomNumber){
        console.log(chalk.redBright(`You are very close, try again. Your input, ${que.usr_num} is Less than Guess number, a small hint for you my friend`));
    } else if (que.usr_num > randomNumber){
        console.log(chalk.yellowBright(`You are very close, try again. Your input, ${que.usr_num} is Greater than Guess number, a small hint for you my friend`));
    } 
 } while (playerLife > 0 && randomNumber !== que.usr_num);
if (playerLife == 0 && randomNumber !== que.usr_num) {
    console.log(chalk.bgRedBright('Game Over dude, You are dead'))
}
}
// askQuestion();

async function startAgain (){
    do{
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer .prompt([
            {
            type: 'input',
            name: 'start_again',
            message: chalk.bgGreenBright('Do you want to try your luck again?: Press Y or N: ')
        }
    ])
    } while(restart.start_again === 'y' || restart.start_again === 'Y' || restart.start_again === 'yes' || restart.start_again === 'YES')
    
}

startAgain();


///npm i testing-game-by-frank
///npx testing-game-by-frank

///Published