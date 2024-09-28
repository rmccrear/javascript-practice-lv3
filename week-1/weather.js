
// Factory function for creating a simple weather object
// Collect the following data from the original data object
// * city_name
// * temp
// * weather description (i.e. Overcast clouds)
// store them as properties: city, temperature, and description
// Create a function called showStatus that outputs an example like this:
// The current temperature in Raleigh is 4°C with Overcast clouds.`;
// See the data for weather-current-raleigh for details on the data object.
function createWeather(weatherData) {
  let city, temperature, description;
  // TODO: get data from from data argument

  return {
    city,
    temperature,
    description,
    showStatus() {
      // TODO: return the current weather
      return "";
    }
  };
}


// Class for creating a simple Weather object
class Weather {
  constructor(data) {
  // TODO: get data from from data argument

  }

  showStatus() {
      // TODO: return the current weather
      return "";
  }
}

export { createWeather, Weather };
