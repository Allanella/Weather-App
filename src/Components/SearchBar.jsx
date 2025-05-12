import React, { useState } from 'react'

const SearchBar = ({city, setCity}) => {
    const [search, setSearch] = useState(city)

    const handleChange = (e)=> {
      setSearch(e.target.value)
      
    }
  return (
    <div className=' w-full max-w-md flex  items-center' >
        <input  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'  type='text' placeholder='Enter city name ' value ={search}  onChange={handleChange}/>
      <button onClick={()=>{setCity(search)}} className=" px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Search</button>
    </div>
  )
}

export default SearchBar
