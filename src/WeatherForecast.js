import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
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