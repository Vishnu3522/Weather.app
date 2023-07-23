import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About WeatherApp</h1>
      <div className="about-content">
        <p>
          Welcome to WeatherApp, your ultimate weather companion! With WeatherApp, you can explore
          the weather forecast for any location around the world and plan your day with confidence.
        </p>
        <p>
          Our mission is to provide you with accurate and up-to-date weather information in an
          intuitive and user-friendly interface. Whether you want to check the current weather
          conditions, view hourly or daily forecasts, or track weather changes in your favorite
          cities, WeatherApp has got you covered.
        </p>
        <p>
          We understand the importance of staying informed about the weather, whether you're
          traveling, planning outdoor activities, or just curious about what's happening outside.
          That's why we've made WeatherApp simple and reliable, so you can access the weather data
          you need, when you need it.
        </p>
        <p>
          Download WeatherApp now and embark on your weather journey. Stay prepared, stay informed,
          and stay ahead of the weather!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
