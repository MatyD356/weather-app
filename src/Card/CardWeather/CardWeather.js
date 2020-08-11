import React from 'react'
import './CardWeather.scss'

const CardWeather = (props) => {
  return (
    <div className="Card-weather">
      <div className="Card-weather-icon">
        {props.ChoseIcon(props.apiData)[0]}
      </div>
      <h2>Weather:</h2>
      <p>{props.apiData[props.i].weather[0].description}</p>
    </div>
  )
}

export default CardWeather