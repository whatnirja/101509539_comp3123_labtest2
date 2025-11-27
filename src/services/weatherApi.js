import axios from "axios";

const API_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchWeatherByCity = async (city) => {
  const key = process.env.REACT_APP_WEATHERAPI_KEY;

  if (!key) throw new Error("Missing REACT_APP_WEATHERAPI_KEY");

  const response = await axios.get(API_URL, {
    params: {
      key: key,
      q: city,
    },
  });

  console.log("ENV KEY:", process.env.REACT_APP_WEATHERAPI_KEY);
  console.log("API KEY:", key);

  return response.data;
};
