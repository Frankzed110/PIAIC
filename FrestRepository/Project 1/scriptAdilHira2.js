//Class taught by Adil and Hira (First Lecture)
// let str1 = "Zahid"; 
// console.log(str1)
// piece of info and we have data type and this type is called string 
// // texts e.g. teacher name, different type of info like text, number, bullion (true and false). name is string, age is number, if teacher is good or bad it is bullion. 
// let teacherName1 = "Alexander";
// //anything in quotations will become strings and you cannot do operations in strings.
// console.log (typeof teacherName1)
// let teacherage1 = 10;
// console.log(typeof teacherage1)
// let teacherage2 = true;
// console.log(typeof teacherage2)
// let maryamage = 
// console.log(typeof undefined)
// let teacherfavouritestudent = null;
// console.log(typeof teacherfavouritestudent)
//Operators Now. 
// Airthematic operators
// let number1 = 10
// let number2 = 5
// console.log(number1 + number2)
// let firstName = "Zahid"
// let lastName = "Hussain"
// console.log(firstName+lastName)
// same applies to subtraction, multiplication * and division /.
// Exponents 
// let number1 = 19
// let number2 = 4
// console.log(number1 % number2)
//3 is reminder so in modulus it will appear as 3
//++ and -- will add or substract from given number if placed before value. operations follow maths rule i.e. brackets first and then DMAS rule.
// let number1 = 19
// // let number2 = 4
// console.log(--number1) practice assignment operators. comparison operators return booleans only. they are conditions. e.g. if his age 18 make him CNIC. or if not equal to 18 dont make him card with <,> or<=,>=. return will be boolean always.logical operators are also conditions. either of true conditions will be true or one. AND / OR will be used. e.g. give admission to those who are 15 or have graduation, so we use OR. e.g. above 18 and did masters, we use AND. 
// let number1 = 18
// let number2 = "18"
// console.log(number1 === number2)
// string and number are different so not equal. === means value and type.  if == then it will be true. 
// let number1 = 18
// let number2 = "18"
// console.log(number1 !== number2)
//now we are checking for not equal with !==. one equal is value (assignment operator) only, == is comparison, === data type
// let number1 = 18
// let number2 = 20
// console.log(number1 < number2)
// for greater and less than same thing.
// let number1 = 18
// let number2 = 20
// let number3 = 15
// console.log(number1<number2 && number2>number3)
//&& shows And
// let number1 = 18
// let number2 = 20
// let number3 = 15
// console.log(number1>number2 || number2<number3)
// || tell about OR
// let number3 
// console.log(!number3)
//! tells if it has value or not. if no value it says true and if any value it says false. 
/* Adil and Hira 15 October Class//
topics to be covered; node.js/arrays/if and add statement in JS and also a project i.e. rock paper and scissor 
Introduction - Node.js
practice  JS - Important thing: learn critical thinking (whatever you think you can do)
before Node.js java was not used for backend. it is run time environment and execeute anything in JS. For JS you need environemnt like either browser or Node.js. In browser we write html, then integrate javahtml code but to simolify things we use node.js only. it is not library or framework. it can be simply used from command prompt, terminal and VS code.initially, html (client), backend(php,java) but now with same javascript you can do all from javascript.one language for both client and server
Applications from node.js uber, netflix, linkedin etc. efficient and lightweight, allow developer to code outside browser and both front end and backend canbe done at same time
Node.js is an environment. 
to make directory write mkdir (folder name), then cd (folder name), then npm init: after that press enter for all items and package.json file will create in your directory
When Package file created now you can write JS here
M in mjs refers to module
WE created two node folders i.e. Zahid and myUserInputProgram and other details are in them. Also, Prompt sync and other tasks completed in index.mjs under (myuserinputprogram)
New topic:; Arrays; inlcuded in slides and shared
variable are containers and you store value and Array allow you to store list or more than one value. can be of one data type or different in arrays. elements can be added and removed
Details of Array in Array directory in Project 1
*/
// let a = 5; let b = 70; let c = "5"; b--;
// console.log(b); // ++ add one into 70 and -- minus one
// let firstNum = 5; let secondNum = 10;
// firstNum++;
// secondNum--;s
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 5 + total--;
// console.log(total2);
//install Git then take url from github and terminal or command promot
//cd document/git
//git clone url
//source control is of github
//add file gitignore (all these files will  ignore); e.g. node_modules