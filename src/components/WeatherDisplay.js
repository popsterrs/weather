import React from 'react';
import { Button } from '@mui/material';

var units = "metric";
var temperature = 0;

function updateWeatherDisplay(city, country) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=1bb73886a8a1fffcd95bb4228ba817ab&units=" + units)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("temperature").innerHTML = (Math.round(data.main.temp * 10) / 10) +"°C";
        document.getElementById("location").setAttribute("data-city", data.name);
        document.getElementById("location").setAttribute("data-country", data.sys.country);
        document.getElementById("lat-lon").innerHTML = "lat: " + data.coord.lat + ", lon:" + data.coord.lon
    })
    .catch(error => {
        console.error(error);
    });
};

function weatherDisplayLoad(){
    updateWeatherDisplay("London", "GB");
};

function WeatherDisplay() {

  return (
    <div class="weather-display-container">
        <div class="weather-display-container-x">
            <ul>
                <li id="location" class="weather-display-location-title"></li>
                <li id="lat-lon" class="weather-display-lat-lon ">40.7128° N, 74.0060° W</li>
                <li id="temperature" class="weather-display-temperture">31.2°C</li>
            </ul>
        </div>
        <div class="weather-display-container-x no-border">
            <div class="weather-display-container-y">

            </div>
            
            <div class="weather-display-container-y no-border">

            </div>
        </div>
    </div>
  );
}

export { WeatherDisplay, weatherDisplayLoad, updateWeatherDisplay };