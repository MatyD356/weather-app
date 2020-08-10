import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDay: new Date().getDay(),
      loadingData: null,
      sorted: [[], [], [], [], []],
      data: {}
    }
  }
  async componentDidMount() {
    this.changeLoding()
    try {
      //rijeka
      const city = "moscow"
      const key = process.env.REACT_APP_NOT_SECRET_CODE;
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
      const response = await fetch(url, { mode: 'cors' });
      //eslint-disable-next-line
      const json = await response.json()
        .then(json => {
          this.sortData(json.list, json);
          setTimeout(() => this.changeLoding(), 1000)
          return json
        })
    } catch (error) {
      console.log(error)
    }
  }
  sortData = (dataArray, dataObj) => {
    //to fix
    //6 offset by 1
    //18 offset by 1
    //12 offset by 1
    const sortedArray = []
    let hour = (8 - Math.floor(new Date().getHours() / 3));
    for (let i = 0; i < dataArray.length; i += 8) {
      if (i < 8) {
        sortedArray.push(Object.assign({}, dataObj, { list: [...dataArray.slice(i, hour + i)] }));
      } else {
        sortedArray.push(Object.assign({}, dataObj, { list: [...dataArray.slice(hour + i - 8, hour + i)] }));
      }
    }
    this.setState({
      sorted: sortedArray
    })
  }
  changeLoding = () => {
    this.setState({
      loadingData: !this.state.loadingData
    })
  }

  render() {
    return (
      <div className="CardContainer" >
        {this.state.sorted.map((item, index) => {
          return (<Card
            id={uuidv4()}
            key={index}
            loading={this.state.loadingData}
            data={item} />)
        })}
      </div >
    )
  }
}

export default CardContainer