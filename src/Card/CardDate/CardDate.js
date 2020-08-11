import React from 'react'
import './CardDate.scss'

const CardDate = (props) => {
  return (
    <div className="Card-date-container">
      <div className="Card-day">
        <h2>{props.getDayOfWeek(props.data.list)}</h2>
        <p>{props.data.city.name} | {props.data.city.country}</p>
      </div>
      <div className="Card-date">
        <h2>Date:</h2>
        <p>{props.data.list[0].dt_txt.slice(0, 10)}</p>
      </div>
    </div>
  )
}

export default CardDate