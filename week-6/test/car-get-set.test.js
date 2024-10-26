import { describe, it, expect } from 'vitest';
import Car from '../car-get-set.js';

describe('Car Class Tests', () => {
  it('should create a car instance with valid properties', () => {
    const myCar = new Car('Toyota', 'Corolla', 2020);
    expect(myCar.make).toBe('Toyota');
    expect(myCar.model).toBe('Corolla');
    expect(myCar.year).toBe(2020);
  });

  it('should update the make and model of the car', () => {
    const myCar = new Car('Toyota', 'Corolla', 2020);
    myCar.make = 'Honda';
    myCar.model = 'Civic';
    expect(myCar.make).toBe('Honda');
    expect(myCar.model).toBe('Civic');
  });

  it('should throw an error for invalid make', () => {
    const myCar = new Car('Toyota', 'Corolla', 2020);
    expect(() => {
      myCar.make = '';
    }).toThrow('Make must be a non-empty string.');
  });

  it('should throw an error for invalid year', () => {
    const myCar = new Car('Toyota', 'Corolla', 2020);
    expect(() => {
      myCar.year = 'abcd';
    }).toThrow('Year must be a valid 4-digit number.');
  });

  it('should return car info', () => {
    const myCar = new Car('Toyota', 'Corolla', 2020);
    expect(myCar.carInfo()).toBe('Car: Toyota Corolla, Year: 2020');
  });
});
