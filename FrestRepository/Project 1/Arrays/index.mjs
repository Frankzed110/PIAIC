//Add, replace delete examples
// I tried to make dir in drive C from terminal but it was not fetching VS code and Project 1 from it? Why?
// const array1 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//each item like "Sunday" is element and value for 1st is 0 and it increases gradually.
//to get value
// console.log(array1[0])
// //this will give us sunday (0)
// console.log(array1[3]); //we will get wednesday
//this way we access data from arrays
//if we change data in array this will change in outcome as well.
//change sunday to Sun.
// now to over write the value so to correct Sunday which is SUN now.
// array1[0] = "Sunday";
// console.log(array1[0]);
//what if we don't know how many elements are there in array?
// console.log(array1.length);
// it shows 7 because with built in  property of length we get this no. of elements in any array.
//adding element into array; first make empty array
// const daysOfWeek=[];
//we are over writing elements in array not array itself that's why we can use constants.
// console.log(daysOfWeek);// this will give empty array
//use builtin push for adding element 
// daysOfWeek.push("Sunday");
// console.log(daysOfWeek);
// daysOfWeek.push("Monday");daysOfWeek.push("Tuesday");
// console.log(daysOfWeek);
// push  will add each subsequent value at the end of array element alreadt there
//if we forget monday for instance and we add later the sequence will disturb
// daysOfWeek.push(1);// refer to line 52 for details
// daysOfWeek.push("Sunday");daysOfWeek.push("Tuesday")
// console.log(daysOfWeek);
//in such case we will use splice methed instead of push method
//in splice method we first state position like, 0/1/2 and then if we want to delete anthing which we dont want to in this case and then data we want to add
// daysOfWeek.splice(1,0,"Monday");
//this will add monday exactly after sunday
// console.log(daysOfWeek);
//Add another array
// const daysOfWeek2=[5,6,7,"Wednesday","Thursday", 1000]; //refer to line 47 for addition of 1000; 5,6,7 are added with ref to line 57
// console.log(daysOfWeek2);
//now we want to combine both arrays
// console.log(daysOfWeek + daysOfWeek2);
// values will be joined but it will not be in array so we will do the concatonation method
// console.log(daysOfWeek.concat(daysOfWeek2));
//now you will get complete array
// we can make another array with added days of week in previous statments 
// const allDays = daysOfWeek.concat(daysOfWeek2)
// console.log(allDays)
//suppose we have random value i.e. 1000 and this is bad data and we have to remove it
//we have to remove 1000 now and we will do this with Pop method(inbuilt); this will remove any last value
// allDays.pop()
// console.log(allDays);// this way we removed the last data i.e.1000
//But if we want to remove first value; we will add value before sunday for e.g. 1
//this we can do with shit inbuilt method; this will remove first method
// allDays.shift();
// console.log(allDays); //1 added in line 29 is now removed due to shift method
//we used pop and shift to delete from start and end but what if, you want to delete from between like we used splice to add data in between.
//for e.g. we need to remove "5" or more or any other unwanted data
// allDays.splice(3,3);//3,3 means data to be removed start after 3 and 3 onwards to be deleted.
// console.log(allDays);// splice can be used to remove data in many ways
//how to find value in array
// const classDays = ["Sunday","Monday","Tuesday","Wednesday","Saturday"];
// console.log(classDays); // if we want to know that do we have class on thursday we can find it
// we will use find method; it will be executed on all data of array and will find it
// classDays.find(function(e){e === "Thursday"});
// console.log(classDays.find(function(e){e === "Thursday"}));
// return is undefined it means not in array; do it for something which exits in array
// console.log(classDays.find(function(e){e === "Wednesday"}));// Adil find some confusion in this  tried with new sequence
// console.log(classDays.find(e => e === "Monday")); // now we can find any value
// when you have data in array we can sort it too.
// let numarray = [0,1,11,2,60,3,42,4,90,5,6];
// numarray.sort();// will be used for this
// console.log(numarray);
// it sorts in series i.e. 1 series first, then 2 series. but to get exact sequence we need to use funcions
//Now, reversing in arrays; this will make last value first and first value last
//called inverse of array
// classDays.reverse()
// console.log(classDays);// values will reverse
//Now, multi-dimensional arrays; which contains another array
// const array2 = [1,2,3]
// const array3 = [array2,array2];
// console.log(array3);
// array3(0);// to get first element of array3
// console.log(array3[0]);// to fetch data from element 
// console.log(array3[0][1]);
// Arrays are complete; simple list; array always have square bracket and it is their represetation
           //Now Objects//; collection of data it is not simple list but it has properties that describe it
//but objects always have curly {} brackets and it is their representation; object always have some properties
// const student ={
//     rollNumber:"PIAIC123",
//     firstName:"Zahid",
//     lastName:"Hussain",
//     courses:["web3.0","Cloud"],
//     address:{
//         city:"karachi",
//         country:"Pakistan"
    // }
// } // you have not array and object into object and same can be done in arrays, like you can add object into arrays
//now, how to access data from object
// student.rollNumber // it will go to student and with dot get inside and get roll no.
// console.log(student.rollNumber);
//updating roll number
// student.rollNumber = "PIAIC321"
// console.log(student.rollNumber);
// to get complete data of student object
// console.log(student);
//we can structure data like arrays and objects; for e.g. we add courses (line 92) to object student.
       //Assignment: Manipulating an array (chapter Project from Book)
 // Next chapter  Logic Statements in separate folder
//Book exercies
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.pop();//removes last item
console.log(theList);
theList.shift();// first item removed
console.log(theList);
theList.unshift("FIRST");// added FIRST to start of array
console.log(theList);
theList.splice(3,0, "hello World"); // first we will write place of variable and the 0
console.log(theList);
theList.splice(2,1, "MIDDLE"); // third index value and also eats the item that was in its place otherwise if 2,0 it would have shifted the value to right. 
console.log(theList);
theList.push("LAST");
console.log(theList);
// Pg. 68 of book: Manipulating an array completed (splice method understood)




 























