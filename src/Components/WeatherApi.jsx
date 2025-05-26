import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherApi = ({city}) => {
  const [data, setData] = useState({
    city: "london",
    country: "",
    humidity: 0,
    temperature: 0,
    speed: 0,
  });

  const FetchData = async () => {
    const MyApiKey = "57a520cdde2a8f2129ca6562acb550d6";
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MyApiKey}`;

    try {
      const WeatherData = await axios.get(Url);
      const weather = WeatherData.data;
      setData((prev) => ({
        ...prev,
        city:weather.name,
        country: weather.sys.country,
        humidity: weather.main.humidity,
        temperature: (weather.main.temp - 273.15).toFixed(1),
        speed: weather.wind.speed,
      }));
    } catch (err) {
      alert("Please enter correct city name");
    }
  };

  useEffect(() => {
    FetchData();
  }, [city]);
  return (
    <div className="mt-6 text-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">
        Weather in {data.city}, {data.country}
      </h2>
      <p>Temperature: {data.temperature} °C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.speed} m/s</p>
    </div>
  );
};

export default WeatherApi;
