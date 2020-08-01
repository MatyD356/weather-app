import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingData: null,
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
      const json = await response.json();
      this.sortData(json);
      this.setState({ data: json });
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => this.changeLoding(), 1000)
  }
  changeLoding = () => {
    this.setState({
      loadingData: !this.state.loadingData
    }, () => console.log(this.state))
  }
  sortData = (data) => {
    data.list.map((item) => {
      const dayOfWeek = (new Date(item.dt_txt)).getDay();
      console.log(dayOfWeek);
    });
  }
  render() {
    return (
      <div className="CardContainer" >
        <Card
          loading={this.state.loadingData}
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