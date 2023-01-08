#! /usr/bin/env node

//install package.json and tsconfig.json 
//inquirer, chalk and chalk-animation installed with types
//auto compiler run in terminal with Shift+Ctrl+B
//Auto console run by npm nodemon and then npx nodemon index.js

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';


const sleep = () => {
    return new Promise ((res,rej) => {
        setTimeout(res,1000)
    })
};

async function welcome () {
    const rainbowTitle = chalkAnimation.rainbow("Your Word Counter by Frank is here!");
    await sleep(); //this will call sleep at line 12
    rainbowTitle.stop();
}

welcome();

//we have to tell user about word count and character count of paragraph
async function askQuestion(){
    let que = await inquirer.prompt([{
        type: "input",
        name: "str",
        message: chalk.rgb(187,154,206)("You are requested to enter your paragraph here: ")

    }])
    //for words we will convert string to array
    const word_arr = que.str.split(" ");
    // console.log(word_arr);
    console.log(`Words in Paragraph: ${word_arr.length}`);
    //for characters we will join the words
    const chr_withoutspaces = que.str.replace(/ /g,"");
    // console.log(chr_withoutspaces)
    console.log(`character in Paragraph: ${chr_withoutspaces.length}`)

}
// askQuestion();

async function startAgain(){
    do{
        await askQuestion();
        var playAgain = await inquirer.prompt([{
            type: "input",
            name: "restart",
            message:chalk.rgb(187,154,206)("Do you want to restart? Press Y or N: ")
        }])
    } while (playAgain.restart === 'Y' || playAgain.restart === 'yes' || playAgain.restart === 'y' || playAgain.restart === 'YES')
}

startAgain();