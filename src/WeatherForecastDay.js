import React from "react";
import WeatherIcon from "./WeatherIcon"
export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

     function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

        return days[day];
    }


    return (
      <div>
        <div className="weatherForecastDay">{day()}</div>
        <WeatherIcon code={props.data.condition.icon} size={36} />
        <div className="weatherForecastTemp">
          <span className="weatherForecastMax">
            {maxTemperature()}
          </span>
          <span className="weatherForecastMin">
            {minTemperature()}
          </span>
        </div>
      </div>
    );
}