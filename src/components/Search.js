import React from 'react';
import { Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

function searchLoad() {
  console.log("hello");

  function addResult(location) {
    let resultButton = document.createElement("Button");
    resultButton.innerHTML = location;
    resultButton.classList.add("search-container-result");
    resultButton.variant = "outlined";
    document.getElementById("results-table").appendChild(resultButton);
  }

  addResult("London");
  addResult("New York");

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