import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';
import CityInput from '../CityInput/CityInput';

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    const lastCity = localStorage.city ? localStorage.getItem('city') : 'London';
    this.state = {
      currentDay: new Date().getDay(),
      loadingData: null,
      sorted: [[], [], [], [], []],
      data: {},
      activeCard: 0,
      city: lastCity,
      touchStartLocation: null
    }
  }
  async makeApiCall() {
    this.changeLoding()
    try {
      const city = this.state.city
      const key = process.env.REACT_APP_NOT_SECRET_CODE;
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
      const response = await fetch(url, { mode: 'cors' });
      //eslint-disable-next-line
      const json = await response.json()
        .then(json => {
          this.sortData(json.list, json);
          setTimeout(() => this.changeLoding(), 1000)
          return json
        })
    } catch (error) {
      setTimeout(() => this.changeLoding(), 1000)
      localStorage.setItem('city', 'London')
      alert('City not found')
    }
  }
  componentDidMount() {
    this.makeApiCall()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.makeApiCall()
    }
  }
  changeCity = (newCityStr) => {
    this.setState({
      city: newCityStr
    }, () => localStorage.setItem('city', this.state.city))
  }
  sortData = (dataArray, dataObj) => {
    const sortedArray = []
    for (let i = 0; i < 5; i++) {
      let activeDay = this.state.currentDay + i
      if (activeDay > 6) {
        activeDay -= 7
      }
      const currentDayData = dataArray.filter(item =>
        new Date(item.dt_txt).getDay() === activeDay ? item : null)
      sortedArray.push(Object.assign({}, dataObj, { list: currentDayData }));
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
  handleTouchStart = (e) => {
    const firstTouchEvent = e.touches[0];
    const location = firstTouchEvent.clientX;
    this.setState({
      touchStartLocation: location
    });
  }
  handleTouchEnd = (e) => {
    const firstTouchEvent = e.changedTouches[0];
    const location = firstTouchEvent.clientX;
    const differences = this.state.touchStartLocation - location;
    const cards = document.querySelectorAll('.Card')
    if (differences > 50 && this.state.activeCard < cards.length - 1) {
      this.setState({
        activeCard: this.state.activeCard + 1
      }, () => cards[this.state.activeCard].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      )
    } else if (differences < -50 && this.state.activeCard > 0) {
      this.setState({
        activeCard: this.state.activeCard - 1
      }, () => cards[this.state.activeCard].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      )
    }
  }
  render() {
    return (
      <div
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        className="CardContainer" >
        <CityInput newCity={this.changeCity} />
        {
          this.state.sorted.map((item, index) => {
            return (<Card
              id={uuidv4()}
              key={index}
              loading={this.state.loadingData}
              data={item}
            />)
          })
        }
      </div >
    )
  }
}

export default CardContainer