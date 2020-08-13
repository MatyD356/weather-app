import React from 'react'
import './CardTemp.scss'

const CardTemp = (props) => {
  return (
    <div className="Card-temp">
      <div className="Card-temp-switch">
        <p>
          {props.unit ? `${props.toCelsius(props.apiData[props.i].main.temp)}°C`
            : `${props.toFarenheit(props.apiData[props.i].main.temp)}°F`}
        </p>
        <button className="on-off-switch">
          <input
            type="checkbox"
            id={props.id}
            className="on-off-switch-checkbox"
            onChange={props.handleSwitch}
            checked={props.unit}
          />
          <label className="on-off-switch-label" htmlFor={props.id}>
            <span className="on-off-switch-inner"></span>
            <span className="on-off-switch-switch"></span>
          </label>
        </button>
      </div>
    </div>
  )

}

export default CardTemp