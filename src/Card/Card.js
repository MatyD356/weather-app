import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.scss'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import WavesIcon from '@material-ui/icons/Waves';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

const Card = (props) => {
  const [data, setData] = useState(null);
  const [i, setI] = useState(0);
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  const getDayOfWeek = (dataArray) => {
    const week = [
      'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
    return week[new Date(dataArray[i].dt_txt.slice(0, 10)).getDay() - 1];
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
  return (
    <div className={data && !props.loading ? `Card ${ChoseIcon(data.list)[1]}`
      : `Card`} >
      {props.loading === true ? <div className="Card-loading" /> : data ?
        <div>
          {console.log(data)}
          <h2>{data.city.name} | {data.city.country}</h2>
          {ChoseIcon(data.list)[0]}
          <h3>{getDayOfWeek(data.list)}</h3>
          <p>{data.list[0].dt_txt.slice(0, 10)}</p>
          {/* card Time */}
          <div>
            <button onClick={() => i > 0 ? setI(i - 1) : null} >-</button>
            <h2>{data.list[i].dt_txt.slice(10, 16)}</h2>
            <button onClick={() => i < data.list.length - 1 ? setI(i + 1) : null} >+</button>
          </div>
          <h2>Temp:</h2>
          <p>{KelwinToCelsius(data.list[i].main.temp)}°C</p>
          <p>{KelwinToFahrenheit(data.list[i].main.temp)}°F</p>
          <div>
          </div>
        </div >
        : null}
    </div >
  )
}

export default Card