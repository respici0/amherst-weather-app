const UserReducer = (
    state = {
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
    },
    action
) => {
    switch (action.type) {
        case "ADD_CURRENT_WEATHER":
            state = {
                zipcode: '',
                cityName: action.payload.name,
                country: action.payload.sys.country,
                currentTemp: action.payload.main.temp,
                maxTemp: action.payload.main.temp_max,
                minTemp: action.payload.main.temp_min,
                weather: action.payload.main.humidity,
                wind: {
                    deg: action.payload.weather[0].description,
                    speed: action.payload.wind.speed,
                },
            };
            break;
        case "ADD_5DAY_FORECAST":
            state = {
                ...state,
                zipcode: '',
                cityName: action.payload.name,
                country: action.payload.sys.country,
                currentTemp: action.payload.main.temp,
                maxTemp: action.payload.main.temp_max,
                minTemp: action.payload.main.temp_min,
                weather: action.payload.main.humidity,
                wind: {
                    deg: action.payload.weather[0].description,
                    speed: action.payload.wind.speed,
                },
                fiveDayForeCast: action.payload.list
            };
            break;
        default:
            return state;
    }
    return state;
};

export default UserReducer;