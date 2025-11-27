import React, { useState, useEffect } from "react";
import { fetchWeatherByCity } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Toronto");
  const [query, setQuery] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadWeather = async (cityName) => {
  try {
    setLoading(true);
    setError("");
    const data = await fetchWeatherByCity(cityName);

    const mapped = {
    city: data.location?.name,
    region: data.location?.region,
    country: data.location?.country,
    temp: data.current?.temp_c,
    feelsLike: data.current?.feelslike_c,
    humidity: data.current?.humidity,
    windSpeed: data.current?.wind_kph,
    description: data.current?.condition?.text,
    icon: data.current?.condition?.icon,
  };


    setWeather(mapped);
    setCity(cityName);
  } catch (err) {
    console.error(err);
    setError("Could not find weather for that city. Try again.");
    setWeather(null);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    loadWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    loadWeather(query.trim());
  };

  return (
    <div className="app-root">
      <div className="app-card">
        <h1 className="app-title">Weather Now</h1>
        <p className="app-subtitle">Search any city to view current conditions.</p>

        <form className="search-row" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Enter city (e.g., Toronto, London)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </button>
        </form>

        {error && <div className="error-banner">{error}</div>}

        {weather && !loading && (
          <WeatherCard
            city={weather.city}
            country={weather.country}
            temp={weather.temp}
            feelsLike={weather.feelsLike}
            humidity={weather.humidity}
            windSpeed={weather.windSpeed}
            description={weather.description}
            icon={weather.icon}
          />
        )}

        {!weather && !loading && !error && (
          <p className="placeholder-text">
            Type a city name and hit search to see the weather.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
