import axios from 'axios';

export default class UserServices {

    static getCurrentWeather(zipcode, onSuccess, onError) {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2`
            )
            .then(onSuccess)
            .catch(onError);
    };

    static getFiveDayForecast(zipcode, onSuccess, onError) {
        axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2`
        )
            .then(onSuccess)
            .catch(onError);
    };
}