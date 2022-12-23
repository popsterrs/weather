import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined, GitHub, SearchOutlined, Cloud } from '@mui/icons-material';

function navbarLoad() {
  console.log("hi");

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem("darkmode", "true");

    document.getElementById("moon").classList.remove("hide");
    document.getElementById("sun").classList.add("hide");
  } else {
    localStorage.setItem("darkmode", "false");

    document.getElementById("moon").classList.add("hide");
    document.getElementById("sun").classList.remove("hide");
  }

  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  document.getElementById("darkmode-toggle").addEventListener("click", function() {
    if (localStorage.getItem("darkMode") === "true") {
      localStorage.setItem("darkMode", "false");
      document.body.classList.remove("dark");

      document.getElementById("moon").classList.remove("hide");
      document.getElementById("sun").classList.add("hide");
    } else {
      localStorage.setItem("darkMode", "true");
      document.body.classList.add("dark");

      document.getElementById("moon").classList.add("hide");
      document.getElementById("sun").classList.remove("hide");
    }
  }, false);

 document.getElementById("github-button").addEventListener("click", function() {
  window.open("https://www.github.com/popsterrs/weather", "_blank");
 }, false);

document.getElementById("search-bar").addEventListener("click", function() {
  document.getElementById("blur-container").classList.toggle("blur");
  document.getElementById("search-container").classList.toggle("show");
 }, false);
};

function Navbar() {

  return (
    <nav class="nav-bar">
      <div class="nav-bar-content">
        <div class="nav-bar-left">
          
        </div>
        <div class="nav-bar-right">
          <Button id="search-bar" class="nav-bar-button-right nav-bar-search-bar" variant="contained-">
          <SearchOutlined class="nav-bar-icon nav-bar-search-icon"/>
            <span class="nav-bar-search-bar-text">Search...</span>
          </Button>

          <Tooltip title="GitHub repository">
            <Button id="github-button" class="nav-bar-button-right" variant="outlined">
              <GitHub class="nav-bar-icon"/>
            </Button>
          </Tooltip>

          <Tooltip id="tooltip" title="Toggle Darkmode">
            <Button id="darkmode-toggle" class="nav-bar-button-right" variant="outlined">
              <LightModeOutlined id="sun" class="nav-bar-icon"/>
              <DarkModeOutlined id="moon" class="nav-bar-icon"/>
            </Button>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}

export { Navbar, navbarLoad };