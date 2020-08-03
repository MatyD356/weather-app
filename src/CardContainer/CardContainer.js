import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'

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
      const city = "london"
      const key = process.env.REACT_APP_NOT_SECRET_CODE;
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
      const response = await fetch(url, { mode: 'cors' });
      //eslint-disable-next-line
      const json = await response.json()
        .then(json => {
          this.sortData(json.list, json);
          this.changeLoding()
          return json
        })
    } catch (error) {
      console.log(error)
    }
  }
  sortData = (dataArray, dataObj) => {
    const hour = 8 - Math.floor(new Date().getHours() / 3);
    const sortedArray = []
    for (let i = 0; i <= dataArray.length; i += 8) {
      if (i < 8) {
        sortedArray.push(Object.assign({}, dataObj, { list: [...dataArray.slice(i, hour + i)] }));
      } else {
        sortedArray.push(Object.assign({}, dataObj, { list: [...dataArray.slice(hour + i - 8, hour + i)] }));
      }
    }
    this.setState({
      sorted: sortedArray
    }, () => console.log(this.state))
  }
  changeLoding = () => {
    this.setState({
      loadingData: !this.state.loadingData
    })
  }
  render() {
    return (
      <div className="CardContainer" >
        <Card
          key={1}
          loading={this.state.loadingData}
          data={this.state.sorted[0]}
          bgTemp="hot" />
        <Card bgTemp="rainy" />
        <Card bgTemp="mild" />
        <Card bgTemp="cold" />
        <Card bgTemp="storm" />
      </div >
    )
  }
}

export default CardContainer