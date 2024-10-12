// Arrow functions and setTimeout

// setTimeout is a JavaScript function that allows you to execute a piece of code or a function after a specified delay (in milliseconds). It takes two arguments:

// A function (or code snippet) to execute.
// The delay in milliseconds before the function is executed.
// The function runs only once after the specified delay.

// This example creates an arrow function that logs "Hello, after 2 seconds!" after 2 seconds using setTimeout.
setTimeout(() => {
  console.log("Hello, after 2 seconds!");
}, 2000);

// Problem Set: Arrow Functions with setTimeout

// Instructions: For each problem, create an arrow function to pass into the setTimeout function. 
// The arrow function should execute after a specified interval and perform the task outlined in the problem description.

// Problem 1: Simple Timeout with a Message
// Instructions: Create an arrow function that logs "Hello, World!" to the console after 1 second (1000 milliseconds).

// Problem 2: Timeout that Logs a Number
// Instructions: Create an arrow function that logs the number 42 to the console after 2 seconds (2000 milliseconds).

// Problem 3: Timeout that Adds Two Numbers
// Instructions: Create an arrow function that adds two numbers, 5 and 7, and logs the result (12) to the console after 3 seconds (3000 milliseconds).

// Problem 4: Timeout that Logs Current Time
// Instructions: Create an arrow function that logs the current date and time using `new Date().toLocaleString()` after 4 seconds (4000 milliseconds).

// Problem 5: Timeout that Logs a Countdown
// Instructions: Create a series of arrow functions inside setTimeout that count down from 3 to 1 at 1-second intervals, and finally logs "Go!" after 3 seconds.
// Hint: You'll need to use 3 different setTimeout calls for this task.

// setTimeout(() => {
//   setTimeout(() => console.log(3) , 1000);
//   setTimeout(() => console.log(2) , 2000);
//   setTimeout(() => console.log(1) , 3000);
//   setTimeout(() => console.log("Go!") , 3000);
// }, 4000);

let fun = [
  3,2,1,0
]

setTimeout(() => {
  for(let i=0; i<fun.length; i++) {
    let n = fun[i];
    if(n>0) {
      setTimeout(() => console.log(n), (4-n)*1000)
    } else {
      setTimeout(() => console.log("Go!"), (4-n)*1000)
    }
  };
}, 4000)