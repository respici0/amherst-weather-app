import React, { Component } from 'react';
import './App.scss';
import UserServices from './services/UserServices'
import { getCurrentWeather } from './redux/UserActions';
import CurrentWeather from './components/CurrentWeather'
import ForeCast from './components/ForeCast'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveDayForeCast: []
    }
  }

  onChange = e => {
    let zipcode = e.target.value;
    this.setState({
      zipcode
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
      UserServices.getFiveDayForecast(zipcode, this.GetFiveDayForecastSuccess, this.onError);
      this.props.getCurrentWeather(zipcode)
      // I initially had both API coming through my actions and being held in my reducer for dispatch, but the array retrieved through my reducer would not map correctly.
      // I have my code commented out through in userActions, as well as WeatherReducer so you can view, both seem to work fine & retrieve the array fine (but maybe I am missing something that you folks will catch!)
      // this.props.getFiveDayForecast(zipcode) <-- function dispatched to retrieve array for 5dayforecast works perfectly and returns array to my object
    }
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
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Enter city zipcode ex.55521" onChange={this.onChange} value={this.state.value} onKeyPress={this.onEnterOrButtonClick} />
            <div className="input-group-append">
              <button className="btn btn-info" id="weatherButton" type="button" onClick={this.onEnterOrButtonClick}><i className="fas fa-globe-americas"></i> Let's find out!</button>
            </div>
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
