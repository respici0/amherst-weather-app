import React from 'react';

const CurrentWeather = props => (
    <React.Fragment>
        <div className="currentWeather container">
            <h3>Current Conditions</h3>
            <div className="row">
                <div className="mainTemp col-sm-5">
                    <p><i className="fas fa-thermometer-half" id="thermometer"></i> Temp: {props.currentTemp}  &deg;F</p>
                    <p><i className="fas fa-cloud-sun-rain" id="cloudSunRain"></i> {props.weather} </p>
                    <p><i className="fas fa-city" id="city"></i> {props.cityName}, {props.country}</p>
                </div>
                <div className="conditions col-sm-7">
                    <p className="highest"><i className="fas fa-fire-alt" id="fire"></i> Highest: {props.maxTemp}  &deg;F</p>
                    <p className="lowest"><i className="far fa-snowflake" id="snowFlake"></i> Lowest: {props.minTemp}  &deg;F</p>
                    <p className="humidity"><i className="fas fa-tint" id="rainDrop"></i> Humidity: {props.humidity} %</p>
                    <p className="wind"><i className="fas fa-wind" id="wind"></i> Wind: {props.wind.speed} Mph</p>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default CurrentWeather;

