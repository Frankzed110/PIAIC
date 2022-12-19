import inquirer from "inquirer";
import chalk from "chalk";
async function transfer(balance) {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Enter the Account Number for Funds Transfer."
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the Amount you want to Transfer."
        }]);
    if (balance > answer.amount) {
        balance -= answer.amount;
    }
    else {
        console.log(chalk.red("You have insifficient Funds"));
    }
    return balance;
}
export default transfer;
