import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios"
import "./Weather.css";
export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
          temperature: response.data.temperature,
          humidity: response.data.temperature.humidity,
          date: new Date(response.data.dt * 1000),
          wind: response.data.wind,
          city: response.data.city,
          description: response.data.condition.description,
          icon: response.data.condition.icon,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
       search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
      const apiKey = "e2t5dd99b4cfa003ed9aaof63c44d73c";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

   if (weatherData.ready) {
    return (
        <div className="weather">
            <form onSubmit={handleSubmit}>
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
                            className="btn btn-primary w-100" onChange={handleCityChange}
                        />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} /> 
        </div>
    );
   } else {
    search();
    return "Loading Weather...";
   }

}