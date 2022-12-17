
var getWeather_time = 5; //in minutes
var getForecast_time = 10; //in minutes
var fullDate = new Date();
var forecast_time = fullDate.getHours();


getWeather_time = getWeather_time * 60 * 1000;
getForecast_time = getForecast_time * 60 * 1000;

setInterval(getTime, 500);
getWeather();
setInterval(getWeather, getWeather_time);
getForecast();
if (forecast_time == 00, forecast_time == 03)
setInterval(getForecast, getForecast_time);
getDays();
console.log(forecast_time+"czas");
