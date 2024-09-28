import { describe, beforeAll, test, expect } from 'vitest';
// Import necessary modules and functions
import { createWeather, Weather } from './weather.js'; // Adjust the import path as needed

// Mock data similar to what the Weatherbit API returns
const mockWeatherData = {
  city_name: "Raleigh",
  temp: 22.1,
  weather: {
    description: "Overcast clouds"
  }
};

describe('Weather Factory Function and Class Tests (Happy Path)', () => {

  // Tests for the createWeather factory function
  describe('createWeather Factory Function', () => {
    let weatherInstance;

    beforeAll(() => {
      weatherInstance = createWeather(mockWeatherData);
    });

    test('createWeather creates a Weather object with city, temperature, and description', () => {
      expect(weatherInstance).toHaveProperty('city', mockWeatherData.city_name);
      expect(weatherInstance).toHaveProperty('temperature', mockWeatherData.temp);
      expect(weatherInstance).toHaveProperty('description', mockWeatherData.weather.description);
    });

    test('showStatus returns the correct status message', () => {
      const expectedMessage = `The current temperature in Raleigh is 22.1°C with Overcast clouds.`;
      expect(weatherInstance.showStatus()).toBe(expectedMessage);
    });
  });

  // Tests for the Weather class
  describe('Weather Class', () => {
    let weatherClassInstance;

    beforeAll(() => {
      weatherClassInstance = new Weather(mockWeatherData);
    });

    test('Weather class creates an instance with city, temperature, and description', () => {
      expect(weatherClassInstance).toHaveProperty('city', mockWeatherData.city_name);
      expect(weatherClassInstance).toHaveProperty('temperature', mockWeatherData.temp);
      expect(weatherClassInstance).toHaveProperty('description', mockWeatherData.weather.description);
    });

    test('showStatus returns the correct status message', () => {
      const expectedMessage = `The current temperature in Raleigh is 22.1°C with Overcast clouds.`;
      expect(weatherClassInstance.showStatus()).toBe(expectedMessage);
    });
  });
});
