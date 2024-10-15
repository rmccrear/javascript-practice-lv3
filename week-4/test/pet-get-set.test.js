import { describe, it, expect } from 'vitest';
import Pet from '../pet-get-set.js';

describe('Pet Class Tests', () => {
  it('should create a pet instance with valid properties', () => {
    const myPet = new Pet('Buddy', 'Dog', 3);
    expect(myPet.name).toBe('Buddy');
    expect(myPet.type).toBe('Dog');
    expect(myPet.age).toBe(3);
  });

  it('should update the name and type of the pet', () => {
    const myPet = new Pet('Buddy', 'Dog', 3);
    myPet.name = 'Max';
    myPet.type = 'Cat';
    expect(myPet.name).toBe('Max');
    expect(myPet.type).toBe('Cat');
  });

  it('should throw an error for invalid name', () => {
    const myPet = new Pet('Buddy', 'Dog', 3);
    expect(() => {
      myPet.name = '';
    }).toThrow('Name must be a non-empty string.');
  });

  it('should throw an error for invalid age', () => {
    const myPet = new Pet('Buddy', 'Dog', 3);
    expect(() => {
      myPet.age = -1;
    }).toThrow('Age must be a positive number.');
  });
});
