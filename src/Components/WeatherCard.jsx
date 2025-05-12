import React, { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherApi from './WeatherApi'

const WeatherCard = () => {

    const [city, setCity] = useState("london")

  return (
    <div>
      <SearchBar city={city} setCity={setCity}/>
      <WeatherApi city={city}/>
    </div>
  )
}

export default WeatherCard
