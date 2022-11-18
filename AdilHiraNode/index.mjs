// 29-OCT-22;
//LOOPS
//LOOPS
//LOOPS
// when conditions not set it takes on infinite loop or stop condition is not valid. two types of loops (for loops and while loops)
// if you know how many times to repeat the loop e.g. multiplication
// const num = 7;
// type for and click on for (for loops)
//  for (let i =1; i < 11; i++) {
//     console.log(num*i);
//  }
// Exercise 5.3//

// let myWork=[];
// for (let i = 1; i < 11; i++) { // let i =1 states from where to start. second statement shows how many times we have to run it and i++ it states it adds on next run. initially it will be without i++.

//    let status = i % 2 ? true : false; // ternary operator; condition followed by ? then expression to execute if it holds true otherwise followed by colon : and expression to execute of it turns to be false.
//    let temporary= {
//       name: `Lesson ${i}`,
//       status: status
//    }
//    myWork.push(temporary)
// }
// console.log(myWork);

// i can start from 0 or 1, in this example if it was 0 we had to make some changes in conditions. and adjust accordingly.
//initilization, testing condition and increment/decrement. initialization starts with value and condition is no. of loops and third is increase or decrease to reach the loop condition. In curly brackets we execute the code.
// While LOOP
// runs for unlimited time when you don't know how many loops to run.
// we keep running the loop between the limits
// we need to install prompt sync from library and import here
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let userInput = prompt ("On a scale of 1-10, how much you like the name 'Frankie'?");
// userInput = Number(userInput);
// // now we will run while loop; we will type "while" and when tab appears click on tab statement
// // if condition true then execution runs
// while (userInput>0 && userInput<11) {
//    userInput = prompt ("On a scale of 1-10, how much you like the name 'Frankie'?");
//    console.log(userInput);
// }
// so untill we are satisfying the prompt with values in range it will keep running but once we give value that is outside range the loop will discontinue.
//Exercise 5.1

//    let maxValue = 10
//    const randomNumber = Math.floor(Math.random()*maxValue) + 1; // gives some random number and math.floor removes decimals. Math's M must be capital
//    console.log(randomNumber);
//    let status = false;

// while(!status) {
//    let userInput = prompt("Guess a number between 1 and " + maxValue + " ");
//    userInput = Number(userInput);
//    if (userInput === maxValue){
//       status = true;
//       console.log("You won! The nummber was " + randomNumber);
//    } else if ( userInput > randomNumber) {
//       console.log("Sorry. your guess is too high.")
//    } else {
//       console.log("Sorry, your guess was too low.")
//    }
// }

// console.log(randomNumber);

// boolean condition is running until it gets true. progam in curly brackets. first boolean is checked and when it is true it goes forward.
// Nested loop with Array loop
//   const products = ["Shirts", "Trousers", "Jacket"];
//   const gifts = ["Keychain", "Pen", "Tie"];

//   for (let i = 0; i < products.length; i++) { // we must start from 0 so it will take values from 0 index in array
//       // console.log(products[i]);
//       for ( let j = 0; j < gifts.length; j++) {
//             console.log(products[i] + ` - ` + gifts[j]);
//       }
//   }
// Assignment exercise 5.5
//loop and Object (For in Loops)
let car = {
  model: "2022", // putting comma after key is essential or it will not run
  make: "Toyota",
  year: "2020",
  color: "White",
};
for (const key in car) {
  // we used nor 'for' but "for in"
  // console.log(car[key]);
}
// Assignment 5.7 for practice

// Math multiplication table - Exercise //
// let multiplyTable = [];
// let numValues = 6;
// for (let i = 0; i < numValues; i++) {
//      const temporary = [];
//      for (let j = 0; j < numValues; j++) {
//      temporary.push(i*j)
//      }
//      multiplyTable.push(temporary)
//       // console.log(temporary);
// }
// console.table(multiplyTable); // now it will appear in table form
// exercise complete //

//Functions
// function coffeeOrder(){  // same thing recalled; key word function is essential and name is important i.e. coffeeorde and then we have parantheses; coffeeorder() is also function and execution block in curly brackets
// console.log("Your coffee is on it's way!")
// }
// coffeeOrder() // to all just write name and it will be called.
// with function we write once and use it whenever required. we use return keyword to get outcome.
//function return statement
// function coffeeOrder(){
//       return("Your coffee is on it's way!")
//       // console.log("hello")
// }
// coffeeOrder() // in this case no output will come.since return terminate the function expression. and if you  return something the function is over and nothing will appear in outcome even if something is logged after it.
//return means function is ended.returned statement if logged will appear in console.log
// function coffeeOrder(){
//       return("Your coffee is on it's way!")
// console.log("hello")
// }
// console.log(coffeeOrder()); // when logged it can be seen that it is returned and logged
//also we can save the coffeeOrder in const and then log it and it will give the same expression
//Parameters and Arguments
//we can also give input to functions. and parameter is our variable

// function coffeeOrder(drink) { // with params we give inputs.(drink)in parantheses we can add variables.
// return "Your coffee is ready." // for pramas consvert this into template literals
// return `Your ${drink} is on its way!`
// }
// const order = coffeeOrder ("Hot Chocolate");// now Latte is argument and it is entered into the parameter i.e. drink which we set in function pramas.
// console.log(order); // you will change the argument and function will use this to show your order.

//Exercise 6.3
// const value1 = 1;
// const value2 = 2;

// let operator = "-"; // variable as it will be changed

// function calculator(a,b,c) {
//       if (c === "-") {
//             console.log(a-b);
//       } else {
//             console.log(a+b);
//       }
// }
// calculator(value1,value2,operator);
//excercise complete

//Excercise 6.4

//   const array = [];
//   for (let i = 0; i < 10; i++) {  // from 0 it will run ten times
//       let value1 = i*5; //1*5=5
//       let value2 = i*i;  //1*1 =1 ; a+b = 6
//       let result = calculator(value1,value2);
//       // console.log(result);
//       array.push(result);
//   };

// console.log(array);

// function calculator(a,b,c) {
//       if (c === "-") {
//             return(a-b);
//       } else {
//             return(a+b);
//       }
// }
// Excercise 6.4 complete

// 29 October 2022 Completed //

                // 05 November 2022 Start //

 // functions will be covered followed by concurrencies
 //this keywords: 
 //Arrow function: advantage(reduces lots of code and makes it readable, syntax bind this keyword to the surrounding). left part input of function and right part output of the function.

//  function name(params) {
  
//  }

//in arrow we dont have function keyword
// (params) => statement // we have parameter and if no, then keep it empty

function add(x,y) { // simple function 
  return x+y
}; // 
add(1,2);// this is how we call it, context of this function is global object

// (x,y) => x+y // arrow function syntax

let add2 = (x,y) => x+y // calling arrow function
add2(1,2); //calling arrow function

const student = {
  firstName: "Zahid",
  lastName: "Hussain",
  fullName: function() {return this.firstName +this.lastName}
}
// console.log(student.fullName()); //this here refers not to global function

//this context in arrow is different from simple function

//recursing(recursive) function is similar to loops

// function getRecursive(nr) {
//   console.log(nr);
//   getRecursive(--nr); // same function recalled by decrementing the parameters
// }

// getRecursive(5); //infinite recursive will run in negative direction due to decrement.

// function getRecursive(nr) {
//   console.log("Started function iteration: ", nr);
//   if (nr>0) {
//     getRecursive(--nr); // first this happened
//   } else {
//     console.log("Recursion completed"); // this this
//   }
//   console.log("Function Ended:", nr);// then this
  
// };  // starts with outer then inner then outer again 

// getRecursive(5); // 5,4,3,2,1 will be outcome

//exercise 6.6 ///
//factorial: 7!==> 7*6*5*4*3*2*1 we can use recursion and reitertive rule

// function factorial (nr) {
//   console.log(nr);
//   if (nr ===0) {
//     return 1
//   } else {
//    return nr * factorial(--nr)
//   }
// }
//  console.log(factorial(4));
 //this above is a recursive function 

 // Assignment: chapter project: create a recursive function

 // Exercise set timeout order
// const one = () => console.log(`one`); //this is arrow function and we saved in const one and can be called anytime
// const two = () => console.log(`two`);
// const three = () => { // curly for multi lines of codes
//   console.log(`three`);
//   one();
//   two();

// };

// const four = () => { // arrow function 
//   console.log(`four`);
  // setTimeout(one, 2000); // it is a time and you give two values and you run function after some time and when 
// three();
// }
//  four();
 // chapter project finished // function completed
 
 // chapter 13 'Concurrency' doing task in parallel or simultaneously
 // three concepts for this are callbacks, promise and async awaits
 // callback is used in other function as argument

 // CALL BACK
 function doFlexibleStuff(callback) { // callback is representing function 
  callback(); /// this is a callback function, we use parantheseis for this // param is function and we are calling that funtion by using its param
 } // Calling function and we can call different function here and we are calling from other function

const function1 = () => console.log("Hello from Function 1");
const function2 = () => console.log("Hello from Function 2");
// doFlexibleStuff(function1);// we are passing funtion 1 and we are calling above function i.e. executestuff()
// we passed function as a parameter. 
// doFlexibleStuff(function2);// when input goes into parameter it runs

// Another Example 

// student in Pakistan, gets 95%. Comment should be "You got an ", grade ": Zaabardast!"
// student in US, gets 95%. Comment should be "You got an ", grade ": Perfect!"
// function pakistan(grade) {
//   switch (true) {
//     case grade === "A+":
//     console.log("You got an ", grade, ": Zabardast!");
//       break;
//     case grade === "A":
//       console.log("You got an ", grade, ": Boht Umda");
//       break;
//       case grade === "B":
//       console.log("You got a ", grade, ": Behtar Hy");
//       break;
//       case grade === "C":
//       console.log("You got a ", grade, ": Theek hy!");
//       break;
//       case grade === "D":
//       console.log("You got a ", grade, ": Mehnat Karyn");
//       break;
//       default:
//         console.log("An", grade, ": Agli Bar Koshish Karyn!");
//   }
// }

// function unitedStates(grade) {
//   switch (true) {
//     case grade === "A+":
//     console.log("You got an ", grade, ": Perfect!");
//       break;
//     case grade === "A":
//       console.log("You got an ", grade, ": Excellent");
//       break;
//       case grade === "B":
//       console.log("You got a ", grade, ": Good Job");
//       break;
//       case grade === "C":
//       console.log("You got a ", grade, ": Ok!");
//       break;
//       case grade === "D":
//       console.log("You got a ", grade, ": Need to improve");
//       break;
//       default:
//         console.log("An", grade, ": Oops. Try again!");
//   }
// }

// function getGrade(percentage, callback) { // we give it two parameters. so callback will tell which upper to run
//   let grade;
//   switch (true) {
//     case percentage >= 90:
//       grade = "A+"
//       break;
//       case percentage >= 80:
//       grade = "A"
//       break;
//       case percentage >= 70:
//       grade = "B"
//       break;
//       case percentage >= 60:
//       grade = "C"
//       break;
//       case percentage >= 50:
//       grade = "D"
//       break;
//       default:
//         grade = "F"
//   }
  // callback(grade);// when we got grade we passed it on to callback function - 1st step and when we passed it that went to upper function 
// }; // this is main function 

// getGrade(95,unitedStates); //callback

//you got percentage and you have to calculate your grade and also based on it we wanted to know the comment/feedback.
// main function is getGrade and we have 2 parameters i.e. percentage and callback; it is defined in upper function.
// In concurrency we are doing things simultaneouly and callback is part of it. 

//Excercise 13.1 //

// setTimeout(() => { // one function and time it takes
  //  console.log("Hello")
// }, 3000);// set time out function. function is executed after set time
// setInterval(() => {
  // console.log("Hello")
// }, 1000); // it will keep running after set interval but set time out will run once
// const hello = () => console.log ("Hello");
// setInterval(hello, 1000); // another way of printing interval

function greet(fullName) { // built in function that work with callback. one is settimeout and setinterval
console.log(`Hello ${fullName[0] + ' ' + fullName[1]}`); // template literal 
}
//assignment use this with for loop

function mainFunction (userName, callback){
const name = userName.split (" ")
// console.log(name);
callback(name);
}

mainFunction("Zahid Hussain", greet)

  // Promises//

  //function that returns an object; we can attach callback, its initial function is dependend on output. and it is sequence based programming and step are involved. 
  // benefits of promises; improves scores readability, better handling of Async opertions, better float condiiton in Async and better Array handling
  // fulfilled, rejected, resolved, pending 

  // const promise = new Promise (function(resolve, reject) {
    // Execution
  // }) // basic syntax of promise. it has one function and callback function in argument. if everything goes normal it is resolve or reject. and then we use .then and catch consumer and they are methods or promise.

//   promise.then  (function (result){// it is a method when upper promise is executed then you can execute other function when first is successful
// // On success
//   }, function (error) {
//     // On error
//   })
// const promise = new Promise (function(resolve, reject) {
  // reject (`Bad Javascript!`);//  depends on what happens in promise we get the outcome from below function
// resolve (`javascript!`); // we can use arrow function as well here
// }); // explicitely we use these two parameters
// promise.then  (function (result){
//   console.log("success: ", result);
// }, function (error) {
//   console.log("error: ", error);
// })
// suppose we did not reject explicitely but there was error in code
        // in this case catch will be used
// promise.catch  (function (error){
//   console.log (error);
// });  // syntax for catch

// promise.then(function (success) {
//   console.log("success: ", success);
// }).catch(function(error){
//   console.log("error: ", error);
// });

   // Excercise 13.2 PROMISE ///

const promise = new Promise((resolve, reject)=> reject ("Something went wrong"))//resolve ("Start Counting"))

const counter = (value) => console.log(value);

promise.then(value => {
  counter(value);
return "one";
})
.then((value) => {
  counter(value);
return "two";
})
.then((value) => {
  counter(value);
return "three";
})
.then((value) => {
  counter(value);
}).catch((error) => console.error(error));
//we should always have a catch in Promise to get error

// 5 November 2022 // Class ended

//12/Nov/22 class//

/// Promise, Await, Async //
//e.g. imran bhai doing many tasks at the same time, cooking, baking, taking care of kids etc.
// three outcome of async function; if nothing returned undefined, resolved and promise return
//Aysnc function works with await operator and is only used in async body and returns promise resolved function
// 'await' is used in below async function. if resolve value is returned then function can execute.
// E.g.Imran has to make breakfast for his wife and kids and he is getting order to make coffee, egg and paratha at the same time and he needs to fulfil all simultaneously.

// const myPromise = new Promise ((resolve, reject) =>{
//       resolve("i am resolved.")
// })
// async function myFunction (){
//     const resolvedValue = await myPromise;
// console.log(resolvedValue);
// }
// myFunction();

// Async Order Imran Bhai Example
//item is parameter,

// function breakfastOrder(item) {
//       return new Promise (( resolve) => {
//             setTimeout(() => {
//                   resolve (`${item} is ready.`);
//             }, 3000)
//       });
// }

// async function Order(item) {
//       async function Order(item) {
//       const order = await breakfastOrder(item); // await works with asynchronous function because we need to wait.
//       console.log(order);
// }

// Order("Omelette");
// Order("Paratha");
// Order ("coffee");

//exercise 13.3 Async function

// let counter = 0; // global counter
// function incrementCounter(value) {
//   // promise was made, global counter increment is this
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       counter++;
//       resolve(`x value = ${value} counter = ${counter}`);
//     }, 1000);
//   });
// }

// async function asyncFunction(value) {
//   console.log(`ready ${value} counter = ${counter}`); // cosntant was made and than promise was called
//   const resolvedValue = await incrementCounter(value);
//   console.log(resolvedValue);
// }

// for (let i = 1; i < 4; i++) {
//   asyncFunction(i);
// } //  this will run sunchronous function and when async time comes then it will appear. execution for 228 line will take time due to await

//Chapter Project/// Password Checker

// const notAllowedPasswords = ["Password", "Alexander", "PIAIC"];

// function checkPassword(password) {
//   return notAllowedPasswords.includes(password);
// }

// function validatePassword(password) {
//   return new Promise((resolve, reject) => {
//     if (checkPassword(password)) {
//       reject({
//         status: false,
//       });
//     } else {
//       resolve({
//         status: true,
//       })
//     }
//   })
// }

// function checker(password) {
//   validatePassword(password)
//     .then((value) => {
//       console.log("Authorized User");
//       console.log(value);
//     })
//     .catch((value) => {
//       console.log("Reject User");
//       console.log(value);
//     });
// }
// checker("Alexandar");
// checker("Imran"); // review the example their is minor problem in final result.
// Review the example above. 

//Imran has to do all work simultaneously
//simultaneous work is acheivable from callbacks, promises and awaits

//Assignments: Imran will make omellete, coffee, discussion with wife
//instruction: write code to achieve the requirement
// start making breakfast - start making omelette and this should take 5 second. then  after 2 second you will start making paratha and this will take you three minutes.
//start making coffee after 4 second and it will take 1 second to make the coffee.. all items will return on same time.
// while making breafast ask your wife what she wants for lunch - he or she will respond after 10 second. 
// then ask her where to go for dinner, response should be recieved immediately. 
//create node.js function with call back function 
//same steps with promises
//same steps with async await

//practice loops, for  loops, while loops, variable, local and global variables, callback functions, arrown functions, promises, async awaits.

