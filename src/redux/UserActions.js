import axios from "axios";

export function getCurrentWeather(zipcode) {
    return {
        type: "ADD_CURRENT_WEATHER",
        payload: axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2`
            )
            .then(resp => {
                return resp.data
            })
            .catch(err => console.log(err))
    }
};

export function getFiveDayForecast(zipcode) {
    return {
        type: "ADD_5DAY_FORECAST",
        payload: axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2`
            )
            .then(resp => {
                return (
                    console.log(resp.data.list), resp.data.list)
            })
            .catch(err => console.log(err))
    }
};

