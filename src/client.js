class WeatherApiClient {
    constructor() {
      this.key = '62a1f4da860cfd4e9e86c4005cf6a6c9';
      this.url = 'https://api.openweathermap.org/data/2.5/weather?';
    }
    
    async getWeather(lat, lon){
        const url = new URL(this.url);
        url.searchParams.append("lat", lat);
        url.searchParams.append("lon", lon);
        url.searchParams.append("units", "metric");
        url.searchParams.append("appid", this.key);
        url.searchParams.append("lang", "ru");
        
        return fetch(`${url}`)
        .then((response)=>{
            return response.json();
        })
    }

  }
 export default WeatherApiClient;