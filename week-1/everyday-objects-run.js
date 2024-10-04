import { Car } from './everyday-objects.js';
import { Phone } from './everyday-objects.js';
import { Book } from './everyday-objects.js';
import { Laptop } from './everyday-objects.js';
import { Backpack } from './everyday-objects.js';

// use node everyday-objects.js to try this out.
// Create instances
console.log("\nCar Class:");
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
myCar.startEngine(); // Output: "The engine of Toyota Corolla is now running."

//Instance of Phone
console.log("\nPhone Class:");
const myPhone = new Phone("Google", "Pixel7", 75);
console.log(myPhone.batteryStatus());
myPhone.makeCall("225-555-5555");

//Instance of Book
console.log("\nBook Class:");
const myBook = new Book("Naked Lunch", "William S. Burroughs", 180);
console.log(myBook.getSummary());
myBook.readPage();

//Instance of Laptop
console.log("\nLaptop Class:");
const myLaptop = new Laptop("Dell", "Latitude 5400", 16);
console.log(myLaptop.bootUp());
myLaptop.shutDown();

//Instance of Backpack
console.log("\nBackpack Class:");
const myBackpack = new Backpack("JanSport", "white", 24);
console.log(myBackpack.open());
myBackpack.checkCapacity();