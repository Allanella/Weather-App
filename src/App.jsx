import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import WeatherApi from './Components/WeatherApi'
import WeatherCard from './Components/WeatherCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center p6'>

        <h1 className='text-4xl font-bold text-gray-800 mb-8 shadow-sm' >My Weather App</h1>
        <WeatherCard/>
        </div>
    
  )
}

export default App
