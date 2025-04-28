


import React, { useState, useEffect } from 'react';

export default function Shuvo() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const API_URL = ""; // Correct endpoint for weatherapi.com
  const API_KEY = ""; // Your API key
  const CITY = "Kolkata"; // City name for weather data

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${API_URL}?key=${API_KEY}&q=${CITY}` // Proper template string syntax and parameters
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
      
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {count}</p>
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

