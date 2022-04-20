import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
export default function WeatherApp() {
  let [city, setCity] = useState(" ");
  const [Weather, setWeather] = useState("You will see weather here");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `faf90a5bc03e42145a435bf92d2bbff7
`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    console.log(response.data);
    setWeather(
      <div className="showWeather">
        <p>
          {" "}
          <ul>
            <li className="City">{city}</li>
            <li className="Temperature">
              Temperature:{Math.round(response.data.main.temp)}°C
            </li>
            <li className="Description">
              Description: {response.data.weather[0].description}{" "}
            </li>
            <li className="Humidity">
              Humidity:{response.data.main.humidity}%
            </li>
            <li className="Wind">
              Wind: {Math.round(response.data.wind.speed)}km/h
            </li>
            <li className="img">
              <img
                src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                alt={response.data.weather[0].description}
              ></img>
            </li>
          </ul>
        </p>
      </div>
    );
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" title="search" />
      </form>
      <h2>{Weather}</h2>
    </div>
  );
}
