import inquirer from "inquirer";
import chalk from "chalk";

async function OtherAmount(balance: number){
    const otherAmt =await  inquirer.prompt([{
        name:"otherAmount",
        type: "number",
        message: "Enter the amount you want to Withdraw"
    }]);
if(otherAmt.otherAmount < balance){
    balance -=otherAmt.otherAmount;

} else{
    console.log(chalk.redBright("Sorry! You have insufficient balance"));
    balance = await OtherAmount(balance);
}
return balance;
}

async function cashWithdraw(balance: number){

    const answer = await inquirer.prompt([{
        name: "amount",
        type: "list",
        choices: ["500", "1000", "2000","5000", "10000", "Other Amount"],
        message: "Please select your amount"
    }]);

// console.log(answer.amount); //other
// console.log(typeof answer.amount);//string
// console.log(balance > Number (answer.amount));//false

   

    switch(answer.amount){
        case "500":
            if(balance > Number (answer.amount)){
                balance -=500;
                console.log(chalk.green(`Your remaining balance is:  ${balance}`));
                break;
            }
            else{
                console.log(chalk.redBright("Sorry! You have insufficient balance."));
            }
            
        case "1000":
            if(balance > Number (answer.amount)){
                balance -=1000;
            console.log(chalk.green(`Your remaining balance is:  ${balance}`));
                break;
            }
            else{
                console.log(chalk.redBright("Sorry! You have insufficient balance."));
            }
        case "2000":
            if(balance > Number (answer.amount)){
                balance -=2000;
            console.log(chalk.green(`Your remaining balance is:  ${balance}`));
                break;
            }
            else{
                console.log(chalk.redBright("Sorry! You have insufficient balance."));
            }
            
        case "5000":
            if(balance > Number (answer.amount)){
                balance -=5000;
            console.log(chalk.green(`Your remaining balance is:  ${balance}`));
                break;
            }
            else{
                console.log(chalk.redBright("Sorry! You have insufficient balance."));
            }
        case "10000":
            if(balance > Number (answer.amount)){
                balance -=10000;
            console.log(chalk.green(`Your remaining balance is:  ${balance}`));
                break;
            }
            else{
                console.log(chalk.redBright("Sorry! You have insufficient balance."));
            }
        case "Other Amount":
            balance = await OtherAmount(balance)
            console.log(chalk.green(`Your remaining balance is:  ${balance}`));
            break;
    }
return balance;
}

export default cashWithdraw;