import { addTwo } from "./addTwo.mjs";
//we are importing from addTwo.mjs file and now we can use that code here.
console.log(addTwo(1));
//after importing the addTwo from function in addTwo file we checked the addTwo by calling in app.mjs
//.mjs vs.js: V* recommend .mjs. compiler of Node.js put things in modules. and those not modules are regular JS. and files are pursed by runtime node.js.
//In the browser extension doesn't matter. skipping express server task
 //we used prompt for browser and mile to Km we did. browser has built in prompt. but in node.js environemnt we need library for prompt. we have to install it
 //get libary from NPM, it is platform for developers and code are pasted here. 
 // we get prompt library from here.now we can use it in node.js also
 //to come out of project type cd.. and then to make new write mkdir and choose file name
//before npm init it is empty folder and after npm init, package.jsonfile is created.
//after this we added prompt library from npm website 