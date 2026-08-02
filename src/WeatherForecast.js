import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "e2t5dd99b4cfa003ed9aaof63c44d73c";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecastDay">Thurs</div>
            <WeatherIcon code="clear-sky-day" size={36} />
            <div className="weatherForecastTemp">
                <span className="weatherForecastMax">19°</span>
                <span className="weatherForecastMin">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}