import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="weatherApp-wrapper">
        <WeatherApp />
      </div>
      <div className="open-sourced">
        This project was coded by Janis Chan and is open-sourced on GitHub and
        hosted on Netlify.
      </div>
    </div>
  );
}

export default App;
