import { describe, test, expect } from 'vitest';
// Import the functions to test
import { square2, double2, add2, capitalize2, greet2, calculateArea2 } from './arrow-functions.js'; // Replace with actual file name

describe('Basic Arrow Functions', () => {

  describe('square2 function', () => {
    test('should return the square of a number', () => {
      expect(square2(5)).toBe(25);
      expect(square2(0)).toBe(0);
      expect(square2(3)).toBe(9);
    });
  });

  describe('double2 function', () => {
    test('should return double the input number', () => {
      expect(double2(4)).toBe(8);
      expect(double2(0)).toBe(0);
      expect(double2(-2)).toBe(-4);
    });
  });

  describe('add2 function', () => {
    test('should return the sum of two numbers', () => {
      expect(add2(3, 7)).toBe(10);
      expect(add2(-1, 1)).toBe(0);
      expect(add2(5, 5)).toBe(10);
    });
  });

  describe('capitalize2 function', () => {
    test('should return the string in uppercase', () => {
      expect(capitalize2("hello")).toBe("HELLO");
      expect(capitalize2("world")).toBe("WORLD");
      expect(capitalize2("test")).toBe("TEST");
    });
  });

  describe('greet2 function', () => {
    test('should return a greeting string', () => {
      expect(greet2()).toBe("Hello, world!");
    });
  });

  describe('calculateArea2 function', () => {
    test('should return the area of a rectangle', () => {
      expect(calculateArea2(5, 3)).toBe(15);
      expect(calculateArea2(10, 2)).toBe(20);
      expect(calculateArea2(7, 4)).toBe(28);
    });
  });

});
