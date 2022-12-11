// First, we define some variables to store the API key and the location for which we want to display the weather
const API_KEY = '99b2e4cb92637e289cd04acd2347114c';
const LOCATION = 'Gliwice, PL';

// Then, we define a function that makes a request to the OpenWeatherMap API to retrieve the weather information for the specified location
function getWeather() {
  // We use the fetch API to make a GET request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&lang=pl&appid=${API_KEY}`)
        .then(response => response.json()) // Once we receive the response, we parse it as JSON
        .then(data => {
        // Then, we extract the relevant information from the response and store it in some variables
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        
        // Next, we update the page with the retrieved weather information
        document.getElementById('temperature').innerHTML = temperature;
        document.getElementById('weather-description').innerHTML = weatherDescription;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    });
}

// Finally, we call the getWeather function when the page loads
//window.onload = getWeather;
