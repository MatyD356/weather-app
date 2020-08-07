import React, { useEffect } from 'react'
import { useState } from 'react'
import CardChart from './CardChart'
import './Card.scss'


import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import WavesIcon from '@material-ui/icons/Waves';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Card = (props) => {
  const [data, setData] = useState(null);
  const [i, setI] = useState(0);
  const [isOn, setOn] = useState(true)

  useEffect(() => {
    setData(props.data)
  }, [props.data])
  const getDayOfWeek = (dataArray) => {
    const week = [
      'Sunday', 'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday'
    ]
    return week[new Date(dataArray[i].dt_txt.slice(0, 10)).getDay()];
  }
  const KelwinToCelsius = (tempKelvin) => {
    return Math.round(((tempKelvin - 273.15) + Number.EPSILON) * 100) / 100;
  }
  const KelwinToFahrenheit = (tempKelvin) => {
    return Math.round((((tempKelvin * (9 / 5)) - 459.67) + Number.EPSILON) * 100) / 100;
  }
  const ChoseIcon = (dataArray) => {
    switch (dataArray[i].weather[0].main) {
      case 'Thunderstorm':
        return [<FlashOnIcon style={{ fontSize: 200 }} />, 'storm']
      case 'Drizzle':
        return [<GrainIcon style={{ fontSize: 200 }} />, 'rainy']
      case 'Rain':
        return [<GrainIcon style={{ fontSize: 200 }} />, 'rainy']
      case 'Snow':
        return [<AcUnitIcon style={{ fontSize: 200 }} />, 'cold']
      case 'Mist':
        return [<WavesIcon style={{ fontSize: 200 }} />, 'mild']
      case 'Clouds':
        return [<CloudIcon style={{ fontSize: 200 }} />, 'mild']
      default:
        let hour = new Date(dataArray[i].dt_txt).getHours()
        if (hour > 18 || hour < 6) {
          return [<NightsStayOutlinedIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<WbSunnyOutlinedIcon style={{ fontSize: 200 }} />, 'hot']
    }
  }
  const handleSwitch = () => {
    setOn(!isOn)
  }
  return (
    <div className={data && !props.loading ? `Card ${ChoseIcon(data.list)[1]}`
      : `Card`} >
      {props.loading === true ? <div className="Card-loading" /> : data ?
        <div className="Card-content">
          <div className="Card-day container">
            <h2>{getDayOfWeek(data.list)}</h2>
            <p>{data.city.name} | {data.city.country}</p>
          </div>
          {/* card weather */}
          <div className="Card-weather container">
            {ChoseIcon(data.list)[0]}
            <h2>Weather:</h2>
            <p>{data.list[i].weather[0].description}</p>
          </div>
          {/* card date */}
          <div className="Card-date container">
            <h2>Date:</h2>
            <p>{data.list[0].dt_txt.slice(0, 10)}</p>
          </div>

          {/* card time */}
          <div className="Card-time container">
            <button className="Card-hour-up btn" onClick={() => i > 0 ? setI(i - 1) : null} >
              <ArrowBackIosIcon style={{ fontSize: 60 }} />
            </button>
            <h2 className="Card-time-display">{data.list[i].dt_txt.slice(10, 16)}</h2>
            <button className="Card-hour-up btn" onClick={() => i < data.list.length - 1 ? setI(i + 1) : null} >
              <ArrowForwardIosIcon style={{ fontSize: 60 }} />
            </button>
          </div>

          {/* card temp*/}
          <div className="Card-temp container">
            <div className="Card-temp-switch">
              <p className="Card-temp-title">
                {isOn ? `${KelwinToCelsius(data.list[i].main.temp)}`
                  : `${KelwinToFahrenheit(data.list[i].main.temp)}`}
              </p>
              <div className="onoffswitch">
                <input
                  type="checkbox"
                  id={props.id}
                  className="onoffswitch-checkbox"
                  onChange={handleSwitch}
                  checked={isOn}
                />
                <label className="onoffswitch-label" htmlFor={props.id}>
                  <span className="onoffswitch-inner"></span>
                  <span className="onoffswitch-switch"></span>
                </label>
              </div>
            </div>
            {/* card chart*/}
            <CardChart
              apiData={data.list}
            />
          </div>
        </div >
        : null}
    </div >
  )
}

export default Card