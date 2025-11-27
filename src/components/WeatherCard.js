import React from "react";

const WeatherCard = ({
  city,
  country,
  region,
  temp,
  feelsLike,
  humidity,
  windSpeed,
  description,
  icon,
}) => {
  const iconUrl = icon ? `https:${icon}` : null;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div>
          <h2 className="weather-city">
            {city}
            {region ? `, ${region}` : ""}
            {country ? `, ${country}` : ""}
          </h2>

          <p className="weather-description">
            {description
              ? description.charAt(0).toUpperCase() + description.slice(1)
              : "-"}
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
          <p>
            Feels like:{" "}
            {feelsLike !== undefined ? `${Math.round(feelsLike)}°C` : "--"}
          </p>
          <p>Humidity: {humidity !== undefined ? `${humidity}%` : "--"}</p>
          <p>Wind: {windSpeed !== undefined ? `${windSpeed} kph` : "--"}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
