//logic statements can be of different types; these are conditional statements. and if these condition are correct. We use "if" and "else". in case of true "if" and fale "else" and then "ifelse"
//if imran in pakistan he is imran but if in U.S he is alexendar
// let isInPakistan = true; 
// if(isInPakistan) {
//     console.log("Hello Imran!")
// } else{
//     console.log("Hi Alexander!")
// }; // since our starting value was true for he is in pakistan that's why it is imran.
// if will be replace with else if false
import PromptSync from "prompt-sync";
//this will import promp sync from library that we have installed 
const prompt = PromptSync();
// let percentage = 35;
// let percentage = prompt("What's your percentage?");
// if (percentage >= 90) {
//     console.log("A+")
// } else if(percentage >= 80) {
//     console.log("A")
// } else if(percentage >= 70){
//     console.log("B")
// } else if(percentage >=60){
//     console.log("C")
// } else if(percentage >=50){
//     console.log("D")
// } else {
//     console.log("F")
//} // will keep on checking as per input value with if and else if and when non of them matches will enter what ever is in else i.e. at last.
// we can take input from user here ; add prompt sync library
//make changes to let percentage in line 10
//Next: turnery operators
// let percentage = prompt("What's your percentage?");
//>= is "if" condition, ? for "passed" and : "failed"
// percentage >= 50 ? "Passed" : "Failed"; // if the condition was true it will state pass or else fail
// const result = percentage >= 50 ? "Passed" : "Failed"
// console.log(result); // this is used for simple true and false
// Another Example
// let isInPakistan = prompt("Are You In Pakistan?");
// const greeting = isInPakistan ? "Hello Imran" : "Hello Alexander";
// console.log(greeting);
//required output not received change isInPakistan from string to boolean
// const greeting = isInPakistan === "true" ? "Hello Imran" : "Hello Alexander";
// console.log(greeting);//now correct
  // Now switch statement
// let location = prompt("Where are you?");
// in switch its more like if/else but with cases
// switch(location){
//     case"America":
//     console.log("Hello Frankie");
//     break;
//     case"Iran":
//     console.log("Hello Pisar jan");
//     break;
//     case"Pakistan":
//     console.log("Hello Syed Zahid");
//     break;
//     case"Africa":
//     console.log("Hail thy Highness");
//     break;
//     default:
//     console.log("Hello Zahid");
// } 
// then you run it simple the switch case
//it gives all values so to correct it add break like this, break;
// also you add default so if you put anything it will give default value and it is important
// if few conditions do it with if/else otherwise if more do it with switch.
// you can perfrom complicated logics in if/else
// Assignmetn: evaluating number game and Friend Checker game
   // Rock, paper and Scissor Activity 


// let randomNumber = prompt("Enter a number of your choice");
// if (randomNumber == 50){
//   console.log("We are Square")
// } else if( randomNumber < 50) {
//   console.log("You didn't make it, Sorry!")
// } else if(randomNumber > 50){
//   console.log("Wow!You have done it.")
// } else {console.log("Gather some Guts to Play.")}
// Completed Evaluating a number game
let myFriend = prompt("What's your name?")
switch(myFriend){
  case("Hammad"):
  console.log("You are not my Nappy Friend");
  break;
  case("Asad"):
  console.log("You are the studious one");
  break;
  case("Musa"):
  console.log("You are my cousin");
  break;
  case("Naseer"):
  console.log("Yayyy, here is my buddy.");
  break;
  default:
    console.log("Sorry, You are not friend");
}
// friend checker game assignment completed. 
