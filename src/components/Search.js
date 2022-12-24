import React from 'react';
import { Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import cityList from "../context/cityList.json";

function searchLoad() {
  console.log("hello");
  console.log(cityList.length);
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

    console.log(results);
  });

  function autoComplete(inputValue) {
    let destinations = cityList.map(city => city.name)

    let filtered = destinations.filter(
      (value) => value.toLowerCase().includes(inputValue.toLowerCase())
    );

    let final = []
    for (var i = 0; i < 6; i++) {
      final[i] = filtered[i]
    }

    console.log(final);

    return final;
  }

  function addResult(location) {
    if (location) {
      let resultButton = document.createElement("Button");
      resultButton.innerHTML = location;
      resultButton.classList.add("search-container-result");
      resultButton.variant = "outlined";
      document.getElementById("results-table").appendChild(resultButton);
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
          <input id="input" type="text" placeholder="Search..."></input>
          <Button id="escape" class="nav-bar-button-right" variant="outlined">
            esc
          </Button>
        </div>
        <div id="results-table"class="search-container-bottom">
        </div>
    </div>
  );
}

export { Search, searchLoad };