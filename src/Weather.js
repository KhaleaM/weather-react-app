import React, { useState } from "react";
import axios from "axios"
import "./Weather.css";
export default function Weather() {

    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
          temperature: response.data.temperature,
          humidity: response.data.temperature.humidity,
          date: "Wednesday 7:00",
          wind: response.data.wind,
          city: response.data.city,
          description: response.data.condition.description,
          iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
        });
    }

   if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text- capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature.current)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.temperature.humidity} %</li>
              <li>Wind: {weatherData.wind.speed} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
   } else {
    const apiKey = "e2t5dd99b4cfa003ed9aaof63c44d73c";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading Weather...";
   }

}