import { describe, test, expect, vi } from 'vitest';
import { Car, Phone, Book, Laptop, Backpack } from './everyday-objects.js';

describe('Everyday Objects Class Tests', () => {
  test('Car class should return correct car info and start the engine', () => {
    const car = new Car('Toyota', 'Corolla', 2020);
    expect(car.getCarInfo()).toBe('2020 Toyota Corolla');

    // Mock console.log using vitest's `vi.fn`
    const consoleSpy = vi.spyOn(console, 'log');
    car.startEngine();
    expect(consoleSpy).toHaveBeenCalledWith('The engine of Toyota Corolla is now running.');

    // Restore the original console.log function after the test
    consoleSpy.mockRestore();
  });

  test('Phone class should return correct battery status and make a call', () => {
    const phone = new Phone('Apple', 'iPhone', 85);
    expect(phone.batteryStatus()).toBe('Battery life is at 85%.');

    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    phone.makeCall('123-456-7890');
    expect(consoleSpy).toHaveBeenCalledWith('Calling 123-456-7890 from Apple iPhone.');

    consoleSpy.mockRestore();
  });

  test('Book class should return the correct summary and log reading a page', () => {
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
    expect(book.getSummary()).toBe('The Great Gatsby by F. Scott Fitzgerald');

    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    book.readPage();
    expect(consoleSpy).toHaveBeenCalledWith('You read a page from The Great Gatsby.');

    consoleSpy.mockRestore();
  });

  test('Laptop class should boot up and shut down correctly', () => {
    const laptop = new Laptop('Lenovo', 'ThinkPad', 16);

    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    laptop.bootUp();
    expect(consoleSpy).toHaveBeenCalledWith('The Lenovo ThinkPad is booting up with 16GB RAM.');

    laptop.shutDown();
    expect(consoleSpy).toHaveBeenCalledWith('The Lenovo ThinkPad is shutting down.');

    consoleSpy.mockRestore();
  });

  test('Backpack class should open and check capacity correctly', () => {
    const backpack = new Backpack('Nike', 'red', 25);

    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log');
    backpack.open();
    expect(consoleSpy).toHaveBeenCalledWith('Opening the red Nike backpack.');

    backpack.checkCapacity();
    expect(consoleSpy).toHaveBeenCalledWith('This backpack has a capacity of 25 liters.');

    consoleSpy.mockRestore();
  });
});
