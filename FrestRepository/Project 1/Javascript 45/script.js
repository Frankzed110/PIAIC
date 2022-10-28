//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var nameuser1 = "Ali";
console.log(nameuser1)
var sentence = "“Hello Ali, would you like to learn some Python today?”";
console.log(sentence);
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let nameuser2 = nameuser1.toUpperCase();
console.log(nameuser2);
let nameuser3 = nameuser1.toLowerCase();
console.log(nameuser3);
// const firstname = nameuser3.charAt(0);
// console.log(firstname);
// const upperFirst = firstname.toUpperCase();
// console.log(upperFirst);
// let remainLetters = nameuser3.slice(1);
// console.log(remainLetters);
// let combined2 = upperFirst+remainLetters;
// console.log(combined2);
function capitalize(ali){return[ali](0).toUpperCase() + ali.slice(1).toLowerCase();}
console.log(capitalize);//????
//https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/

let nameuser4 = nameuser1.slice(0,1).toUpperCase() 
let nameuser5 = nameuser1.slice(1).toLowerCase()
let title = nameuser4+nameuser5
console.log(title)