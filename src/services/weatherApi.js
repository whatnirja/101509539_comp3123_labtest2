import axios from "axios";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherByCity = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;

  if (!apiKey) {
    throw new Error("Missing REACT_APP_OPENWEATHER_KEY in .env");
  }

  const response = await axios.get(API_BASE, {
    params: {
      q: city,
      appid: apiKey,
      units: "metric",
    },
  });

  return response.data;
};
