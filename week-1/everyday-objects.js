
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  startEngine() {
    console.log(`The engine of ${this.make} ${this.model} is now running.`);
  }
}

// Define similar classes for Phone, Book, Laptop, and Backpack...



// TODO: Create and test other instances for Phone, Book, Laptop, and Backpack...
// Class: Phone
// Properties: brand, model, batteryLife
// Methods:
// makeCall(number): Logs "Calling [number] from [brand] [model]."
// batteryStatus(): Logs "Battery life is at [batteryLife]%."

// Class: Book
// Properties: title, author, pages
// Methods:
// getSummary(): Returns a string with the book’s title and author (e.g., "The Great Gatsby by F. Scott Fitzgerald").
// readPage(): Logs "You read a page from [title]."

// Class: Laptop
// Properties: brand, model, ramSize
// Methods:
// bootUp(): Logs "The [brand] [model] is booting up with [ramSize]GB RAM."
// shutDown(): Logs "The [brand] [model] is shutting down."

// Class: Backpack
// Properties: brand, color, capacity
// Methods:
// open(): Logs "Opening the [color] [brand] backpack."
// checkCapacity(): Logs "This backpack has a capacity of [capacity] liters."

export { Car };