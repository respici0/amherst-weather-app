import React from 'react';

const ForeCast = props => (
    <React.Fragment>
        <div className="fiveDayForeCast">
            <div className="accordion" id="foreCastAccordian">
                <div className="card-header" >
                    <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#foreCastList" aria-expanded="true" aria-controls="foreCastList">
                        <h1><i className="fas fa-calendar-alt" id="calender"></i> 5 Day forecast</h1>
                    </button>
                </div>
                {/* map list of forecast here into accordian */}
                <div id="foreCastList" className="collapse hide" data-parent="#foreCastAccordian">
                    {/* updates every three hours depending on numbers */}
                    {props.fiveDayForeCast.map((obj, i) => obj.dt_txt.slice(11, 13) === ("00" || "03" || "06" || "09" || "12" || "15" || "18" || "21") ?
                        <div key={i} className="card-body">
                            <div className="row">
                                <div className="col">
                                    <p>{obj.dt_txt.slice(0, 11)}</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-thermometer-half" id="thermometer"></i> {obj.main.temp} &deg;F</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-cloud-sun-rain" id="cloudSunRain"></i> {obj.weather[0].description}</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-fire-alt" id="fire"></i> {obj.main.temp_max} &deg;F</p>
                                    <p><i className="far fa-snowflake" id="snowFlake"></i> {obj.main.temp_min} &deg;F</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-tint" id="rainDrop"></i> {obj.main.humidity}%</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-wind" id="wind"></i> {obj.wind.speed} Mph</p>
                                </div>
                            </div>
                            <hr />
                        </div >
                        : ''
                    )}
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default ForeCast;