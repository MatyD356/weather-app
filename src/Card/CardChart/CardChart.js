import { Line } from 'react-chartjs-2'
import './CardChart.scss'
import React, { useState } from 'react'

const CardChart = (props) => {
  const [chartType, setChartType] = useState("Temp");
  const setData = () => {
    if (chartType === "Temp") {
      return props.unit ?
        props.apiData.map(item => props.toCelsius(item.main.temp)) :
        props.apiData.map(item => props.toFarenheit(item.main.temp))
    } else if (chartType === "Pressure") {
      return props.apiData.map(item => item.main.pressure)
    } else if (chartType === "Humidity") {
      return props.apiData.map(item => item.main.humidity)

    }
  }
  const setUnits = (value) => {
    if (chartType === "Temp") {
      return props.unit ? value + ' °C' : value + ' °F'
    } else if (chartType === "Pressure") {
      return value + ' hPa'
    } else if (chartType === "Humidity") {
      return value + ' %'
    }

  }
  const opt = {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
    scales: {
      type: 'time',
      xAxes: [{
        display: true,
        ticks: {
          display: true,
          fontColor: 'white'
        },
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 4,
          fontColor: 'white',
          callback: (values) => setUnits(values)
        },
        gridLines: {
          color: 'transparent',
        }
      }]
    },
    tooltips: {
      enabled: true,
      caretSize: 10,
      backgroundColor: 'rgba(255,255,255,0.1)'
    }
  };
  const dataLine = {
    labels: [...props.apiData.map(item => item.dt_txt.slice(10, 16))],
    datasets: [
      {
        label: chartType,
        fill: true,
        lineTension: 0.35,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderColor: 'rgba(255,255,255,0.75)',
        data: setData()
      }
    ]
  };
  return (
    <div>
      <button
        className="CardChart button"
        onClick={() => { setChartType("Temp") }}
      >Temp</button>
      <button
        className="CardChart button"
        onClick={() => { setChartType("Pressure") }}
      >Pressure</button>
      <button
        className="CardChart button"
        onClick={() => { setChartType("Humidity") }}
      >Humidity</button>
      < Line
        data={dataLine}
        options={opt} />
    </div>
  )
}
export default CardChart