import React, { Component } from 'react';
import './App.scss';
// import UserServices from './services/UserServices'
import { getCurrentWeather, getFiveDayForecast } from './redux/UserActions';
import CurrentWeather from './components/CurrentWeather'
import ForeCast from './components/ForeCast'
import { connect } from 'react-redux'

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
      },
      fiveDayForeCast: []
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
    let validNumbers = /^[0-9]*$/;

    if ((code === 13 || e.target.id) && zipcode === '') {
      alert("Please enter a valid zipcode");
    }
    else if ((code === 13 || e.target.id === "weatherButton") && zipcode !== validNumbers) {
      //  UserServices.getCurrentWeather(zipcode, this.GetCurrentWeatherSuccess, this.onError);
      //  UserServices.getFiveDayForecast(zipcode, this.GetFiveDayForecastSuccess, this.onError);
      this.props.getCurrentWeather(zipcode)
      this.props.getFiveDayForecast(zipcode)
      console.log(this.props)
    }

  }

  // GetCurrentWeatherSuccess = resp => {
  //   console.log('CurrentWeather', resp.data);
  //   this.setState({
  //     cityName: resp.data.name,
  //     country: resp.data.sys.country,
  //     currentTemp: resp.data.main.temp,
  //     maxTemp: resp.data.main.temp_max,
  //     minTemp: resp.data.main.temp_min,
  //     humidity: resp.data.main.humidity,
  //     weather: resp.data.weather[0].description,
  //     wind: {
  //       deg: resp.data.wind.deg,
  //       speed: resp.data.wind.speed,
  //     },
  //   }, () => {
  //     console.log("current weather", this.state)
  //   });
  // }

  // GetFiveDayForecastSuccess = resp => {
  //   console.log('FiveDayForecast', resp.data.list);
  //   this.setState({
  //     fiveDayForeCast: resp.data.list
  //   })
  // }

  // onError = resp => {
  //   console.log(resp);
  // }

  render() {
    console.log("redux", this.props);
    return (
      <React.Fragment>
        <div className="viewContent">
          <h1 className="title">How's the weather today?</h1>
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Enter city zipcode ex.55521" onChange={this.onChange} value={this.state.value} onKeyPress={this.onEnterOrButtonClick} />
            <div className="input-group-append">
              <button className="btn btn-info" id="weatherButton" type="button" onClick={this.onEnterOrButtonClick}><i className="fas fa-globe-americas"></i> Let's find out!</button>
            </div>
          </div>
        </div>
        {/* toggle between current weather and five day forcast if I have time*/}
        {this.state.cityName ? <CurrentWeather {...this.props} /> : ''}
        <br />
        {this.state.cityName && <ForeCast {...this.props} />}
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer
})

const mapDispatchToProps = {
  getCurrentWeather,
  getFiveDayForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
