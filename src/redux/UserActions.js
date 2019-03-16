export const ADD_CURRENT_WEATHER = "ADD_CURRENT_WEATHER";
export const ADD_5DAY_FORECAST = "ADD_5DAY_FORECAST";

// could hide API key with .env, put into .gitignore but API key is not of high importance.
export function getCurrentWeather(zipcode) {
    return dispatch => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2`)
            .then(resp => resp.json())
            .then(resp => dispatch({ type: ADD_CURRENT_WEATHER, payload: resp }))
            .catch(err => console.log(err))
    }
}

// export function getFiveDayForecast(zipcode) {
//     return dispatch => {
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2`)
//             .then(resp => resp.json())
//             .then(resp => dispatch({ type: ADD_5DAY_FORECAST, payload: resp }))
//             .catch(err => console.log(err))
//     }
// }

