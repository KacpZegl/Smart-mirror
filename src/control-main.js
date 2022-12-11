
var getWeather_time = 30; //in minutes


getWeather_time = getWeather_time * 60 * 100;

setInterval(getTime, 500);
getWeather();
setInterval(getWeather, getWeather_time);
getDays();