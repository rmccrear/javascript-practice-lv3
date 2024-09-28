import { describe, beforeAll, test, expect } from 'vitest';

import { OpenFoodFacts } from './openfoodfacts.js';
import sampleProduct from './data/food-nutella.json' assert {type: 'json'};

describe('OpenFoodFacts Class Tests', () => {
  let product;

  beforeAll(() => {
    // Initialize the OpenFoodFacts object with sample product data before all tests
    product = new OpenFoodFacts(sampleProduct);
  });

  test('should correctly set the product name', () => {
    expect(product.getProductName()).toBe("Nutella");
  });

  test('should correctly set the brand owner name', () => {
    expect(product.getBrandOwner()).toBe("Ferrero");
  });

  test('should correctly set the image URL', () => {
    expect(product.getImageUrl()).toBe("https://example.com/nutella.jpg");
  });

  test('should correctly set the product code', () => {
    expect(product.getCode()).toBe("3017620422003");
  });

  test('should return the correct product summary', () => {
    const expectedSummary = "Product: Nutella by Ferrero. Code: 3017620422003. Image available at: https://example.com/nutella.jpg";
    expect(product.showProductSummary()).toBe(expectedSummary);
  });
});
