#!/usr/bin/env node

import chalk from 'chalk'; // sindre sorhus made this
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import{createSpinner} from 'nanospinner';

// console.log(chalk.bgCyanBright("Hi Zahid"));

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Allow Frankie To Make You a Javascript Millionaire Overnight! \n"
    );
await sleep();
rainbowTitle.stop();

console.log(`
 ${chalk.bgBlue('HOW TO PLAY')}
I am caged inside your computer.
If you get any Question wrong I will be ${chalk.bgRed('Killed')}
So, get all the Questions right, Please...
 `);
}
await welcome(); //showed the rainbow title and other instructions
// inquirer works as prompt and collects user input.

async function askName () {
    const answers = await inquirer.prompt({
        name: 'Player_name',
        type: 'input', //form that user will type into
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });
playerName = answers.Player_name;
};

await askName(); //took user response i.e. player name.

async function question1 () {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Typescript test was held in October, on which date we actually started practicing Typescript?\n',
        choices: [
            'Nov 26th, 2022',
            'Nov 25th, 2022',
            'Nov 24th, 2022',
            'Nov 23rd, 2022'
        ],
    });
    return handleAnswer(answers.question_1 == 'Nov 26th, 2022');
};

async function question2 () {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'How many batches are there in current PIAIC program?\n',
        choices: [
            '4',
            '6',
            '8',
            '7'
        ],
    });
    return handleAnswer(answers.question_2 == '7');
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
await sleep();
if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. This was a big relief, Good Luck!`});
} else {
spinner.error({ text: ` Game over, you got me Killed ${playerName}!`})
process.exit(1);
};
};

await question1();
await question2();

function winner () {
    console.clear();
    const msg = `Congrats, ${playerName} ! You Won \n $ 1,000,000`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
};

await winner();

//now upload this on npx..
//add bin into package.json and then run npm login in terminal 
//then npm publish; make sure your file name is correct or it will not process
// inside packeges of your npm account you will find link
//npx piaic-millionaire-quiz
