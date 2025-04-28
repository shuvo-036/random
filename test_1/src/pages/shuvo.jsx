import React, { useState, useEffect } from 'react';
import './shuvo.css';

export default function Shuvo() {


  const API_URL = "https://api.weatherapi.com/v1/current.json"; 
  const API_KEY = "your_real_api_key_here"; // Put your real API key here
  const CITY = "Kolkata"; 

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${API_URL}?key=${API_KEY}&q=${CITY}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="App">
    

      {error && <p>Error: {error}</p>}
      {!weather && !error && <p>Loading weather data...</p>}

      {weather && (
        <div className="weather-card">
          <h2>Weather in {weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}
