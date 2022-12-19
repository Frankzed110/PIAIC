import inquirer from "inquirer";
const Electricity = Math.ceil(Math.random() * 1000 + 1);
const Water = Math.ceil(Math.random() * 1000 + 1);
const Gas = Math.ceil(Math.random() * 1000 + 1);
const MobileTopUp = Math.ceil(Math.random() * 1000 + 1);
async function Utility(balance) {
    const input = await inquirer.prompt([{
            name: "BillType",
            type: "list",
            choices: ["Electricity", "Water", "Gas", "MobileTopUp"],
            message: "Please select the Bill Type you want to Pay"
        }]);
    if (input.BillType == "Electricity") {
        console.log(`Your bill amount is: ${Electricity}`);
        balance -= Electricity;
    }
    else if (input.BillType == "Water") {
        console.log(`Your bill amount is: ${Water}`);
        balance -= Water;
    }
    else if (input.BillType == "Gas") {
        console.log(`Your bill amount is: ${Gas}`);
        balance -= Gas;
    }
    else if (input.BillType == "MobileTopUp") {
        console.log(`Your bill amount is: ${MobileTopUp}`);
        balance -= MobileTopUp;
    }
    return balance;
}
export default Utility;
