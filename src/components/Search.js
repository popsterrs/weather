import React from 'react';
import { Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import cityList from "../context/cityList.json";
import { updateWeatherDisplay } from '../components/WeatherDisplay';

function searchLoad() {
  var results = 0;

  document.getElementById("input").addEventListener("input", function ({ target }) {
    let data = target.value;
    results = 0;

    let elements = document.getElementsByClassName("search-container-result")
    while (elements.length > 0) {
      elements[0].remove();
    }

    if (data.length) {
      let autoCompleteValues = autoComplete(data);
      autoCompleteValues.forEach(value => { addResult(value); });
    }
  });

  function autoComplete(inputValue) {
    let citiesAndCountries = cityList.map(city => {
      return { city: city.name + ", " + city.country };
    });

    const cities = citiesAndCountries.map(item => item.city);
    const countries = citiesAndCountries.map(item => item.country);

    let filtered = cities.filter(
      (value) => value.toLowerCase().includes(inputValue.toLowerCase())
    );
 
    let final = []
    let max = 7
    if (filtered.length < 75) {
      max = 75;
    }
    for (var i = 0; i < max; i++) {
      final[i] = filtered[i];
    }

    return final;
  }

  function addResult(location) {
    if (location) {
      let resultButton = document.createElement("Button");
      resultButton.innerHTML = location;
      resultButton.classList.add("search-container-result");
      resultButton.variant = "outlined";
      document.getElementById("results-table").appendChild(resultButton);

      resultButton.addEventListener("click", function(){  
        document.getElementById("blur-container").classList.remove("blur");
        document.getElementById("search-container").classList.remove("show");

        var [city, country]= location.split(", ");
        updateWeatherDisplay(city, country);
      });
    }

    results ++;
  }

  document.getElementById("escape").addEventListener("click", function() {
    document.getElementById("blur-container").classList.remove("blur");
    document.getElementById("search-container").classList.remove("show");
  }, false);

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.getElementById("blur-container").classList.remove("blur");
      document.getElementById("search-container").classList.remove("show");
    }
  }, false);  
};

function Search() {

  return (
    <div id="search-container" class="search-container">
        <div class="search-container-top">
          <SearchOutlined class="nav-bar-icon nav-bar-search-icon search-container-top-icon"/>
          <input id="input" type="text" autoComplete="off" placeholder="Search..."></input>
          <Button id="escape" class="nav-bar-button-right" variant="outlined">
            esc
          </Button>
        </div>
        <div id="results-table" class="search-container-bottom">
        </div>
    </div>
  );
}

export { Search, searchLoad };