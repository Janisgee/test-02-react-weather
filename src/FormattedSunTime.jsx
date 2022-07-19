import React from "react";

export default function FormattedSunTime(props) {
  const sunTime = props.SunTime;
  const localTimezoneOffset = props.localTimezoneOffset;
  const searchCityTimezoneOffset = props.searchCityTimezoneOffset;

  const adjustedSunTime = new Date(
    sunTime - localTimezoneOffset + searchCityTimezoneOffset
  );

  let hours = adjustedSunTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = adjustedSunTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
