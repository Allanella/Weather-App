import React, { useEffect, useState } from "react";
import axios from "axios";

const ForeCast = ({ city }) => {
  const [fore, setFore] = useState([]);

  const fetchForecast = async () => {
    const MyApiKey = "57a520cdde2a8f2129ca6562acb550d6";
    const MyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${MyApiKey}`;

    try {
      const forecastData = await axios.get(MyUrl);
      const allForecasts = forecastData.data.list;

      // Filter entries for 12:00 PM each day
      const daily = allForecasts.filter(item =>
        item.dt_txt.includes("12:00:00")
      );

      setFore(daily);
    } catch (err) {
      console.error("Error fetching forecast:", err);
    }
  };

  useEffect(() => {
    if (city) {
      fetchForecast(); 
    }
  }, [city]);

  return (
    <div className="mt-6 text-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">5-Day Forecast for {city}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {fore.map((item, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <p className="font-bold">{item.dt_txt.split(" ")[0]}</p>
            <p>Temp: {(item.main.temp - 273.15).toFixed(1)} °C</p>
            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeCast;
