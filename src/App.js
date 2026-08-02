import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/182572-khalea-mitchell"
            target="_blank"
            rel="noreferrer"
          >
            Khalea Mitchell
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/KhaleaM/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}


