
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `Car: ${this.year} ${this.make} ${this.model}`;
  }

  startEngine() {
    console.log(`The engine of ${this.make} ${this.model} is now running.`);
  }
}
// Define similar classes for Phone, Book, Laptop, and Backpack...

// TODO: Create and test other instances for Phone, Book, Laptop, and Backpack...
// Class: Phone
// Properties: brand, model, batteryLife
class Phone {
  constructor(brand, model, batteryLife) {
    this.brand = brand;
    this.model = model;
    this.batteryLife = batteryLife;
  }
// Methods:
// makeCall(number): Logs "Calling [number] from [brand] [model]."
// batteryStatus(): Logs "Battery life is at [batteryLife]%."
getPhoneInfo() {
  console.log(`${this.brand} ${this.model} ${this.batteryLife}%`);
}
batteryStatus() {
  console.log(`The battery status of ${this.brand} ${this.model} is now ${this.batteryLife}%.`);
}
}
// Class: Book
// Properties: title, author, pages
// Methods:
// getSummary(): Returns a string with the book’s title and author (e.g., "The Great Gatsby by F. Scott Fitzgerald").
// readPage(): Logs "You read a page from [title]."
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  getSummary() {
    return `Book: ${this.title} by ${this.author}`;
  }
  readPage() {
    console.log(`You read a page from ${this.title}.`);
  }
}
// Class: Laptop
// Properties: brand, model, ramSize
// Methods:
// bootUp(): Logs "The [brand] [model] is booting up with [ramSize]GB RAM."
// shutDown(): Logs "The [brand] [model] is shutting down."
class Laptop {
  constructor(brand, model, ramSize) {
    this.brand = brand;
    this.model = model;
    this.ramSize = ramSize;
  }
  bootUp() {
    console.log(`${this.brand}, ${this.model} is booting up with ${this.ramSize}GB RAM.`);
  }
  shutDown() {
    console.log(`This ${this.brand} ${this.model} is shutting down.`);
  }
}

// Class: Backpack
// Properties: brand, color, capacity
// Methods:
// open(): Logs "Opening the [color] [brand] backpack."
// checkCapacity(): Logs "This backpack has a capacity of [capacity] liters."
class Backpack {
  constructor(brand, color, capacity){
    this.brand = brand;
    this.color = color;
    this.capacity = capacity;
  }
  open() {
    console.log(`Opening this ${this.color}, ${this.brand} backpack is easy. It is lightweight.`);
  }
  checkCapacity() {
    console.log(`This ${this.brand} backpack has only a capacity of ${this.capacity} liters.`)
  }
}

export { Car , Phone , Book , Laptop , Backpack };
