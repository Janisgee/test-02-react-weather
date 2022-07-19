import React, { useState } from "react";

export default function TemperatureConvertion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature float-start">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="inactive">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature float-start">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius} className="inactive">
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
