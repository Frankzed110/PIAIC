import inquirer from "inquirer";
import cashWithdraw from "./cashWithdrawl.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./UtilityBills.js";
import chalk from "chalk";


async function anotherTransaction(){
    const OTrans = await inquirer.prompt([{
        name: "OtherTrans",
        type: "list",
        choices: ["yes", "No"],
        message: "Do you want to perform another Transaction?"
    }])
   return OTrans.OtherTrans; 
}

async function mainScreen(balance: number) {
   
    do{
        const options = await inquirer.prompt([{
            name: "menu",
            type: "list",
            choices: ['Balance Inquiry', 'Cash Withdrawl', 'Cash Deposit', 'Transfer Funds', 'Pay Utilities', 'Exit'],
            message: "What do you want to proceed with?"
        }]);
    
        
    switch(options.menu)  {//since we have multiple option and these options are our modules.
    
        case "Balance Inquiry":
                console.log(chalk.green(`Your Current Balance is: ${balance}`));
            break;
            case "Cash Withdrawl":
                balance = await cashWithdraw(balance);
               console.log(chalk.yellow(`Transaction is succesfull, your new balance is ${balance}`));
            break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                console.log(chalk.blueBright(`Transaction is succesfull, your new balance is ${balance}`));
            break;
            case "Transfer Funds":
                balance = await transfer(balance);
                console.log(chalk.cyanBright(`Transaction is succesfull, your new balance is ${balance}`));
            break;
            case "Pay Utilities":
                balance = await Utility(balance);
                console.log(chalk.grey(`Transaction is succesfull, your new balance is ${balance}`));
            break;
            case "Exit":
                anotherTran = "No";
           break;
    
    }
    if(options.menu !== "Exit"){
    var anotherTran = await anotherTransaction();
    }
    if (anotherTran == "No"){
        console.log("Thankyou for using Frank's ATM")
    }
}
   while(anotherTran != "No");
    
}
export default mainScreen;


///NPX it and review it for successful execution of transactions