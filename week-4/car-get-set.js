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

export default Car;