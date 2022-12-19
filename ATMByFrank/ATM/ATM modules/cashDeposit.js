import inquirer from "inquirer";
async function cashDeposit(balance) {
    const amount = await inquirer.prompt([{
            name: "amt",
            type: "number",
            message: "Enter your Amount: "
        }]);
    balance += amount.amt;
    return balance;
}
export default cashDeposit;
