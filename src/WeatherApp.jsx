import React from "react";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div>
      <div className="container WeatherApp">
        <SearchForm defaultCity="Tokyo" />
      </div>
    </div>
  );
}
