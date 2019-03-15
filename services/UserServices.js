import axios from 'axios';

export default class UserServices {

    static getCurrentWeather(zipcode, onSuccess, onError) {
        axios
            .get(
                "api.openweathermap.org/data/2.5/weather?zip=92804,us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2"
            )
            .then(this.onSuccess)
            .catch(this.onError);
    };

    static getFiveDayForecast(zipcode, onSuccess, onError) {
        axios.get(
            "api.openweathermap.org/data/2.5/forecast?zip=94040,us&units=imperial&APPID=b30c36d10d053c968e9752b0bdeb47d2"
        )
            .then(this.onSuccess)
            .catch(this.onError);
    };
}