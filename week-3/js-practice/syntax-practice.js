/**
 * Node.js Assignment: Ternary Operator & Array Destructuring
 *
 * Instructions:
 * 1. You will complete two exercises on the use of the ternary operator.
 * 2. You will complete two exercises on array destructuring without using functions.
 * 
 * Follow the TODO comments to complete each task.
 * Run the file using Node.js by typing `node exercise.js` in the terminal.
 */

// TASK 1: Ternary Operator Example
// Example: Use the ternary operator to determine if a number is positive or negative.
function checkPositiveOrNegative(number) {
  return number >= 0 ? "Positive" : "Negative";
}

// Example usage
console.log("Task 1 Example: Positive or Negative?");
console.log(checkPositiveOrNegative(10));  // Expected output: "Positive"
console.log(checkPositiveOrNegative(-5));  // Expected output: "Negative"
console.log(checkPositiveOrNegative(-8));
console.log(checkPositiveOrNegative(8));
// TASK 1: Ternary Operator Exercise 1
// TODO: Use the ternary operator to check if a string is empty or not.
// Return "Empty String" if the string length is 0, otherwise return "Non-empty String".

function checkEmptyString(str) {
  // TODO: Write your solution here
  return str === '' ? "Yes" : "No";
}
// Example usage
console.log(checkEmptyString(""));     // Expected output: "Empty String"
console.log(checkEmptyString("Hello")); // Expected output: "Non-empty String"

// TASK 1: Ternary Operator Exercise 2
// ::TODO:: Use the ternary operator to check if a number is divisible by 5.
// Return "Divisible by 5" if true, otherwise "Not Divisible by 5".

function checkDivisibleByFive(number) {
  // TODO: Write your solution here
  return number % 5 === 0 ? "True" : "False";

}
// Example usage
console.log(checkDivisibleByFive(10));  // Expected output: "Divisible by 5"
console.log(checkDivisibleByFive(7));   // Expected output: "Not Divisible by 5"
console.log(checkDivisibleByFive(15));
console.log(checkDivisibleByFive(21));

// TASK 2: Array Destructuring Example
// Example: Destructure an array of three cities and log the first two cities.
const cities = ["New York", "London", "Tokyo"];
const [city1, city2, city3] = cities;

console.log("\nTask 2 Example: Array Destructuring (Cities)");
console.log(`First City: ${city1}, Second City: ${city2}, Third City: ${city3}`);  // Expected output: "First City: New York, Second City: London"

// TASK 2: Array Destructuring Exercise 1
// TODO: Destructure an array of three animals and log the second and third animals.

const animals = ["Lion", "Tiger", "Elephant"];

const [animal1, animal2, animal3] = animals;

// TODO: Destructure an array of three animals and log the second and third animals.
console.log(`The zoo wants the 2nd Animal: ${animal2} and the 3rd Animal: ${animal3}`);
// Example usage
// console.log(`First Animal: ${firstAnimal} Second Animal: ${secondAnimal}, Third Animal: ${thirdAnimal}`);  // Expected output: "Second Animal: Tiger, Third Animal: Elephant"

// TASK 2: Array Destructuring Exercise 2
// TODO: Destructure an array of four numbers and log the subtraction of the forth and the third number.

const numbers = [8, 12, 20, 30];
// TODO: Use array destructuring to extract the last two numbers and calculate their sum
const [firstNum, secondNum, thirdNum, forthNum] = numbers;  // Uncomment this line and complete the TODO

const sum = forthNum - thirdNum;

// Example usage
console.log(`Sum: ${sum}`);  // Expected output: "Sum: 10"

// Task 3: Get creative and use the ternary operator with your own example
function divisibleByThree(number) {
  // TODO: Write your solution here
  return number % 3 === 0 ? "True" : "False";
}
// Example usage
console.log(divisibleByThree(21));  // Expected output: "True"
console.log(divisibleByThree(19));   // Expected output: "False"


// Task 4: Get creative and use array destructuring with your own example