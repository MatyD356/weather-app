import React, { useState } from 'react'
import './CityInput.scss'
import SearchIcon from '@material-ui/icons/Search';

const CityInput = ({ newCity }) => {
  const [inputValue, setInputValue] = useState('')
  const handleSearchSubmit = () => {
    newCity(inputValue)
    console.log(inputValue);
  }
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="CityInput-container">
      <input
        onChange={handleInput}
        placeholder="enter a city"
        className="CityInput" />
      <button
        onClick={handleSearchSubmit}
        className="CityInput-icon">
        <SearchIcon />
      </button>
    </div>
  )
}
export default CityInput