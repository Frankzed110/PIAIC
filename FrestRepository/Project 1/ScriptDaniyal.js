// Daniyal's Class
/* Notes: use of programming language. use of machine? for automation to make the repetative actions less labor intensive and utilize machine. memory is storage and it has hardware and software. now to perform tasks machine need instructions and we use programming for this. 
machine understand 01 language i.e. binary. and to solve real world problem or address issues we use applications. but we have challenge of interacting in machine language so it should become human readable and we can communicate with machines. 
So to covert machine languages into readable languages we need translators I.e. programming languages. Javascript is only language that is supported by web or browser. it is used in all devices alongside. 
Interpreter executes line by line while compiler does over all not oneach line.
Vs code is an environment to write code. for professional application building 
When it is not saved in VS code, black dot will appear in top menu of html or script. when saved it will not appear. 
Start JS in html file or make new filr of script.js
when contributions came it is Web 2.0. but when it was static it was Web 1.0. console.log (testing purpose) is reserve method to review your codes
Underneath is practical by Daniyal 
*/
// alert("Hello Zahid!");
// var name1 = "Zahid";
// console.log(name1);
// name1 = "Daniyal"
// console.log(name1)
// document.write("Welcome Zahid");
// works like html = document.write but it deletes all existing html while loading but not used nowadays
// var age = 50;
// console.log(age);
// age = 25
// console.log(age);
//var is variable, age/name1 is identifier = is assignment operator, rhs is value
// if(name1 === "Zahid"){
//     console.log("Ali")}
    //if is condition and used for command as above
//variable scope : local and global. limit to function or block of code is local. if variable is within function then it is local then it is not available outside function. but outside function it is global
//why something is local or global? same name variables you cannot use. if you used something in function and it is limited to function i.e. within it. 
//new trend is not to use var but block scope. ECMA 2016. let is used i.e. block. 
// var name2 = "Zahid Khan";
// // console.log('name2',name2);
// function abc(){
//     console.log('name2',name2);
//      var name3 = "sir Zia";
//      console.log(name3);
// }
// abc();
// console.log("name3",name3);
//local and global function to be explored, still confusing. without var if variable declared it's scope is global.
// commented codes are not read by machine. it is commenting. purpose, return type, values are informed. // and /*for multiline commenting */
//all lines are statements. we can write multiple statements in one line by writing semi-colon. always put semi-colon. 
// var name1 = 'zahid'; var name2 = 'Maryam'; var name3 = "Zahra";
//Primitive Data types: 
//var bool= true, boolion, strings, numbers, undefined, null, symbol(for debugging only). var undef=undefined, var nul=null.
// if(age ==="29"){
//     console.log('welcome')

//above will not appear because data type should be same.undefined means no value added. null is nothing not even empty string or undefined. it has no memory
//typeof is used to check what data type it is? with console.log(typeof age); it will tell type of data
//template literals is a feature.template string also its name
// var name1="my name is zahid\n" + "'khan'"
//use backticks.. try with example. alert, var, function are keywords
//analyzing or modifying data type - prompt var age = prompt("how old are you?");
//console.log(typeof age; "string", with string no. *******
//if ("18"=== 18){console.log("welcome")}) convrsion methods - number - number; boolean-boolean; number-number.
//=== type and value both to be matched in this case of triple equals, == only check value not type, = is sign operator 
//operators are mathematic operations. var num1 = 5; var num2 = 3; console.log(num1+num2);same for subtract, / for divide, %modulas will give 3 is 3 and 9 variable. (shows reminder)when fully divide then 0.
// skipped assignment operators.add or subtract subsequent values. 
//comparison operators: condition will tell if true or false. <>=signs
// let n1 = 2;
// let n2 = 5;
// console.log(n1-n2);
//we can write complex expresson in Var such as; in line 67
/* Daniyal's class 17/10/22
math Expression:combination of values, varaiables, function cells and operators e.g. "Daniyal" + "nagoro"
Modulus: it is like divide but state reminder only
Unfamiliar Opertors: BODMAS rule holds true (5+2)*3+6;things in bracket are given priority i.e. in JS. In JS bracket things are evaluated first
Concatenating Text Strings: + is used to connect strings
Prompt: Prompt user to input: you will make variable to store value, as it returns value.
conerting strings to number. console.log(Number(age)); with typeof you can check/ return type of promt is always string.
if, else, else if
use if: block of code to be executed. e.g. if 18 years old then pass

*/
// let text1 = "zahid"
// let text2 = "Ali";
// console.log(text1+text2)
// text1.concat(text2);// (assign variable then console this. let merge = text1.concat(" " + text2)
 //backticks can also be used.
// let userName = "daniyal"
// console.log("thanks, " + userName +"!") 
//refer to slides
// to give space you can add empty space in place of string within appostrophy or you can space in strings with word after putting coma ("Zahid, ")
//Concat method: to merge strings you use concat or also you can use + for it.
//prompt always return string so to convert string to number we use in built method i.e. Number(), this will convert string to number.
//IF condition
// let x = prompt("where do you live?");
// let correctAnswer = "Pakistan"
// //condition in bracket, codes in curly brackets, when condition true then code executes otherwise no.Pakisan s case sensitive
// if(x==correctAnswer){console.log("Correct!")}
//Else; it will state "wrong" to end user/console
// let x = prompt("where do you live?");
// let correctAnswer = "Pakistan"
// if(x==correctAnswer){console.log("Correct!")};
// else {console.log("wrong")};///confusion
//else if; it can be used many times or in chain but will halt at else.
// let x = prompt("where do you live?");
// let correctAnswer = "Pakistan"
// if(x==correctAnswer){console.log("Correct!")};
// else if(x=="pakistan"){console.log("close")}
// else {console.log("wrong")}//we can make chain..add more ifs.multiple condition; else if.
// comparison operators; == compare value only (2+2=="4"/although in string but still true because only value matches), === value and type compared
//comparison operators are ==,===,<,>,<=,>=, !==
let x0=6!==5 // == data type compares but != not data type only value
console.log(x0)
//multiple conditons; logical Operators: determine logic b/w variables or values
// &&(And): ||(OR): 
let x = 6;
let y = 10;
let a1 = x < y && x === 6 // && means we can add two values. (when both true then true);it means this and other both are either correct or wrong. even if one variable wrong it will state false
console.log(a1); //when one condition false, outcome will be false even if all other true.
// let a2 = x < y && x !== 6
let a3 = x === y || y !== 10 // ||(OR) if one condition true then true, not necassarily both.
console.log(a3); // OR operator show true even if one condition correct. even if 3 condition are there. 
let a4 = (x === 6 && y === 4) || x < y; //borders will execute first, whether at first or last (BODMAS rule)
console.log(a4);
//if statement nested.
// we write a condition if if i.e. syntax, also we can run another if inside if.if inside if and then another if. this is called nested if
// ticketing System
// let country = prompt("Where do you live");
// let age = Number(prompt("what is your age"));// strings converted to number
//So, Now: we added another inside if(if(age >= 18)); Also, we cannot use && beacuse it will not be appropriate and also, because we want to keep it mutually exclusive i.e. both to be checked separately.
// we did lower case so that all entries will be lower cased first.

// if (country.toLowerCase() === "pakistan") {
//     if(age >= 18) {
//         console.log("Here is your ticket")
//     } else {
//         console.log("Age Restriction")
//     }
// } else {
//     console.log("Invalid country")
// } 
// task correctly executed ; how to add something when nothing added in prompt
//lower and upper case;
let name1 = "ZAHID";
console.log(name1.toLowerCase()); //zahid
//title case; we don't have built in function for this in JS
//Zahid
const name2 = "zahid"//make it title case (slice case will be used )
// Now Arrays
// for e.g. we have different no. of fruits. for instance more than 1000. are we going to make 1000 variables? No. just we will make array. so collection or list of data can be stored in one place
//squre bracket is used for arrays; its identity
//syntax of array: let fruits = ["orange", "banana", "Guava"]
// idexing in array: first element has index 0, next 1 and then 2 moving on..it always  starts with 0(zero)
// let fruits = ["banana", "carrot", "orange"]
// console.log(fruits[0]);// if you want to print exact element in array
// console.log(fruits.length); // to find length of array
// push and pop method; push add element in array.
// let userFruit = prompt("Which Fruit you like?")
let fruits = ["banana", "carrot", "orange"]
//now i will add from push method fruit obtained from user
// fruits.push(userFruit);
// fruits.push("Grapes");
// fruits.pop();// pops last element only. removes last element from array
let fruit1 = fruits.pop(); // returns with popped/pushed element. if we create variable for it we can use it later on.in case of push it will return length of array which is now increased by one.
// console.log(fruit1)
// console.log(fruits);
// now fruit entered by user will come to array but it will add at the end only. by push it adds to end
// const and variable. we cannot re-assign values in constant. but we can change values in array. we can assign values in variable only.
const fruit2 =["Alu","gobi", "turi"];
// fruit2[0]="shorba"
// fruit2.shift();//remove first element and also re-assign index
// fruit2.unshift();//shift and unshift removes or add from start
fruit2.unshift("zahid");// add something at start
// verify by checking return of the above shift/unshift method
console.log(fruit2);// we can assign values in const but we can change with addition of index
// content inside array will change but whole array cannot be changed.
// removing element from start; shift and unshift. shift alt of pop(removes from start); 0 index removed so it changes the index too.

