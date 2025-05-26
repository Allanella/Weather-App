import React, { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherApi from './WeatherApi'
import ForeCast from './ForeCast'

const WeatherCard = () => {

    const [city, setCity] = useState("London")

  return (
    <div>
      <SearchBar city={city} setCity={setCity}/>
      <WeatherApi city={city}/>
      <ForeCast city={city}/>
    </div>
  )
}

export default WeatherCard
