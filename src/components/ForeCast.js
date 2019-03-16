import React from 'react';

const ForeCast = props => (
    <React.Fragment>
        <div className="fiveDayForeCast">
            <div className="accordion" id="foreCastAccordian">
                <div className="card-header" >
                    <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#foreCastList" aria-expanded="true" aria-controls="foreCastList" >
                        <h1><i className="fas fa-calendar-alt" id="calender"></i> 5 Day forecast</h1>
                    </button>
                </div>
                {/* map list of forecast updates here into accordian but don't want to show all 30+ post */}
                <div id="foreCastList" className="collapse hide" data-parent="#foreCastAccordian">
                    {/* updates every three hours depending on the first two initial numbers in 24 hour clock "00.00.00". */}
                    {/* filter?(decided not too) just map if [].slice() === to first numbers. */}
                    {props.fiveDayForeCast.map((obj, i) => obj.dt_txt.slice(11, 13) === ("00" || "03" || "06" || "09" || "12" || "15" || "18" || "21") ?
                        <div key={i} className="card-body">
                            <div>
                                <h5>{obj.dt_txt.slice(5, 11)}{obj.dt_txt.slice(0, 4)}</h5>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p><i className="fas fa-thermometer-half" id="thermometer"></i> {obj.main.temp} &deg;F</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-cloud-sun-rain" id="cloudSunRain"></i></p>
                                    <p>{obj.weather[0].description}</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-fire-alt" id="fire"></i> {obj.main.temp_max} &deg;F</p>
                                    <p><i className="far fa-snowflake" id="snowFlake"></i> {obj.main.temp_min} &deg;F</p>
                                </div>
                                <div className="col">
                                    <p><i className="fas fa-tint" id="rainDrop"></i> {obj.main.humidity}%</p>
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