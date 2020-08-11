import React, { useEffect, useState } from 'react'
import CardChart from './CardChart/CardChart'
import CardTemp from './CardTemp/CardTemp'
import CardTime from './CardTime/CardTime'
import CardData from './CardDate/CardDate'
import CardWeather from './CardWeather/CardWeather'
import './Card.scss'

import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import WavesIcon from '@material-ui/icons/Waves';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Card = (props) => {
  const [data, setData] = useState(null);
  const [i, setI] = useState(0);
  const [isCelsius, setOn] = useState(true)
  useEffect(() => {
    setData(props.data)
    if (props.data.list && props.data.list.length === 8) {
      setI(4)
    }
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
    let hour = new Date(dataArray[i].dt_txt).getHours()
    switch (dataArray[i].weather[0].main) {
      case 'Thunderstorm':
        if (hour > 18 || hour < 6) {
          return [<FlashOnIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<FlashOnIcon style={{ fontSize: 200 }} />, 'storm']
      case 'Drizzle':
        if (hour > 18 || hour < 6) {
          return [<GrainIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<GrainIcon style={{ fontSize: 200 }} />, 'rainy']
      case 'Rain':
        if (hour > 18 || hour < 6) {
          return [<GrainIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<GrainIcon style={{ fontSize: 200 }} />, 'rainy']
      case 'Snow':
        return [<AcUnitIcon style={{ fontSize: 200 }} />, 'cold']
      case 'Mist':
        if (hour > 18 || hour < 6) {
          return [<WavesIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<WavesIcon style={{ fontSize: 200 }} />, 'mild']
      case 'Clouds':
        if (hour > 18 || hour < 6) {
          return [<CloudIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<CloudIcon style={{ fontSize: 200 }} />, 'mild']
      default:
        if (hour > 18 || hour < 6) {
          return [<NightsStayOutlinedIcon style={{ fontSize: 200 }} />, 'cold']
        }
        return [<WbSunnyOutlinedIcon style={{ fontSize: 200 }} />, 'hot']
    }
  }
  const handleSwitch = () => {
    setOn(!isCelsius)
  }

  const decrementI = () => i > 0 ? setI(i - 1) : null

  const incrementI = () => i < data.list.length - 1 ? setI(i + 1) : null

  const handleTouch = (e) => {
    console.log(e);
  }
  return (
    <div
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      className={data && !props.loading ? `Card ${ChoseIcon(data.list)[1]}` : `Card`} >
      {props.loading === true ?
        <div className="Card-loading" >
          <div className="Card-spinner" />
        </div> : data ?
          <div className="Card-content">

            {/* card date */}
            <CardData
              getDayOfWeek={getDayOfWeek}
              data={data} />

            {/* card weather */}
            <CardWeather
              i={i}
              apiData={data.list}
              ChoseIcon={ChoseIcon} />

            {/* card time */}
            <CardTime
              incrementI={incrementI}
              decrementI={decrementI}
              apiData={data.list}
              i={i} />

            {/* card temp*/}
            <CardTemp
              id={props.id}
              i={i}
              unit={isCelsius}
              handleSwitch={handleSwitch}
              toFarenheit={KelwinToFahrenheit}
              toCelsius={KelwinToCelsius}
              apiData={data.list}
            />

            {/* card chart*/}
            <CardChart
              unit={isCelsius}
              toCelsius={KelwinToCelsius}
              toFarenheit={KelwinToFahrenheit}
              apiData={data.list}
            />

          </div >
          : null}
    </div >
  )
}

export default Card