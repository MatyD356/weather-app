import React from 'react'

const CardTemp = (props) => {
  return (
    <div className="Card-temp-switch">
      <p className="Card-temp-title">
        {props.unit ? `${props.toCelsius(props.apiData[props.i].main.temp)}°C`
          : `${props.toFarenheit(props.apiData[props.i].main.temp)}°F`}
      </p>
      <div className="onoffswitch">
        <input
          type="checkbox"
          id={props.id}
          className="onoffswitch-checkbox"
          onChange={props.handleSwitch}
          checked={props.unit}
        />
        <label className="onoffswitch-label" htmlFor={props.id}>
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    </div>
  )

}

export default CardTemp