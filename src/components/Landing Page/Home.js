import React, { useState, useRef } from 'react';
import '../../styles/Home.css';
import { key, base } from '../../Apikey';
import WeatherDetails from '../WeatherDetails';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const locationInputRef = useRef(null);

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    const location = locationInputRef.current.value;
    const apiUrl = `${base}weather?q=${location}&appid=${key}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found or other error occurred.');
      }
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      locationInputRef.current.value = '';
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('City not found or other error occurred. Please enter a valid city name.');
    }
  };

  const handleClear = () => {
    setWeatherData(null);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to WeatherApp</h1>
        <p>Check the weather forecast for any location</p>
      </div>
      <div className="search-bar-container">
        <form onSubmit={fetchWeatherData}>
          <input
            type="text"
            placeholder="Enter a location (e.g., city name)"
            ref={locationInputRef}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {weatherData && (
        <div>
          <WeatherDetails weatherData={weatherData} handleClear={handleClear} />
        </div>
      )}
    </div>
  );
};

export default Home;
