       ////// 12/Nov/2022

       //synchronous and Asynchronous//
//In web API it will be stacked and will execute after given time and will print
//asynchronous run in background and we use callback here, set time out is also in background and if returned it is gone already. so call back takes the order
//callback mean it is retrived .. synchronous execution are done but Asyncs are done in parallel in the background
// function doSomething(callback){
   
//     setTimeout(() => {
//         // console.log("hello")
//         // return "hello"
//         callback("Egg Ready"); // when consolelog it appeared after 2 sec but when returned nothing appeared but appeared as default but in callback it appeared.

    // }, 4000);// after 2 second it run
// }

// function myCallback (param){
//     console.log(param);
// }

// doSomething();
// let val = doSomething(myCallback);
// console.log(val);
// console.log("end"); // after 2k milisecond hello will come

// make fry egg (e.g.) and when its done it comes with callback.

// function toastBread(cb){
//     setTimeout(()=>{
//         cb("Toast Done");
//     }, 2000);
// }
// function callback1(param1){
//     console.log(param1)
// }
// toastBread(callback1);
//code by Wania
//function declaration 1 // when called this function will pass
function makeFryAnda(callback) {
    setTimeout(() => {
        callback("Egg Fried");
    }, 2000);   
}
//funtion declarartion 2
function toastBread(cb){ // cb can be anything ; 39,41,47 should be same rest values can be change
    setTimeout(() => {
        cb("Toast Done");
    }, 4000);
}
//function invokation
// toastBread(function(para){ // line 40 is in para, line 45 is para
    // console.log(para);
    // makeFryAnda(function(para1){
    //     console.log(para1);
    // }); Alternative is Arrow
// }); // nested loop states that first toast will appear and if you raise the time in settime out than it will first take that time to execute toast and then egg will appear.
//we cannot return in Asynchronous function, so we get  return from callback.
//para is not reserved word, we assigned it ourself
// toastBread((arg) => {console.log(arg);
// makeFryAnda((arg1) => {
    // console.log(arg1); // argument of above callback
// }); // we cannot keep these brackets empty otherwise nothing will appear
// }); // arrow method of invoking function.
  //// Usman //// 
  // Promises//
//   function toastPromise(){
//  return toastPromise = new Promise((resolve, reject) =>{
//     let wifeMood = 3
//     if(wifeMood >=5){
//         resolve("Toast is ready."); // fulfilled state
//     } else{
//         reject("I'm not in a mood"); // rejected state
//     }
//   })
// // }
//   toastPromise().then((arg)=>{ //.then and .catch is part of syntax and used essentially with promise. then is used whatever the condition is
// console.log(arg); // for printing promise we use .then
//   })
//   .catch((error)=>{
//     console.log(error)
//   }); //we were unable to catch error. rejected are received with .catch thats why we used this.

// 
  // alternate to callback is promise 
  //constructor is used. fullfil, reject or pending are states of promise

// next will be merger of both eggfried and toast with time in and out. 
// //usman's code from online practice session
function getToastPromise(){
    return new Promise((resolve,reject)=>{
        let wifeMood = 7;
        setTimeout(() => {
            if(wifeMood >= 5){
                resolve("Toast Is Ready");
            } else {
                reject("Apna toast khud bano");
            }
        }, 2000);
    });
}
function getFriedEggPromise(){
    return new Promise((resolve,reject)=>{
        let wifeMood = 7;
        if(wifeMood >= 5){
            resolve("Egg Is Ready");
        } else {
            reject("Apna aanda khud bano");
        }
    });
}
getToastPromise().then((arg)=>{
    console.log(arg);
    return getFriedEggPromise();
}).then((arg)=>{
    console.log(arg);
}).catch((err)=>{
    console.log(err);
}).finally((arg)=>{
    console.log(`Finally Resolved`);
});


    //Await//


async function geResult(){

try{
    let result = await getToastPromise(); //Await asks javascript to wait and dont go to new line unless executed. await only words in async fuctions only, thats why we put it at start. 'try' will play code in sequence and line by line and if there was error(rejection) will be sent to catch. and error is rejection and it's parameter is already stated.
console.log(result);
let eggResult = await getFriedEggPromise();
console.log(eggResult);
}
catch(error){
    console.log(error);
}
}
geResult();

//issues in callback we addressed in promises and then we use async functions i.e. await. async takes from promise and makes it more precise. await stops the execution until data is acquired. Try will execute the code and if rejection was found it will be thrown too catch.
//await is limited to try only. behind async we have promises 