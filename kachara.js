// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";


// curl --request GET --url 
// const apiUrl = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=KSJ2paBKCuZHkgM7l5PjCKZvXPj1V8M2'


// const apiUrl = "https://api.tomorrow.io/v4/weather/forecast?location=21.170240,72.831062";

// async function checkWeather(){
//     // const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     const response = await fetch(apiUrl);

//     var data  = await response.json();
//     console.log(data);
//     // document.querySelector(".temp").innerHTML = data.main.temp;
//     // document.querySelector(".humidity").innerHTML = data.main.humidity;
//     // document.querySelector(".wind").innerHTML = data.wind.speed;
// }


// checkWeather();




// const options = {
//     method: 'POST',
//     headers: {
//       accept: 'application/json',
//       'Accept-Encoding': 'gzip',
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         location: '21.170240, 72.831062',
//       fields: ['temperature', 'humidity', 'windSpeed'],
//       units: 'metric',
//       timesteps: ['1h'],
//       startTime: 'now',
//       endTime: 'nowPlus6h'
//     })
//   };
  
  
//   function weather() {
//     fetch('https://api.tomorrow.io/v4/timelines?apikey=KSJ2paBKCuZHkgM7l5PjCKZvXPj1V8M2', options)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(response => {
//         console.log(response);
//         // Adjust the following part based on the actual API response structure
//         const temperature = response.data.timelines[0].intervals[0].values.temperature;
//         const humidity = response.data.timelines[0].intervals[0].values.humidity;

//         const windSpeed = response.data.timelines[0].intervals[0].values.windSpeed;

//         console.log(`Temperature: ${temperature} °C`);
//         console.log(`Humidity: ${humidity}`);
//         console.log(`Windspeed: ${windSpeed}`);
//       })
//       .catch(err => console.error('Error fetching weather data:', err));
//   }
  
//   weather();













//   const city = 'london';
  
//   const geoapiKey = "Y2im959qsLX3VmsZ1aHQKA==KA1QDtWJstOPs3Al"; // Replace with your actual API key
  
//   function fetchCoordinates(city) {
//     const geocodingUrl = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;
  
//     fetch(geocodingUrl, {
//       method: 'GET',
//       headers: {
//         'X-Api-Key': geoapiKey,
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(result => {
//       console.log(result);
  
//       // Assuming the result is an array of locations
//       if (result.length > 0) {
//         const latitude = result[0].latitude;
//         const longitude = result[0].longitude;
//         console.log(`Coordinates for ${city}: Latitude = ${latitude}, Longitude = ${longitude}`);
  
//         // Now you can call another function to fetch the weather data using the latitude and longitude
//         fetchWeatherData(latitude, longitude);
//       } else {
//         console.log('No results found for the specified city.');
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//     });
//   }

//   fetchCoordinates('London');
//   fetchCoordinates('Mumbai');
//   fetchCoordinates('Bengaluru');