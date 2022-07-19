import React from "react";

export default function SearchLocationTime(props) {
  const time = props.time;
  const localTimezoneOffset = props.localTimezoneOffset;
  const searchCityTimezoneOffset = props.searchCityTimezoneOffset;

  const adjustedTime = new Date(
    time - localTimezoneOffset + searchCityTimezoneOffset
  );
  const date = new Date(adjustedTime);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];

  let hours = date.getHours();
  const ampm = hours < 12 ? "am" : "pm";
  if (hours > 12) {
    hours = `${hours - 12}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes} {ampm} ( {props.name} Time )
    </div>
  );
}
