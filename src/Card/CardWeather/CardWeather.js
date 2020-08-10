import React from 'react'
import './CardWeather.scss'

const CardWeather = (props) => {
  return (
    <div className="Card-weather">
      {props.ChoseIcon(props.apiData)[0]}
      <h2>Weather:</h2>
      <p>{props.apiData[props.i].weather[0].description}</p>
    </div>
  )
}

export default CardWeather