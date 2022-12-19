import users from "./user.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    const answers = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please enter your Account Number"
        },
        {
            name: "pin",
            type: "password",
            message: "Insert your Pin Code"
        },
    ]);
    //user file is our database and we will search for relevant entry there.
    let user = users.find(x => x.acc_number == answers.accountNumber && x.pinCode == answers.pin);
    //we use users.find to find something wrt to their certian properties and they must match for input validation and confirmation
    //line 20 is used to verify if the data entered by customer is actually the data in our database i.e. in users.ts
    // if data matched it returns the object of data related to that user in user.ts, if not matched then undefined is returned 
    if (typeof user != "undefined") {
        console.log(`Welcome ${user.name}`);
        mainScreen(user.balance); // after the login was successful, he/she will be directed to mainscreen
    }
    else {
        console.log("You have entered an invalid Pin or Account Number");
    }
}
export default login;
