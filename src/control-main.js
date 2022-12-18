
var getWeather_time = 5; //in minutes
var getForecast_time = 10; //in minutes
var fullDate = new Date();
var forecast_time = fullDate.getHours();

getWeather_time = getWeather_time * 60 * 1000;
getForecast_time = getForecast_time * 60 * 1000;

function Update() {
    var isOnline = window.navigator.onLine;
    if (isOnline) {
        console.log('Online');
        getWeather();
        setInterval(getWeather, getWeather_time);
        getForecast();
        setInterval(getForecast, getForecast_time);
    } else {
        console.log('Offline');
    }
    setInterval(getTime, 500);
    getDays();
}
setInterval(Update, 1000);

