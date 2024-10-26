import { describe, it, expect } from 'vitest';
import Book from '../book-get-set.js';

describe('Book Class Tests', () => {
  it('should create a book instance with valid properties', () => {
    const myBook = new Book('1984', 'George Orwell', 1949);
    expect(myBook.title).toBe('1984');
    expect(myBook.author).toBe('George Orwell');
    expect(myBook.publicationYear).toBe(1949);
  });

  it('should update the title and author of the book', () => {
    const myBook = new Book('1984', 'George Orwell', 1949);
    myBook.title = 'Animal Farm';
    myBook.author = 'George Orwell';
    expect(myBook.title).toBe('Animal Farm');
    expect(myBook.author).toBe('George Orwell');
  });

  it('should throw an error for invalid title', () => {
    const myBook = new Book('1984', 'George Orwell', 1949);
    expect(() => {
      myBook.title = '';
    }).toThrow('Title must be a non-empty string.');
  });

  it('should throw an error for invalid publication year', () => {
    const myBook = new Book('1984', 'George Orwell', 1949);
    expect(() => {
      myBook.publicationYear = 'abcd';
    }).toThrow('Publication Year must be a valid 4-digit number.');
  });
});
