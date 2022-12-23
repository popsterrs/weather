import React from 'react';
import { Button } from '@mui/material';
import { wait } from '@testing-library/user-event/dist/utils';

function WeatherDisplay() {
    /*
    window.onload = function() {
        var location = "New York";
        var temperature = 2;
    
    
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Louth,uk&appid=1bb73886a8a1fffcd95bb4228ba817ab&units=metric")
        .then(response => {
            if (!response.ok) {
            throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("temperature").innerHTML = (Math.round(data.main.temp * 10) / 10) +"°C";
            document.getElementById("location").innerHTML = data.name
            document.getElementById("lat-lon").innerHTML = "lat: " + data.coord.lat + ", lon:" + data.coord.lon
        })
        .catch(error => {
            console.error(error);
        });
    }
 */

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

export default WeatherDisplay;