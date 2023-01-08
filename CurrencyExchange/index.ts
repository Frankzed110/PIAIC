#! /usr/bin/env node

import inquirer from "inquirer";

const UsdtoPkr = 228.43;
const PkrtoUsd = 0.0044;
const EutoPkr = 239.85;
const PkrtoEu = 0.0042;
const EutoUsd = 1.05;
const UsdtoEu =0.95;
let repeat = false;


async function Converter (){
    do{

    let answer: {currencyfrom: string, currencyTo:string, Amount: number} = await inquirer.prompt([{
        name:"currencyfrom",
        type: "list",
        choices:["USD", 'PKR', "EU"],
        message: "Select from which currency you want to convert"
    },
{
    name:"currencyTo",
        type: "list",
        choices:["USD", 'PKR', "EU"],
        message: "Select to which currency you want to convert"

},
{
    name:"Amount",
        type: "number",
        message: "Enter the amount you want to convert: "
}]);

// console.log(answer.Amount);

switch (answer.currencyfrom) {
    case 'USD':
        if(answer.currencyTo == "PKR"){
            let amount = answer.Amount * UsdtoPkr;
            console.log(amount);
        } else if(answer.currencyTo === 'EU'){
            let amount = answer.Amount * UsdtoEu;
            console.log(amount);
        }else {
            console.log(answer.Amount);
        }
        break;
    case 'PKR':
        if(answer.currencyTo == "USD"){
            let amount = answer.Amount * PkrtoUsd;
            console.log(amount);
        } else if(answer.currencyTo === 'EU'){
            let amount = answer.Amount * PkrtoEu;
            console.log(amount);
        }else {
            console.log(answer.Amount);
        }
        break;
    case 'EU':
        if(answer.currencyTo == "USD"){
            let amount = answer.Amount * EutoUsd;
            console.log(amount);
        } else if(answer.currencyTo === 'PKR'){
            let amount = answer.Amount * EutoPkr;
            console.log(amount);
        }else {
            console.log(answer.Amount);
        }
        break;
}
repeat = await Repeat();
} 
while(repeat === true)
}


async function Repeat(){
    let again = await inquirer.prompt([{
        name: 'repeat',
        type:'list',
        choices:['y','n'],
        message: "Do you want to perform another conversion?"
    }]);
    return again.repeat === 'y'? true: false;
}
Converter();