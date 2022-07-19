import React from "react";
import SearchLocationTime from "./SearchLocationTime";
import FormattedSunTime from "./FormattedSunTime";
import TemperatureConvertion from "./TemperatureConvertion";

export default function WeatherData(props) {
  const localTimezoneOffset = new Date().getTimezoneOffset() * -60 * 1000;
  console.log(localTimezoneOffset);

  return (
    <div>
      <h1>{props.weather.name}</h1>
      <ul>
        <li>
          <SearchLocationTime
            time={props.weather.time}
            name={props.weather.name}
            searchCityTimezoneOffset={props.weather.timezone}
            localTimezoneOffset={localTimezoneOffset}
          />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear Sky"
              className="weatherIcon float-start"
            />
            <TemperatureConvertion
              celsius={Math.round(props.weather.temperature)}
              fahrenheit={(props.weather.temperature * 9) / 5 + 32}
            />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Sunrise:{" "}
              <FormattedSunTime
                SunTime={props.weather.sunrise}
                searchCityTimezoneOffset={props.weather.timezone}
                localTimezoneOffset={localTimezoneOffset}
              />
            </li>
            <li>
              Sunset:{" "}
              <FormattedSunTime
                SunTime={props.weather.sunset}
                searchCityTimezoneOffset={props.weather.timezone}
                localTimezoneOffset={localTimezoneOffset}
              />
            </li>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
