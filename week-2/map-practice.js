// Array.prototype.map problems

// This example demonstrates using `map` with an arrow function to return the lengths of strings in an array.
const exampleFruits = ["apple", "banana", "cherry"];
const fruitLengths = exampleFruits.map(fruit => fruit.length);

console.log(fruitLengths); // Expected output: [5, 6, 6]


// Problem Set: Using map and Arrow Functions

// Instructions: For each problem, use the `map` method and an arrow function to perform the requested operation on the array.

// Problem 1: Convert numbers to their squares
// Instructions: Use `map` with an arrow function to return a new array where each number is squared.
const numbers = [1, 2, 3, 4, 5];
// Your code here

// Expected output: [1, 4, 9, 16, 25]


// Problem 2: Capitalize strings in an array
// Instructions: Use `map` with an arrow function to return a new array where each string in the array is capitalized.
const fruits = ["apple", "banana", "cherry", "date"];
// Your code here

// Expected output: ["APPLE", "BANANA", "CHERRY", "DATE"]


// Problem 3: Convert boolean values to strings
// Instructions: Use `map` with an arrow function to return a new array where each boolean value is converted to a string.
const booleans = [true, false, true, false];
// Your code here

// Expected output: ["true", "false", "true", "false"]


// Problem 4: Add 10 to each number in an array
// Instructions: Use `map` with an arrow function to return a new array where 10 is added to each number.
const moreNumbers = [10, 20, 30, 40];
// Your code here

// Expected output: [20, 30, 40, 50]


// Problem 5: Extract object properties from an array of objects
// Instructions: Use `map` with an arrow function to return a new array where each element is the "name" property of the object.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 }
];
// Your code here

// Expected output: ["Alice", "Bob", "Charlie", "Diana"]


// Problem 6: Return a string with the person's name and age
// Instructions: Use `map` with an arrow function to return a new array where each element is a string formatted as "Name is Age years old".
// Example: "Alice is 25 years old"
const peopleWithAges = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 }
];
// Your code here

// Expected output: ["Alice is 25 years old", "Bob is 30 years old", "Charlie is 35 years old", "Diana is 40 years old"]
