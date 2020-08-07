import { Line } from 'react-chartjs-2'
import React from 'react'

const CardChart = (props) => {
  console.log(props.apiData)
  const opt = {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white'
        },
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white'
        },
        gridLines: {
          color: 'transparent',
        }
      }]
    }
  }
  const dataLine = {
    labels: [
      "00:00",
      "03:00",
      "06:00",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00"
    ],
    datasets: [
      {
        label: 'Temp',
        fill: true,
        lineTension: 0.35,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderColor: 'rgba(255,255,255,0.75)',
        //props.apiData[0].main.temp
        data: [...props.apiData.map(item => item.main.temp)],
      }
    ]
  };
  return (
    < Line
      width={200}
      height={200}
      data={dataLine}
      options={opt} />
  )
}
export default CardChart