import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.scss'

const Card = (props) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  const CardContnet = () => {
    return (
      <h2>{data.city.name}</h2>
    )
  }
  return (
    <div className={`Card ${props.bgTemp}`} >
      {props.loading === true ? <div className="Card-loading" /> : data ? CardContnet() : null}
    </div >
  )
}

export default Card