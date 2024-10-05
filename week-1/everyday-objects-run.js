import { Car } from "./everyday-objects.js";
import { Phone } from "./everyday-objects.js";
import { Book } from "./everyday-objects.js";
import { Laptop } from "./everyday-objects.js";
import { Backpack } from "./everyday-objects.js";
// use node everyday-objects.js to try this out.
// Create instances
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
myCar.startEngine(); // Output: "The engine of Toyota Corolla is now running."

const myPhone = new Phone("Apple", "iPhone", 95);
myPhone.getPhoneInfo(); // Output: Apple iPhone
myPhone.batteryStatus(); // output: the battery status is now 95%

const myBook = new Book("The Stranger", "Camus", 159);
const summary = myBook.getSummary(); 
console.log(summary);// output: the stranger by Camus 
myBook.readPage(); // output: You read a page from the stranger

const myLaptop = new Laptop("Apple", "Mac Book Pro", 32);
myLaptop.bootUp(); 
myLaptop.shutDown();

const myBackpack = new Backpack("REI", "blue", 15);
myBackpack.open();
myBackpack.checkCapacity();
