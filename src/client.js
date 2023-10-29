class WeatherApiClient {
    constructor() {
      this.key = 'd8be8668e3ba727532417c7201b9a1c6';
      this.url = 'https://api.openweathermap.org/data/2.5/weather?';
    }
    
    async getWeather(lat, lon){
        // console.log(lat);
        // console.log(lon);
        const url = new URL(this.url);
        url.searchParams.append("lat", lat);
        url.searchParams.append("lon", lon);
        url.searchParams.append("units", "metric");
        url.searchParams.append("appid", this.key);
        url.searchParams.append("lang", "ru");
        
        return fetch(`${url}`)
        .then((response)=>{
            const result = response.json();
            console.log(result);
            return result;
        })
        // console.log('fake request');
        // const result = {main: {temp: -5}};
        // return Promise.resolve(result)
    }

  }
 export default WeatherApiClient;