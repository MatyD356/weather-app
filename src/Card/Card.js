import React from 'react'
import './Card.scss'

class Card extends React.Component {
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
  cardContent = () => {

  }
  render() {
    return (
      <div className={`Card ${this.props.bgTemp}`} >
        {
          this.state.loadingData === false ?
            this.cardContent() :
            <div className="Card-loading" />
        }
      </div >
    )
  }
}

export default Card