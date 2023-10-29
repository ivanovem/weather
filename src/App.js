import './App.scss';
import {ErrorBoundary} from "react-error-boundary";
import WeatherApiClient from './client.js';
import {useMemo, useState} from 'react';

const apiClient = new WeatherApiClient();

 // const lat = 56.83893;
 // const lon = 60.6057;



function App() {
    const [temp, setTemp] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [flag, setFlag] = useState(false);

    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setFlag(true);
    })


        const getTempFromAPI = useMemo(
            () => {
                if (flag) {
                    apiClient.getWeather(lat, lon)
                        .then((response) => {
                            setTemp(response.main.temp);
                            console.log('set temp');
                            // setWind(response.wind.speed);
                            // setHumidity(response.main.humidity);
                            // setTempFeels(response.main.feels_like);
                            // //  setRainfall(response.rain);
                            // setCity(response.name);
                            // console.log(response.name);
                        })
                }
            },
            [lat, lon, flag]
        );

  return (
      <ErrorBoundary  fallback={<div>Something went wrong</div>}>
        <div className="App">
            <div className="vidget">
                <div className="emoji_weather_state">🌤️</div>
                <div className="verticalLine"></div>
                <div className="info">
                    <div>{Math.round(temp)}&deg;C</div>
                    <div>Понедельник</div>
                    <div>Екатеринбург</div>
                </div>
            </div>
        </div>
      </ErrorBoundary>
  );
}

export default App;
