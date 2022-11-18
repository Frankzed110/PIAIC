// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();
// promise.then(function() {
//     console.log('Success 1');
// })
// .then(function() {
//     console.log('Success 2');
// })
// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });
//Solution:
//when catch handles the error it swithes promise to resolve state and then handler after catch will be called and will be printed. thus in this case error 1 is followed by success 4.

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });
//Solution:
// return is for next subsequent function. therefore, here it is success, error and error caught

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }

//     return job(true);
//   })

//   .then(function (data) {
//     console.log(data);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return job(false);
//   })

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log(data);

//     return new Error("test");
//   })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });
//Solution;
// throw send form.then to .catch hence. success, defeat, error, error caught, success: test. we did not return anything thats why no value or last catch.

//  let counter = 0;

//  let timer = setInterval(function() {
//      console.log('I am an asynchronous message');

//      counter += 1;

//      if (counter >= 5) {
//          clearInterval(timer);
//      }
//  }, 1000);

//  console.log('I am a synchronous message');

// use clear interval to break setInterval or it will keep running

// function job(callback1, callback2) {
//   setTimeout(() => {
//     callback1();
//   }, 2000);

//   let counter = 0;
//   let timer = setInterval(() => {
//     callback2();

//     counter++;
//     if (counter == 3) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }

// let display1 = () => console.log("Callback 1");
// let display2 = () => console.log("Callback 2");
// job(display1, display2);

//Solution:
// Callback 2
// Callback 1
// Callback 2
// Callback 2

// function job1(callback) {
//   setTimeout(function () {
//     callback("test 1");
//   }, 2000);
// }
// function job2(callback) {
//   setTimeout(function () {
//     callback("test 2");
//   }, 4000);
// }
// function job3(callback) {
//     setTimeout(function() {
//         callback('test 3')
//     },6000);
// }
// function job4(callback){
//     setTimeout(function(){
//         callback('test 4')
//     },8000);
// }
// job1(function (data) {
//   console.log(data);

//   job2(function (data) {
//     console.log(data);

    // job3(function(data){
    //     console.log(data);

    //     // job4(function(data) {
    //     //     console.log(data);
    //     // })
    // })
//   });
// });
//Pyramid of DOOM

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data);
// });
// //only one hello world 1 will print because once promise is finished it can't restart. and you need to call function everytime.

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('We are all going to die');
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }, function error(data) {
//     console.error(data + ' 1');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }, function error(data) {
//     console.error(data + ' 2');
// });

// promise.then(function success(data) {
//     console.log(data + ' 3');
// }, function error(data) {
//     console.error(data + ' 3');
// });



/////////////////////////////////


function job() {
    return new Promise((resolve,reject)=>{
    setTimeout(function(){resolve("hello world")},2000)
    });
    }

promise.then(function a(data) {
            console.log(data);
    })