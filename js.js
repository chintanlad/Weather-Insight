const apiKey = "KSJ2paBKCuZHkgM7l5PjCKZvXPj1V8M2";

// sources = "https://app.tomorrow.io/home".... gmail is granted.ghost12@gmail.com

const apiUrl = "https://api.tomorrow.io/v4/weather/forecast?location=21.170240,72.831062&apikey=KSJ2paBKCuZHkgM7l5PjCKZvXPj1V8M2";

const geocodingApiKey = 'Y2im959qsLX3VmsZ1aHQKA==KA1QDtWJstOPs3Al'; // Replace with your actual API key
const weatherApiKey = 'KSJ2paBKCuZHkgM7l5PjCKZvXPj1V8M2'; // Replace with your actual weather API key

const btn = document.querySelector(".space button"); 

const cityNameElement = document.querySelector(".weather .city-name");
const tempElement = document.querySelector(".weather .degree");
const humidityElement = document.querySelector(".windHumidity .humidity");
const windSpeedElement = document.querySelector(".windHumidity .windSpeed");



function fetchCoordinatesAndWeather(city) {
  const geocodingUrl = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;

// sources = "https://api-ninjas.com/api/geocoding"... gmail is granted.ghost12@gmail.com and pass:Chintan@12 

  fetch(geocodingUrl, {
    method: 'GET',
    headers: {
      'X-Api-Key': geocodingApiKey,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(result => {
    console.log(result);

    if (result.length > 0) {
      const latitude = result[0].latitude;
      const longitude = result[0].longitude;

      // const latitude = result[1].latitude;           // write if you want surat gujarat temp.
      // const longitude = result[1].longitude;

      console.log(`Coordinates for ${city}: Latitude = ${latitude}, Longitude = ${longitude}`);

      fetchWeatherData(latitude, longitude, city);
    } else {
      console.log('No results found for the specified city.');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
}

function fetchWeatherData(latitude, longitude, city) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Accept-Encoding': 'gzip',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      location: `${latitude},${longitude}`,
      fields: ['temperature', 'humidity', 'windSpeed'],
      units: 'metric',
      timesteps: ['1h'],
      startTime: new Date().toISOString(),
      endTime: new Date(new Date().getTime() + 6 * 60 * 60 * 1000).toISOString()
    })
  };

  fetch(`https://api.tomorrow.io/v4/timelines?apikey=${weatherApiKey}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(response => {
      console.log(response);
      const data = response.data.timelines[0].intervals[0].values;

      // Update the HTML elements with the fetched data
      tempElement.innerHTML = `${data.temperature} °C`;
      humidityElement.innerHTML = `Humidity: ${data.humidity} %`;
      windSpeedElement.innerHTML = `Wind Speed: ${data.windSpeed} m/s`;
      cityNameElement.innerHTML = city;

      // console.log(`Temperature: ${data.temperature} °C`);
      // console.log(`Wind Speed: ${data.windSpeed} m/s`);
      // windSpeed.innerHTML = `Wind Speed: \n${data.windSpeed} m/s`;
      // console.log(`Humidity: ${data.humidity} %`);
    })
    .catch(err => console.error('Error fetching weather data:', err));
}


// Example usage
// fetchCoordinatesAndWeather('London');
// fetchCoordinatesAndWeather('Surat');
// fetchCoordinatesAndWeather('Valsad');
 




// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   let city = document.querySelector(".city");
//   console.log(city.value);

//   fetchCoordinatesAndWeather(city.value);
//   console.log(humidity.textContent);
//   console.log(windSpeed.innerText);
// });


// const btn = document.querySelector(".space button");

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let cityInput = document.querySelector(".city");
  let city = cityInput.value;
  console.log(city);

  fetchCoordinatesAndWeather(city);
});



