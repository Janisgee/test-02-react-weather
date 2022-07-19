import React from "react";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div>
      <div className="container WeatherApp">
        <SearchForm />
        <h1>Paris</h1>
        <ul>
          <li>Tuesday 16:55</li>
          <li>Clear Sky</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear Sky"
                className="weatherIcon float-start"
              />
              <span className="temperature float-start">32</span>

              <span className="unit">°C | °F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Sunrise: 05:37</li>
              <li>Sunset: 19:45</li>
              <li>Humidity: 31%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
