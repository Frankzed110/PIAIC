// Daniyal 24 Oct 22
const fruitName =["banana", "Apple", "Grapes", "Watermelon"];
fruitName.splice(2,0, "kiwi");// add and deletes items in its place
// console.log(fruitName);
// fruitName.shift();
// console.log(fruitName);
// const fruitName2= fruitName.slice(1,2);//slice elements and return the values in variable.
// console.log(fruitName2);//gives return to us i.e. it is returned from array
//once sliced we can use this sliced array then and original array will remain as it is.
  // objects
// syntax: we use curly brackets {} ; model is key  and honda city aspire is value
// let saloonCars = [{
//   model: "Honda city Aspire 22",
//   Yearofregistration: 2022,
//   color: "laurel white",
//   "engine-year": 2020,
// },
// {
//   model: "corolla",
//   Yearofregistration: 2022,
//   color: "black",
//   "engine-year": 2021,
// },
// {
//   model: "Alsvin",
//   Yearofregistration: 2019,
//   color: "Pearl White",
//   "engine-year": 2020,
// },
// ];
// console.log(city22["engine-year"]);// for "engine-year", we use appostrophe for two words and while printing use square bracket.
// console.log(saloonCars[1].model);
  //Increment and decrement: Post and Pre
   
  // let a0=1
  // a0++
  // let b0 = a0++ //+ a++; // (post increment) before b all values of a will appear in b and a++ in b will not appear but if we call a now it will appear; upto here b=2 and a=3
  // console .log(a0);
  // console .log(b0);
  // a++ ; //one increment
  // a++
  //pre increment now
// let a=1
//   ++a
//   let b = ++a
  // console.log(b); // now in preincrement we see the value it takes was of a after opertion applied not just a. 
  // console .log(a);
// pre Decrement 
// let a1=1
//   --a1
//   let b1 = --a1
//   console .log(a1);
//   console .log(b1);
//post Decrement
  // let a2=1
  // a2--
  // let b2 = a2--
  // console .log(a2);
  // console .log(b2);
//LOOPS
   //e.g. properties of videos are stored in  array and you have plenty of things to be printed; same thing again and again.
//syntax; (For Loops); we start with for;round and curly brackets. whatever in curly will execute
// i is varaible, then 1>3 is condition (and it is true) and then when condition true it will add one i.e. i++
// for (let i=0; i<=3;){
//   console.log(i)
// console.log("Hello Worldl")
// }// with every loop it checks condition and as long as conditon holds true it will keep on giving output and loop stops.
// all items for loop are important you cannot leave anything or loop will be played infinite times.
// for (let i=0; i<3; i++){
//   console.log("Hello Worldl" +" "+ i)
// }

// var name1 = "zahid";
// console.log(name1);
//Daniyal's class 24/oct/22
// forloops fruits example(avoid repetation of codes so we use loops)
/*
*/
// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// for(let i = 0; i <= 4; i++) {
//     // console.log(cleanestCities[i]);//everytime loop is played the name of city changes. (cities are in array but we printing it with loop)
//     if("Islamabad" === cleanestCities[i]) {
//         console.log("it is one of the cleanest cities" + i);
//         break; // can be used in switch statemets and iterations only; the moment condition is met we break it and it wont replay the loop any further; in real life you might have lots of values
//     }
// };
// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// let matchFound = false;
// for(let i = 0; i<=4; i++){
//     if("Islamabad" === cleanestCities[i]) { //index no [i]; this will keep on changing with loop since it is dynamic. 
//         matchFound = true;
//         console.log ("it is one of the cleanest cities");
   
// }
// }
// if (matchFound === false){
//     console.log ("it is not on the list");
//    }

// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// // console.log(cleanestCities.length); we are using it in place of i condition (whatever the lenght will be it falls in condition now//too know lenght of array and how many times we must run the loop
// // even if we add/push more values in array it will be adjusted by lenght method into condition
// for(let i = 0; i<=cleanestCities.length; i++){
//     if("Islamabad" === cleanestCities[i]) { //index no [i]; this will keep on changing with loop since it is dynamic. 
//         console.log ("it is one of the cleanest cities");
// }
// }
          // Nested Loops
// for(let i = 0; i<=4; i++){
// console.log("parent");//after one parent,nested loop will start, then again parent will start. when child loop ends then parent starts again.
//     for(let j =0; j<=4; j++){
//         console.log("Child");
//         // console.log("Hello"," ",i, " ",j)
//     }
//     // console.log(firstName[i])

// }
// let firstName = ["Zahid", "Mesum", "Sohaib", "Umair", "Jadoon"];
// let lastName = ["Hussain", "Ali", "Ahmad", "Satti", "Khan"];
// let fullname = [];//empty array
// for (let i =0; i<firstName.length; i++) {
//     for(let j=0;j<lastName.length;j++) {
//     fullname.push(firstName[i] + lastName[j]);
//     }
// }
// console.log(fullname);// parent loops starts then child loop then ends accordingly and again starts until the condition are satisfying. 

// let firstName = ["Zahid", "Mesum", "Sohaib"];
// let lastName = ["Hussain", "Ali"];
// let fullname = [];//empty array
// for (let i =0; i<firstName.length; i++) {
//     for(let j=0;j<lastName.length;j++) {
//     fullname.push(firstName[i] + lastName[j]);
//     }
// }
// if(fullname === "ZahidHussain") {
//     console.log("Friends")
// }

// console.log(fullname);

// let firstName = "zahid"
// firstName.toUpperCase()
// console.log(firstName.toLowerCase());
//title case
// console.log(firstName[0].toUpperCase() + firstName.slice(1));
//class completed 24/oct/22



                  // 31st October Class //

                  

//   let text1 = "Zahid"
// console.log(text1.length); // this is property not function. thats why we dont put brackets infront of it. 
// empty string has lenght 0
// let cityToCheck = "pakistan"
// let firstChar = cityToCheck.slice(7,8).toUpperCase(); // slice is a method
// console.log(firstChar);// toUppercase is method thats why we put brackets()
//
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let month = prompt("Enter a month" + " ");
// let charsInMonth = month.length;
// if (charsInMonth > 3) { // for one statment no need to put into brackets but for multiple put it in bracket. 
//   let monthAbbrev = month.slice(0,3);
//   console.log(monthAbbrev)
// }
let text = "I am a Citizen of Pakistan of Asia."
let wordIndex = text.lastIndexOf ("of"); // for first "of" indexof then last "of" we use lastIndexof
// console.log(wordIndex); // if not value found it will give -1
//index and lastindexof is case sensitive we must use cases as it is i.e. capital and small but we can  make whole statement to lower or upper case
// we can use negative values too in slice
    //CharA //
let text1 = "Zahid is a boy";
let firstChar = text1.toUpperCase().charAt(12); // in index we give value but in CharAt we give index rest is same
// console.log(firstChar);

let text2 = "Zahid is an intelligent boy";
// let result = text2.replace("an intelligent", "a shrewd");
// console.log(result); // it is case sensitive; can be used in if condition 
//W3schools is recommended for practice

let text3 = "Zahid is a smart boy with a smart city car and Smart Tablet"
// let result = text3.replace(/smart/gi, "red"); // we use regex or Regular expression for replacing all similar values. and 'g' here means global. also, to make it insensitive as we see that last Smart is not replaced due to S capital so we write i with g in regex.
// console.log(result);// it is also case sensitive 
// strings methods are complete//


      ////// Maths //////

//Rounding Number//
// console.log(Math); // built in object in javascript and to access the properties/methods of this object we will type dot(.) and it will appear the list. 
// in the list some will be properties i.e. values only and some will be methods i.e. functions. 
// call properties/methods by mathdot(.)

// let score = 0.5752
// let numberRoundof = Math.round(score);
// console.log(numberRoundof); // since numbers is returned we have properties and methods related to number appear here but if there was string so we had thing related to strings

// let a = Math.ceil(0.60); // rounds up (not round off) to nearest integar
// let b = Math.ceil(-4.40);
// console.log(a+b);//-3

let c = Math.floor(-4.40); //-5
let c1 = Math.ceil(-4.40); // rounds down //-4
// console.log(c, c1);

//math.random
let d 
= Math.random(); // will never become 1 unless we multiply with word
// console.log(Math.round(d*100));// *10 (1-10) : *100 (10-100)

// string to Number //
//parseInt
let x = parseInt("10"); //10
let y = parseInt("10.00"); //10 it will round off automatically
let z = parseInt ("10.33"); //10 round of (whatever value after decimal that is not considered)
let m = parseInt("Hello"); // NaN (not a Number)

// console.log(x,y,z,m)

//parseFloat// values after decimal are alse considered in this method
let x1 = parseFloat("10"); //10
let y1 = parseFloat("10.00"); //10 it will round off automatically
let z1 = parseFloat ("10.33"); //10.33 round of
let m1 = parseFloat("Hello"); // NaN (not a Number)

// console.log(x1,y1,z1,m1)

//with Ctrl+d you can select all similar items 

//converting string to number and number to string in new version of javascript

//string to Number
let x2 = Number("10"); // 10
let y2 = Number("10.00"); // 10
let z2 = Number ("10.33"); // 10.33
let f2 = Number (true);// 1
let k2 = Number (false); // 0
let m2 = Number("Hello"); // NaN

// console.log(x2,y2,z2,f2, k2, m2)

//string to Number
let x3 = String(10); // 10
let y3 = String(10.00); //  10.00
let z3 = String (10.33); // 10.33
let f3 = String (true);// true
let k3 = String (false); // false
let m3 = String("Hello"); // Hello

// console.log(x3,y3,z3,f3,k3,m3)

//Another method for string conversion is .toString

let j1 = 125
let j2 = j1.toString();// adding bracket is important because it is a method
// console.log(j2);//above method of string is handy

let add = 2 + "2"; // at the backend JS is converting first 2 to string and the Answere is therefore, 22. we were doing conversion in previous examples but here it is
// console.log(add);// due to the + sign JS coverts the first number into string. it is coverting it into string and concatination

let sub = 2 - "2"; //if we have alphabet in places of 2 then NaN will appear
// console.log(sub); // 0 will be answer because JS will convert second "2" into number and then 2 -2 = 0

// controlling the length of decimals //
// toFixed(); method converts the number into string and rounds of number
let total = 25.6765547
let netTotal = total.toFixed(2); //2 in bracket means to how many decimal places we will keep it
// console.log(typeof netTotal);//25.68 ; if no values passed it will round of
//toFixed() changes the number into string. Also, if we have fewer values after decimal and we type more than given numbers in method after decimal then for each extra 0 will appear.

// Constructors//
//they construct object and we have built in constructors and they are functions. 
// we add new to call constructor and first name is always Capital
// among them are: new String()

let l = new String("Zahid");// Z = 0, a = 1 and etc. so we instead write "Zahid" only. 
// console.log(l);
//out of 7 primitive data type  we have 3 in constucts (slides, rest are also there when needed) and these 3 like strings, number and Boolean are least used
//Object, Array and Function are used also

//Date construct we practice // date object let us work with dates
 // getting the current date and time

const date = new Date(); // new is constructing object and without new it will not run.
// const date1 = new Date("2000",11,31);
// console.log(date1);
// console.dir(date); // we can see the prototypes as well
//these are reserve words and prototypes are something when in console we add . and list appears they are prototype inherited and built in JS


        //7 November 2022 ///
//////////////////////////////////

// Functions, This, Scopes and Concurrency 

//Dates
//built in constructors help in making objects
//new date gives current date. time, month and year even seconds
//new is always used with cosntructor function 
// const date1 = new Date(2022, 11, 15, 15);
// console.log(date1);// for calling, bracket after method is important/
// console.log(date1.getTime()); //miliseconds
// console.log(date1.getFullYear()); 
// we have different methods in date constructor. it makes date object and can be seen from console.dir(date).

//in date constructor we can pass parameter

 // FUNCTIONS

//We need to show greeting messages on a website on different locations. and if it was in same place we used loops.
//on same page 4 greetings and 3 pages. and when we make changes it should reflect at once and it should be reusable and we have the rule of don't repeat yourself.
//use code and call it when used

//syntax

//we start with keyword function, then name (work/action/verb)
//() parameters are passed {} we use it for code to console we have to call the function and it is done by using its name().
// In JS function performs a particular task
// function getMeWater() {
// console.log("Zahid, welcome to our Website")
// }
//   getMeWater(); 
  // function declared, initilaized and to invoke we call the function and everytime we call it it will execute.
// everywhere we called it function will invoke. without invoking it will not execute.

// Parameters and Arguments///
// we can also instead make a variable and use that variable everywhere. But function performs more than this task.

// function getMeWater2(AnotherUser, User3, User4) {
//   console.log(AnotherUser + ", welcome to our website");
  // console.log (User3 + ", Welcome to our website");
  // console.log(User4 + ", Welcome to our Website")
  // } 
    // getMeWater2("Arif", "Ali", "Kamran" ); 
    // getMeWater2("Ali");
    // getMeWater2("Kamran");
    //"Arif" is argument here. we passed value of parameter from argument and we used that parameter in console.
//we are calling function by variable arguments and it is taking effect in parameter. so same function and at different place we have different names(parameters),because we are changing argument. 
    // we can add more parameters and pass them via arguments. 
// now suppose someone else visits the website and its not Zahid, so his/her name should print here instead.
//in this case now when someone else visits we will use parameters. 
// in above example we have used name as parameter and used that name in console as well but where we will input the name? this we will pass in brackets where we are calling the function for invoke. 

// Funtion Return ///
/////////////////
//for concatination we use backtick literals. to join two things together. we can concatinate string with parameter. for parameter we use $ sign along with curly bracket to make it interactive.
// function getMeWater3(name) {
//   return `${name}, welcome to our Website`
//   }
//     let return1 = getMeWater3("Khizar"); 
//     console.log(return1);

//Another Example of funtion return
// function addTwoNumbers(x,y) {
//   let result = x + y
//   return result
// }
// let result = addTwoNumbers(20, 60)

// if(result>100){
//   console.log("You are finally learning it.")
// } else {
//   console.log("Keep it up")
// };

// for any value that you want to get you will return it and use it in subsequent function. this is important because inside function its scope is limited and not global and you must get it from return
//funtion when we are calling i.e. getMeWater3(); is similar to alert in JS which is built in but this here is custom one. and similarly we have prompt function which is again built in
//when we store the value we get from prompt is actually the return
// for return we must store the value inside variable and console it then
// return will always come at last because otherwise JS will not read the console. so it must come at the end of function.
//after return statement, JS will stop executing return value is returned back to the caller.


//Default value 
//When we dont pass anything in place of name then undefined will print
//but we dont want to see the undefined cocming when nothing is mentioned on place of name and we will set some default value. we will right "hello" with the name in function parameter with = sign
//so when nothing entered default will print and when string entered it will replace default.
// function getMeWater4(name = "Hello") {
//   console.log(`${name}, welcome to our Website`)
//   }

  // getMeWater4();
  // getMeWater4("Zahid");

  //Arrow funcion ///
      //////////////////

//introduced in JS in ES6; shortens the function syntax
//single link execution this way executed
// const getMeWater5 = (name) => console.log(`${name}, welcome to our Website`)
//for single line return we dont write return
// const getMeWater5 = (name) => `${name}, welcome to our Website`

//   const return1 = getMeWater5("Zahid");
//   console.log(return1)
  // getMeWater5("Zahid");

          //What is this?//
            /////////////////
// iN JS we have keyword called 'this' and it is very important
//global object is window from where alert and prompt is coming and this is also equal to window and on global level it will stay true but if used in object level it will be different.
//this refers to an object, and how this is invoked object will depend on this.
//in below object we have key and valus and because they are static values we call these properties.
//in below object we are using this inside object. upto ID is properties and fullName is method now here.
// const person = {
//   firstName: "Zahid",
//   lastName: "Hussain",
//   ID: 9090,
//   // fullName: () => {
//   //   console.log(this)
// fullName: function () {
//   console.log(this.firstName + " " + this.lastName)
// }
//   }
// person.fullName()
//context of this matters and if inside object it is equal to that whole object.
//when arrow function used it is giving global output for this. 
//this will turn the function into method and we get the above object as output inside this.and if we now write this.firstName that means firstName inside the object(this)
//in above example "this" refers to person object and now fullName is the method of the person object.
  

//spread operators and Rest Operators//
////////////////////////////////////

//In JS SO (...) plays the role of copying all or part of an existing array or object into another array or objec
//concatinate with other. and syntax of SO is that we put ... three dots
// array is copied inside SO. it is not copying array but element inside array. 
// const spreadOperate = [1,2,3];
// const spreadOperate2 = [4,5,6]
// console.log(...spreadOperate, ...spreadOperate2);

// const spreadCombined = [...spreadOperate, ...spreadOperate2]
// console.log(spreadCombined);

// Rest Prameters//
//... used inside parameters is called Rest parameters. see below example
//if we console the Rest parameter we will get an array
//whatever parameter we pass will be put in array. same is example of console.log(); we add unlimited value and it is an example of Rest Parameter.
// const restParameter = (...numbers) => {
//   let result1 = 0
// for (let i=0; i < numbers.length; i++) {
//   // result1 = result1 + numbers[i]
//   result1 += numbers[i]
// }
// return result1
// }

// const result = restParameter (0,1,2,5,56,78,333)
// console.log(result);
// in above example it is Rest parameter not spread operator.
//+= is adding numbers[i] into result1. we can use it for -/* as well.
//in above case we with each index passing through loop adding it to 0 is result1 variable.


// Asynchronous Event Loop//
//////////////////////////
//JS is single threaded language and has 1 call stack to perform one operation at a time. Call stack is present inside JS engine.
//Call stack works on LIFO principal i.e. Last in first out. first function will pop out of stack at the last 
//JS create GEX i.e. global execution context

function a() {
  console.log("a")
}
a();
console.log("End");

// IN GEC we run whole JS but in EC(execution context) we run specific command. In above e.g. after a() in function the a() i.e. called will be read and EC will be created for its code execution.
//in empty stack memory was created for A() and it was pushed inside it.

//if function is taking time then we use asynchronous behaviour 

console.log('Hi');
setTimeout (function cb1() {
  console.log('cb1');
}, 5000);

console.log('Bye');

// in above example, call stack is empty and so is Web APIs.(console.log, alert) are part of Web APIs.
// line 477 will come into call stack and executes immediately and appears in browser. and it gets pop out and call stack is empty.
//Now we are on line 478, function pushed to call stack and we know it takes time and it is taken to Web API timer function and get pop out and perform on backend.
// timer is running in Web API and line 482 will be run and brought to call stack and executed and when timer of Web API is complete it will be sent to call back Queue. From here Event loop will take the value from callback queue and push it to call stack for execution.
//synchronous messages are pushed out while asynchronous is kept into Web APIs.

//concurrency, parallel//
// alarm is e.g. callback oven and washing machine e.g. by hamza.

 ///Class completed by Hamza and Wania/////

//////////////////////////////////////////////////


          ////////////
       //14 November 2022 //
          ////////////

// cacllback, promises and Async//
const doSomething = (callback) => { // arrow function, when we will call this function we will use this
// console.log("Do Something")
  // callback();// lastly aftger line 311 we callback function here.
}; //with this callback, below function will not run. callback function are those function we pass them as parameters in argument.
// And that callback function is below on line 307. then we pass that function as an  argument of first function.
const doSomething2 = () => {
  // console.log("callback called")
} // this is callback function for upper parameter

// doSomething(doSomething2); // this is how callback function is written
// those function that we run as parameters are called callback functions

// set time out //
//JS is synchronous function as it prints line by line and one by one and this is called synchronous
// if we write a code that takes 10secs and this will stop other codes from running until it runs. this is problem and flow is blocked so for this approach is devised called asynchronous. This will command JS to take all into  call stack and the 10sec code will be taken to another place. and when 10sec code is complete it will come back to call stack and will execute and in a meantime others will execute and it wont block anothing or any line.

//Set time out function//
//in real world we request data from server or database so we use set time


// setTimeout(() => {
//   console.log("Hello")
// }, 2000); // call back function to retrieve this data after certain time

// console.log("First")
// console.log("Second") // first these two logs will print and then set time will run here.
// all codes move to call stack and execute line by line.
// callback and WebAPI make this possible; the Stack will store the time taking code into Browser or web APi. compiler will keep on reading code and take it to stack and stack will determine where it is synchronous or asynchronous and execute accordingly. the codes in Web APi wait inside Event Queue until the stack is empty and then it executes.
// Usama describes perfectly with PPT example.

//e.g. mechanic has my car and when it is corrected he will callback us.

// const loginUser = (email, password, callbackfunction) => {
  // setTimeout(() => {
    // console.log("user logged in: ", email)
  // return email
  // callbackfunction(email)//instead of return email we are using this now.
//   }, 2000);
// }// it did not return anything because we have not called back the set time with another function.
//callback function is requried

// const getUserVideos = (email, cb) =>{
//   setTimeout(() => {
// cb(["video 1", "video2", "video3"])
// }, 3000)
// }

// loginUser("abc@gmail.com", 1234, (email) => {  // (email) onwards is call back function 
//   console.log("User Logged In")
//   getUserVideos(email,  (cb) => ( 
//     console.log(cb)
//     ))
// })// this is callback function  and called callback hell
// console.log(userEmail)
// undefined outcome because set time will go to other stack and that's why we dont have anything to print 
// if outside settime out i return something it will be returned then
// why nothing returned because we did not call back the set time function value
// callback hell is resolved with promises or christmas tree beacuse it takes lots of nested functions. 
// function inside function and depends oneach other and with extending function all are nested and pyramid funtion will become and readability will be affected and to address this we come up with promises.

//and in promises things happen in chain and not dependent.
// what is return//
// for instance prompt function. value we give like what is your name, and we get zahid. this zahid is return and we console it
// const add1 = (a,b) => {
//   let result = a + b
//  return result // whatever result gives will be returned
  // return firstName
// }
// const result = add1(4,8);// so after running result it will return something. and it has to be store also
// if(result < 100){
//   console.log("First")
// }// we return variable from block level so it can be used outside code as well.

// Promise can be fulfilled, rejected or it can be pending. 
//new promise is making object

const promiseFunc = (myMarks) => {
  return new Promise (( resolve, reject) => {
    if (myMarks >= 80){
      resolve()
    } else {
      reject("Failed")
    }
  })
}
promiseFunc(80)
.then (() => { 
  console.log("Resolve Called")
}).catch((status) => {
  console.log(status)
})
const loginUserPromise = (email, pass) => { // an object
  return new Promise (( resolve, reject) => {
    setTimeout(() => {
      if (email === "Zahid@gmail.com" && pass === 1234) {
      resolve(email)
      } else {
        reject ("Invalid Email or Password")
      }
    }, 2000)
  })
}
const getUserVideosPromise = (email) =>{
  return new Promise ((resolve, reject)=> {
    setTimeout(() => {
      if(email) {
        resolve(["vid1", "vid2", "vid3"])
      } else {
        reject ("Please provide email")
      }
    }, 3000)
  })
}
// loginUserPromise("Zahid@gmail.com", 1234)
// .then((e) => {
//   console.log(e)
//   return getUserVideosPromise()
// })
// .then((getUser) => console.log(getUser))
// .catch ((err) => {
//   console.log(err)
// })
// .then (() => console.log ("Called")); // then of previous catch. 
// resolve and reject are two main aspect and they are executed with then and catch.

//Async Await//
//function is converted to Async

const getUserDetails = async() => { // async use await keyword
  try{ // if error occured it will be sent to catch
    const userEmail = await loginUserPromise ("Zahid@gmail.com", 12345) // unless executes do go forward but not to block other but dont go to other function on block, outside it will run
    console.log(userEmail);
   // this will give resolves email here.. async will return email from resolve
   const videos = await getUserVideosPromise(userEmail)
   console.log(videos);
  } catch (err) {
console.log(err) // err getting value from reject
  }
  
 
}
// getUserDetails();
 

// throw send from .then to catch
// New Error will make error object and contain key and values
     /////////////////////////
// 14 November 2022 Class Finished //
    //////////////////////////
