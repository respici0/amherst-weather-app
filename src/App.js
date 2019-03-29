import React, { Component } from 'react';
import './App.scss';
import UserServices from './services/UserServices';
import { getCurrentWeather } from './redux/UserActions';
import CurrentWeather from './components/CurrentWeather';
import ForeCast from './components/ForeCast';
import { connect } from 'react-redux';
import Switch from 'react-switch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveDayForeCast: [],
      checked: true,
      isFarenheit: true
    }
  }

  onChange = e => {
    let city = e.target.value;
    this.setState({
      city
    });
  }

  switchChange = checked => {
    let isFarenheit = this.state.isFarenheit;
    if (isFarenheit) {
      this.setState({
        checked: false,
        isFarenheit: false,
      }, () => console.log("farenheit?", this.state));
    } else {
      this.setState({
        checked: true,
        isFarenheit: true
      }
        // , () => {
        //   this.toCelsuis();
        // }
      );
    }
  }

  // toCelsuis = () => {
  //   let { currentTemp, maxTemp, minTemp } = this.state;
  //   currentTemp = (currentTemp - 32) * 5 / 9;
  //   maxTemp = (maxTemp - 32) * 5 / 9;
  //   minTemp = (minTemp - 32) * 5 / 9;
  //   this.setState({
  //     ...this.state,
  //     currentTemp,
  //     maxTemp,
  //     minTemp
  //   })
  // }


  onEnterOrButtonClick = e => {
    let code = e.keyCode || e.which;
    let city = this.state.city;
    let validLetters = /^[a-z][a-z\s]*$/;

    if ((code === 13 || e.target.id) && city === '') {
      alert("Please enter a valid city");
    }
    else if ((code === 13 || e.target.id === "weatherButton") && city !== validLetters) {
      UserServices.getFiveDayForecast(city, this.GetFiveDayForecastSuccess, this.onError);
      this.props.getCurrentWeather(city)
      // I initially had both API coming through my actions and being held in my reducer for dispatch, but the array retrieved through my reducer would not map correctly.
      // I have my code commented out through in userActions, as well as WeatherReducer so you can view, both seem to work fine & retrieve the array fine (but maybe I am missing something that you folks will catch!)
      // this.props.getFiveDayForecast(city) <-- function dispatched to retrieve array for 5dayforecast works perfectly and returns array to my object
    }
    // this.setState({
    //   cityName: this.props.weather.cityName,
    //   country: this.props.weather.country,
    //   currentTemp: this.props.weather.currentTemp,
    //   maxTemp: this.props.weather.maxTemp,
    //   minTemp: this.props.weather.minTemp,
    //   humidity: this.props.weather.humidity,
    //   weather: this.props.weather.weather,
    //   wind: {
    //     speed: this.props.weather.speed,
    //   }
    // })
  }

  GetFiveDayForecastSuccess = resp => {
    this.setState({
      fiveDayForeCast: resp.data.list
    })
  }

  onError = resp => console.log(resp);


  render() {
    //console.log(this.state.fiveDayForeCast) <-- list from local state
    //console.log(this.props.weather.fiveDayForeCast) <-- list from redux state
    // When I console.log the 5dayforcast API retrieved in my UserServices and store it to my local state I am able to map it, compared to the array retrieved through my redux store.
    // this.state.fiveDayForeCast <-- maps correctly
    // this.props.weather.fiveDayForeCast <-- comes back undefined. Arrays are muttable, so maybe I have unintentionally returned my object incorrectly
    // for now I retrieved the data via axios, not ideal but I will look into more
    return (
      <React.Fragment>
        <div className="viewContent">
          <h1 className="title">How's the weather today?</h1>
          <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="City name ex.Anaheim" onChange={this.onChange} value={this.state.value} onKeyPress={this.onEnterOrButtonClick} />
            <div className="input-group-append">
              <button className="btn btn-info" id="weatherButton" type="button" onClick={this.onEnterOrButtonClick}><i className="fas fa-globe-americas"></i> Let's find out!</button>
            </div>
          </div>
          <div>
            {this.props.weather.cityName && <Switch className="mb-3" onChange={this.switchChange} checked={this.state.checked} height={20} width={40} checkedIcon={<p>&deg;F</p>} uncheckedIcon={<p>&deg;C</p>} />}
          </div>
        </div>
        {this.props.weather.cityName ? <CurrentWeather {...this.props.weather} /> : ''}
        <br />
        {this.props.weather.cityName && <ForeCast {...this.state} />}
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => ({
  weather: state.WeatherReducer
})

const mapDispatchToProps = {
  getCurrentWeather,
  // getFiveDayForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
