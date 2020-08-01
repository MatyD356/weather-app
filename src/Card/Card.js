import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <div className={`Card ${props.bgTemp}`} >
      {props.loading === true ? <div className="Card-loading" /> : null}
    </div >
  )
}

export default Card