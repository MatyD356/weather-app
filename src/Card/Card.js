import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.scss'

const Card = (props) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  const getDayOfWeek = () => {
    const week = [
      'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
    return week[new Date(data.list[0].dt_txt.slice(0, 10)).getDay() - 1];
  }
  const CardContnet = () => {
    return (
      <div>
        <h2>{data.city.name}</h2>
        <h3>{getDayOfWeek()}</h3>
        <p>{data.list[0].dt_txt.slice(0, 10)}</p>
        <CardTime />
      </div>
    )
  }
  const CardTime = () => {
    const [i, setI] = useState(0);
    return (
      <div>
        <button onClick={() => i > 0 ? setI(i - 1) : null} >-</button>
        <h2>{data.list[i].dt_txt.slice(10, 16)}</h2>
        <button onClick={() => i < data.list.length - 1 ? setI(i + 1) : null} >+</button>
      </div>
    )
  }
  return (
    <div className={`Card ${props.bgTemp}`} >
      {props.loading === true ? <div className="Card-loading" /> : data ? CardContnet() : null}
    </div >
  )
}

export default Card