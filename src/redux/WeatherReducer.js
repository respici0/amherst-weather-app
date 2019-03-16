import { ADD_CURRENT_WEATHER } from "../redux/UserActions"

const WeatherReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_CURRENT_WEATHER:
            state = {
                ...state,
                cityName: payload.name,
                country: payload.sys.country,
                currentTemp: payload.main.temp,
                maxTemp: payload.main.temp_max,
                minTemp: payload.main.temp_min,
                humidity: payload.main.humidity,
                weather: payload.weather[0].description,
                wind: {
                    speed: payload.wind.speed,
                }
            };
            break;
        // case ADD_5DAY_FORECAST:
        //     state = {
        //         ...state,
        //         fiveDayForeCast: payload.list
        //     };
        //     break;
        default:
            return state
    }
    return state
}


export default WeatherReducer