//since we have installed prompt sync from library now we can proceed
import PromptSync from "prompt-sync";
//this will import promp sync from library that we have installed 
const prompt = PromptSync();
// //we made const "prompt" and we are called promptsync() function here. whenever we will call prompt it will use prompt-sync library
//  var name = prompt("What is your name?");
//  console.log(name);
 //it will take input when run in terminal, when answered it will re-appear
//New: remember keep import and const (prompt) as it is don't comment out
const num= prompt("Enter a number:");
// console.log('Your number + 4='); // this is not write wa because it is in strings and will be shown as it is that's why we will change it
console.log(Number(num)+4)
//whatever input we are getting in (num), we are converting it into Number and adding 4 into it.


