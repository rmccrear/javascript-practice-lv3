# JavaScript Getters and Setters - Node.js Assignment

## Objective
In this project, you'll create classes in JavaScript using **getters** and **setters** to control access and validation of class properties. You’ll work with three different classes: a **Car** class (provided as an example), a **Pet** class, and a **Book** class.

## References

[Getters and Setters on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#using_getters_in_classes)

---

## Requirements

1. **Car Class** (Provided as an Example):
   - The `Car` class demonstrates how to use getters and setters for controlling access and validation of properties like `make`, `model`, and `year`.

2. **Pet Class** (Starter File):
   - You will create a `Pet` class in `pet-get-set.js` to manage properties like `name`, `type`, and `age` using getters and setters. Add validation to ensure that the pet’s name is a non-empty string and the age is a positive number.

3. **Book Class** (Starter File):
   - You will create a `Book` class in `book-get-set.js` to manage properties like `title`, `author`, and `publicationYear`. Ensure that `title` and `author` are non-empty strings and that the `publicationYear` is a valid 4-digit number.

---

## How to Complete This Assignment

1. **Fork and Clone the Repository**:
   - Fork this repository and clone it to your local machine.

2. **Install Node.js** (if you haven't already):
   - [Download and install Node.js](https://nodejs.org/en/download/).

3. **Understand the Example (`car-get-set.js`)**:
   - The `car-get-set.js` file contains an example of the `Car` class with getters and setters. Study it to understand how to implement your own classes with similar functionality.

4. **Complete the `Pet` and `Book` Classes**:
   - Implement getters and setters for the properties of the **Pet** class in `pet-get-set.js` and the **Book** class in `book-get-set.js`.
   - Make sure to add validation to the setter methods.

5. **Run Your Code**:
   - Use Node.js to run your files:
     ```bash
     node car-get-set.js
     node pet-get-set.js
     node book-get-set.js
     ```

6. **Test Your Implementation**:
   - Make sure your getters return the correct values and your setters validate the input correctly.
   - Bonus: run the tests with

    npm run test -- -t "Car Class Tests"
    npm run test -- -t "Pet Class Tests"
    npm run test -- -t "Book Class Tests"


---

## Example Code (Car Class)

The following example shows how to use getters and setters for the `Car` class:

```javascript
class Car {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  get make() {
    return this._make;
  }

  set make(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Make must be a non-empty string.');
    }
    this._make = value;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Model must be a non-empty string.');
    }
    this._model = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    const yearRegex = /^\d{4}$/;
    if (!yearRegex.test(value)) {
      throw new Error('Year must be a valid 4-digit number.');
    }
    this._year = value;
  }

  carInfo() {
    return `Car: ${this._make} ${this._model}, Year: ${this._year}`;
  }
}

// Example Usage:
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.carInfo());
myCar.make = 'Honda';  // Change make
myCar.year = 2019;     // Change year
console.log(myCar.carInfo());
