import React from "react";

const WeatherCard = ({
  city,
  country,
  temp,
  feelsLike,
  humidity,
  windSpeed,
  description,
  icon,
}) => {
  const iconUrl = icon
    ? `http://openweathermap.org/img/wn/${icon}@2x.png`
    : null;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div>
          <h2 className="weather-city">
            {city}
            {country ? `, ${country}` : ""}
          </h2>
          <p className="weather-description">
            {description ? description.charAt(0).toUpperCase() + description.slice(1) : "-"}
          </p>
        </div>
        {iconUrl && (
          <img
            src={iconUrl}
            alt={description || "Weather icon"}
            className="weather-icon"
          />
        )}
      </div>

      <div className="weather-main">
        <div className="temp-main">
          {temp !== undefined ? `${Math.round(temp)}°C` : "--"}
        </div>
        <div className="temp-details">
          <p>Feels like: {feelsLike !== undefined ? `${Math.round(feelsLike)}°C` : "--"}</p>
          <p>Humidity: {humidity !== undefined ? `${humidity}%` : "--"}</p>
          <p>Wind: {windSpeed !== undefined ? `${windSpeed} m/s` : "--"}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
