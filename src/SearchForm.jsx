import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function SearchForm(props) {
  const [inputCity, setInputCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      name: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      time: new Date(response.data.dt * 1000),
      timezone: response.data.timezone * 1000,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
    });
  }

  function search() {
    const apiKey = `a513b21d78589444326866c8a9a6147f`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getInputValue(event) {
    setInputCity(event.target.value);
  }

  const form = (
    <form className="row form" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          type="search"
          placeholder="Please type a city name ..."
          className="form-control"
          autoFocus="on"
          autoComplete="off"
          onChange={getInputValue}
        />
      </div>
      <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </div>{" "}
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <WeatherData weather={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        {form}
        <div>Loading for {inputCity}</div>
      </div>
    );
  }
}
