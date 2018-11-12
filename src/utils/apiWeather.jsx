import axios from "axios";
import { SAMPLE_WEATHER } from "./apiConstants.jsx";

export const fetchWeather = () => {
  return new Promise((resolve, rejects) => {
    axios.get(SAMPLE_WEATHER)
      .then(
        res => {
          let weatherInfo = res.data;
          weatherInfo.imgUrl = "http://openweathermap.org/img/w/"+res.data.weather[0].icon+".png"
          resolve(weatherInfo);
        },
        err => {
          console.log('error en fetchWeather:', err);
          rejects();
        }
      );
  });
}
