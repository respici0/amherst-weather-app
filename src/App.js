import React, { Component } from 'react';
import './App.scss';
import UserServices from './services/UserServices'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      cityName: '',
      country: '',
      currentTemp: '',
      maxTemp: '',
      minTemp: '',
      humidity: '',
      weather: '',
      wind: {
        deg: '',
        speed: '',
      }
      // date: ''
    }
  }

  onChange = e => {
    let zipcode = e.target.value;
    this.setState({
      zipcode
    }, () => {
      console.log("Current weather", this.state.zipcode);
    });
  }

  onEnterOrButtonClick = e => {
    let code = e.keyCode || e.which;
    let zipcode = this.state.zipcode;
    if (code === 13 || e.target.id === "weatherButton") {
      UserServices.getCurrentWeather(zipcode, this.GetCurrentWeatherSuccess, this.onError);
      UserServices.getFiveDayForecast(zipcode, this.GetFiveDayForecastSuccess, this.onError);
    }
  }

  GetCurrentWeatherSuccess = resp => {
    // let date = new Date();
    // date.split('')
    // console.log(date);
    console.log('CurrentWeather', resp.data);
    this.setState({
      cityName: resp.data.name,
      country: resp.data.sys.country,
      currentTemp: resp.data.main.temp,
      maxTemp: resp.data.main.temp_max,
      minTemp: resp.data.main.temp_min,
      humidity: resp.data.main.humidity,
      weather: resp.data.weather[0].description,
      wind: {
        deg: resp.data.wind.deg,
        speed: resp.data.wind.speed,
      },
    }, () => {
      console.log("current weather", this.state)
    });
  }

  GetFiveDayForecastSuccess = resp => {
    console.log('FiveDayForecast', resp);
  }

  onError = resp => {
    console.log(resp);
  }

  render() {
    const currentWeather = this.state;
    return (
      <React.Fragment>
        <div className="content">
          <h1 className="title">How's the weather today?</h1>
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Enter your zipcode" onChange={this.onChange} value={this.state.value} onKeyPress={this.onEnterOrButtonClick} />
            <div className="input-group-append">
              <button className="btn btn-info" id="weatherButton" type="button" onClick={this.onEnterOrButtonClick}><i className="fas fa-search"></i> Let's find out!</button>
            </div>
          </div>
        </div>
        {currentWeather.cityName ? <div className="currentWeather container">
          <div className="row">
            <div className="mainTemp col-sm-5">
              <h3><i className="fas fa-thermometer-half" id="thermometer"></i> Temperature</h3>
              <p><span id="currentTemp">{currentWeather.currentTemp} &deg;F</span></p>
              <p><i className="fas fa-city" id="city"></i></p>
              <p>{currentWeather.cityName}, {currentWeather.country} </p>
              {/* <p>{date}</p> */}
            </div>
            <div className="conditions col-sm-7">
              <h3><i className="fas fa-cloud-sun-rain" id="cloudSunRain"></i> Current Conditions</h3>
              <p className="highest"><i className="fas fa-fire-alt" id="fire"></i> Highest: {currentWeather.maxTemp}  &deg;F</p>
              <p className="lowest"><i className="far fa-snowflake" id="snowFlake"></i> Lowest: {currentWeather.minTemp}  &deg;F</p>
              <p className="humidity"><i className="fas fa-tint" id="rainDrop"></i> Humidity: {currentWeather.humidity} %</p>
              <p className="wind"><i className="fas fa-wind" id="wind"></i> Wind: {currentWeather.wind.speed} Mph</p>
            </div>
          </div>
        </div> : ''}
      </React.Fragment>
    );
  }
}

export default App;
