import React from 'react'
import './CardContainer.scss'
import Card from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';
import CityInput from '../CityInput/CityInput';

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDay: new Date().getDay(),
      loadingData: null,
      sorted: [[], [], [], [], []],
      data: {},
      activeCard: 0,
      city: 'Moscow',
      touchStartLocation: {
        x: null,
        y: null
      }
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
      alert('City not found')
    }
  }
  componentDidMount() {
    this.changeLoding()
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
    }, () => console.log(this.state.city))
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
  handleTouchStart = (e) => {
    const firstTouchEvent = e.touches[0];
    const location = {
      x: firstTouchEvent.clientX,
      y: firstTouchEvent.clientY
    };
    this.setState({
      touchStartLocation: location
    });
  }
  handleTouchEnd = (e) => {
    const firstTouchEvent = e.changedTouches[0];
    const location = {
      x: firstTouchEvent.clientX,
      y: firstTouchEvent.clientY
    };
    const differences = {
      x: this.state.touchStartLocation.x - location.x,
      y: this.state.touchStartLocation.y - location.y
    };
    const cards = document.querySelectorAll('.Card')
    if (differences.x > 50 && this.state.activeCard < cards.length - 1) {
      this.setState({
        activeCard: this.state.activeCard + 1
      }, () => cards[this.state.activeCard].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      )
    } else if (differences.x < -50 && this.state.activeCard > 0) {
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