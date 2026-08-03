import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }



    if (loaded) {
        console.log(forecast);
         return (
           <div className="weatherForecast">
             <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index < 5) {
                        return (
                          <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                          </div>
                        );
                    }
                })}
             </div>
           </div>
         );

    } else {
       let apiKey = "e2t5dd99b4cfa003ed9aaof63c44d73c";
       let longitude = props.coordinates.longitude;
       let latitude = props.coordinates.latitude;
       let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);

       return null;
    }

}