// Fully Worked Example

// Original function:
// This function takes a number as an argument and returns that number squared.
function square(n) {
  return n * n;
}

// Refactored function using arrow function syntax and renamed with "2":
let square2 = (n) => n * n;

// Usage
console.log(square2(5)); // Expected output: 25

// Problem Set: Refactor to Arrow Functions

// Instructions: For each problem, refactor the traditional function into an arrow function.
// Name the new function with a "2" after the original name. For example, if the function is called `square`, the arrow function should be called `square2`.

// Problem 1: Basic Refactor to Arrow Functions
// Instructions: Refactor the `double` function into an arrow function. If there is only one argument, parentheses can be omitted. Name the refactored function `double2`.
function double(x) {
  return x * 2;
}
let double2;

// Usage
console.log(double2(4)); // Expected output: 8

// Problem 2: Refactor with Multiple Parameters
// Instructions: Refactor the `add` function into an arrow function. Keep parentheses around the parameters. Name the refactored function `add2`.
function add(a, b) {
  return a + b;
}
let add2;

// Usage
console.log(add2(3, 7)); // Expected output: 10

// Problem 3: Convert String to Uppercase
// Instructions: Refactor the `capitalize` function into an arrow function. Use the `toUpperCase` method to return the string in all uppercase. Name the refactored function `capitalize2`.
function capitalize(str) {
  return str.toUpperCase();
}
let capitalize2;

// Problem 4: Refactor Function with No Parameters
// Instructions: Refactor the `greet` function into an arrow function. Arrow functions without parameters require empty parentheses. Name the refactored function `greet2`.
function greet() {
  return "Hello, world!";
}
let greet2;

// Usage
console.log(greet2()); // Expected output: "Hello, world!"

// Problem 5: Complex Refactor with Multiple Statements
// Instructions: Refactor the `calculateArea` function into an arrow function. Retain curly braces and the return statement, and preserve the console.log statement inside the function. Name the refactored function `calculateArea2`.
function calculateArea(length, width) {
  const area = length * width;
  console.log("Area:", area);
  return area;
}
let calculateArea2;

// Usage
console.log(calculateArea2(5, 3)); // Expected output: Area: 15, returns: 15

// Exporting the arrow functions
export { square2, double2, add2, greet2, calculateArea2, capitalize2 };
