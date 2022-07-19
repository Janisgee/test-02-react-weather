import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="weatherApp-wrapper">
        <WeatherApp />
      </div>
      <div className="open-sourced">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/jc-janis-chan"
          title="Janis LinkedIn Profile"
          target="_blank"
        >
          Janis Chan
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Janisgee/test-02-react-weather"
          title="Weather App Github Source Code"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and
        <a
          href="https://app.netlify.com/teams/janisgee/overview"
          title="Netlify Profile"
          target="_blank"
        >
          {" "}
          hosted on Netlify
        </a>
        .
      </div>
    </div>
  );
}

export default App;
