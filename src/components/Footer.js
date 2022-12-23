import React from 'react';
import { Button } from '@mui/material';

function Footer() {
  return (
    <div class="footer-container">
      <div class="footer-container-column">
          <span class="footer-container-column-title">Resources</span>
          <ul>
            <li> <a href="https://www.openweathermap.org" class="footer-container-column-button">OpenWeatherMapAPI</a> </li>
            <li> <a href="https://www.mui.com" class="footer-container-column-button">Material UI</a> </li>
          </ul>
      </div>
      <div class="footer-container-column">
          <span class="footer-container-column-title">Help</span>
          <ul>
            <li> <a href="https://www.openweathermap.org" class="footer-container-column-button">OpenWeatherMapAPI</a> </li>
            <li> <a href="https://www.mui.com" class="footer-container-column-button">Material UI</a> </li>
          </ul>
      </div>
      <div class="footer-container-column">
          <span class="footer-container-column-title">Contact</span>
          <ul>
            <li> <a href="https://www.example.com" class="footer-container-column-button">Discord</a> </li>
            <li> <a href="https://www.example.com" class="footer-container-column-button">Twitter</a> </li>
            <li> <a href="https://www.example.com" class="footer-container-column-button">Instagram</a> </li>
            <li> <a href="https://www.example.com" class="footer-container-column-button">LinkedIn</a> </li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;

