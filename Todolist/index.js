#! /usr/bin/env node 
//To do list will be created
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet("Todo List by Frank", function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.blueBright(data));
});
let todolist = [];
async function RepeatFlow() {
    const answer = await inquirer.prompt([{
            name: "repeat",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to perform another Operation?"
        }]);
    return (answer.repeat === "Yes") ? true : false;
}
async function TodoList() {
    let StartAgain = true;
    do {
        const answer = await inquirer.prompt([{
                name: "option",
                type: "list",
                choices: ["Add item", "Display", "Remove Items"],
                message: "What do you want to do?"
            }]);
        if (answer.option === "Add item") {
            const item = await inquirer.prompt([{
                    name: "newItem",
                    type: "input",
                    message: "Enter New Item"
                }]);
            todolist.push(item.newItem);
            StartAgain = await RepeatFlow();
        }
        else if (answer.option === "Display") {
            if (todolist.length == 0) {
                console.log(chalk.bgRedBright("Alert!!!Your list is empty."));
            }
            todolist.forEach(element => console.log(element));
            StartAgain = await RepeatFlow();
        }
        else if (answer.option === "Remove Items") {
            if (todolist.length == 0) {
                console.log(chalk.bgRedBright("Alert!!!Your list is empty."));
            }
            let removeItem = await inquirer.prompt([{
                    name: "item",
                    type: 'input',
                    message: "Which item you want to remove"
                }]);
            let index = todolist.indexOf(removeItem.item);
            console.log(index);
            if (index !== -1) {
                todolist.splice(index, 1);
            }
            StartAgain = await RepeatFlow();
        }
    } while (StartAgain !== false);
}
setTimeout(() => {
    TodoList();
}, 1000);
