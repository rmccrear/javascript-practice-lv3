import { createCircle, Circle, createDog, Dog } from './00-start-here-example-objects.js';

// Instances created using the factory functions
const circle1 = createCircle(5);
const dog1 = createDog("Buddy", "Golden Retriever");

console.log("\nFactory Function Instances:");
console.log(circle1.getArea()); // Output: 78.53981633974483
console.log(circle1.getCircumference()); // Output: 31.41592653589793
console.log(dog1.bark()); // Output: "Buddy says woof!"

// Instances created using the classes
const circle2 = new Circle(7);
const dog2 = new Dog("Max", "German Shepherd");

console.log("\nClass Instances:");
console.log(circle2.getArea()); // Output: 153.93804002589985
console.log(circle2.getCircumference()); // Output: 43.982297150257104
console.log(dog2.bark()); // Output: "Max says woof!"

//Instance of Factory functions
const circle3 = createCircle(8);
const dog3 = createDog("Daisy", "Pitbull");

console.log("\nMore Factory Function Instances:");
console.log(circle3.getArea());
console.log(circle3.getCircumference());
console.log(dog3.bark());

// Instances created using the classes
const circle4 = new Circle(23);
const dog4 = new Dog("Fluffy", "Poodle");

console.log("\nMore Class Instances:");
console.log(circle4.getArea()); 
console.log(circle4.getCircumference()); 
console.log(dog4.bark()); 