import {Weather, createWeather} from "./weather.js";

// Example JSON data from Weatherbit API (replace with your actual data import if necessary)
import weatherData from "./data/weather-current-raleigh.json" assert { type: 'json' };
import weatherDataSaltLake from "./data/weather-current-salt-lake.json" assert { type: 'json' };

// TODO: in weather.js finish implementing the details of the class and factory function.

// Using the factory function to create an instance
let raleighWeather = createWeather(weatherData.data[0]);
let saltLakeWeather = createWeather(weatherDataSaltLake.data[0]);

console.log("\n\n ********* Factory Function Pattern *********");
console.log(raleighWeather.showStatus());
console.log(saltLakeWeather.showStatus());

// Using the class to create an instance
let raleighWeatherClass = new Weather(weatherData.data[0]);
let saltLakeWeatherClass = new Weather(weatherDataSaltLake.data[0]);

console.log("\n\n ********* Class Pattern *********");
console.log(raleighWeatherClass.showStatus());
console.log(saltLakeWeatherClass.showStatus());

export { createWeather, Weather };
