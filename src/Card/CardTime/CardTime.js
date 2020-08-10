import React from 'react'
import './CardTime.scss'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CardTime = (props) => {
  return (
    <div className="Card-time">
      <button className="Card-hour-up btn" onClick={props.decrementI} >
        <ArrowBackIosIcon style={{ fontSize: 40 }} />
      </button>
      <h2 className="Card-time-display">{props.apiData[props.i].dt_txt.slice(10, 16)}</h2>
      <button className="Card-hour-up btn" onClick={props.incrementI} >
        <ArrowForwardIosIcon style={{ fontSize: 40 }} />
      </button>
    </div>
  )
}
export default CardTime