import React from 'react';
import { Button } from '@mui/material';

var units = "metric";
var temperature = 0;

function updateWeatherDisplay(city, country) {
    localStorage.setItem("lastLocation", city + ", " + country);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=1bb73886a8a1fffcd95bb4228ba817ab&units=" + units)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(liveData => {
        document.getElementById("temperature").innerHTML = (Math.round(liveData.main.temp * 10) / 10) +"°C";
        document.getElementById("location").setAttribute("data-city", liveData.name);
        document.getElementById("location").setAttribute("data-country", liveData.sys.country);
        document.getElementById("lat-lon").innerHTML = "lat: " + liveData.coord.lat + ", lon:" + liveData.coord.lon
    })
    .catch(error => {
        console.error(error);
    });

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=1bb73886a8a1fffcd95bb4228ba817ab&units=" + units)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(forecastData => {
        let elements = document.getElementsByClassName("weather-display-icon");
        while (elements.length > 0) {
          elements[0].remove();
        }

        let elements2 = document.getElementsByClassName("weather-display-time-text");
        while (elements2.length > 0) {
          elements2[0].remove();
        }
        for (var i = 0; i < 5; i++) {
            var div = document.createElement("div");
            div.classList.add("weather-display-top-column")
            document.getElementById("weather-display-top-container").appendChild(div);

            var icon = document.createElement("img");
            icon.src = "http://openweathermap.org/img/wn/" + forecastData.list[i].weather[0].icon + "@2x.png"
            icon.classList.add("weather-display-icon");

            var date = new Date(forecastData.list[i].dt_txt)

            var timeText = document.createElement("span");
            timeText.innerHTML = date.getHours() + ":00";
            timeText.classList.add("weather-display-time-text");

            div.appendChild(icon);
            div.appendChild(document.createElement("br"));
            div.appendChild(timeText);
        }
    })
    .catch(error => {
        console.error(error);
    });
};

function weatherDisplayLoad(){
    if (localStorage.getItem("lastLocation")) {
        var [city, country]= localStorage.getItem("lastLocation").split(", ");
        updateWeatherDisplay(city, country);
    } else {
        updateWeatherDisplay("London", "GB");
    }
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
            <div id = "weather-display-top" class="weather-display-container-y">
                <div id = "weather-display-top-container" class="weather-display-top-container">

                </div>
            </div>
            
            <div class="weather-display-container-y no-border">

            </div>
        </div>
    </div>
  );
}

export { WeatherDisplay, weatherDisplayLoad, updateWeatherDisplay };