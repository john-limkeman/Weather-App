import React, { useState } from 'react';

const api = {
  key: "fd25d9fc51079308797eba529304b260",
  base: "https://api.openweathermap.org/data/2.5/"
}
const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`

}

const timeBuilder = (d) => {
  let hours = d.getHours() + 1;
  if (hours > 11 && hours < 24) { //PM
    if (hours > 12) {
      hours = hours - 12;
    }
    return `${hours}:00 PM`
  }
  else { //AM
    if (hours == 24) {
      hours = hours - 12;
    } return `${hours}:00 AM`
  }
}
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({

    "coord": {
      "lon": -74.006,
      "lat": 40.7143
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 41.29,
      "feels_like": 31.19,
      "temp_min": 37.99,
      "temp_max": 46,
      "pressure": 1015,
      "humidity": 81
    },
    "visibility": 10000,
    "wind": {
      "speed": 12.66,
      "deg": 30
    },
    "clouds": {
      "all": 90
    },
    "dt": 1610730111,
    "sys": {
      "type": 1,
      "id": 4610,
      "country": "US",
      "sunrise": 1610713063,
      "sunset": 1610747576
    },
    "timezone": -18000,
    "id": 5128581,
    "name": "New York",
    "cod": 200

  });

  const [forecast, setForecast] = useState(
    {
      "cod": "200",
      "message": 0,
      "cnt": 8,
      "list": [
        {
          "dt": 1611187200,
          "main": {
            "temp": 32.38,
            "feels_like": 18.75,
            "temp_min": 30.4,
            "temp_max": 32.38,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1016,
            "humidity": 59,
            "temp_kf": 1.1
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          "clouds": {
            "all": 18
          },
          "wind": {
            "speed": 15.26,
            "deg": 325
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-01-21 00:00:00"
        },
        {
          "dt": 1611198000,
          "main": {
            "temp": 30.11,
            "feels_like": 19.63,
            "temp_min": 28.96,
            "temp_max": 30.11,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1016,
            "humidity": 71,
            "temp_kf": 0.64
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          "clouds": {
            "all": 16
          },
          "wind": {
            "speed": 10.04,
            "deg": 317
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-01-21 03:00:00"
        },
        {
          "dt": 1611208800,
          "main": {
            "temp": 30.15,
            "feels_like": 20.37,
            "temp_min": 29.86,
            "temp_max": 30.15,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1016,
            "humidity": 79,
            "temp_kf": 0.16
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 36
          },
          "wind": {
            "speed": 9.28,
            "deg": 284
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-01-21 06:00:00"
        },
        {
          "dt": 1611219600,
          "main": {
            "temp": 30.43,
            "feels_like": 21.43,
            "temp_min": 30.4,
            "temp_max": 30.43,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 1013,
            "humidity": 84,
            "temp_kf": 0.02
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 27
          },
          "wind": {
            "speed": 8.28,
            "deg": 237
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-01-21 09:00:00"
        },
        {
          "dt": 1611230400,
          "main": {
            "temp": 31.19,
            "feels_like": 20.35,
            "temp_min": 31.19,
            "temp_max": 31.19,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 1010,
            "humidity": 85,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 11.77,
            "deg": 227
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-01-21 12:00:00"
        },
        {
          "dt": 1611241200,
          "main": {
            "temp": 33.67,
            "feels_like": 21.16,
            "temp_min": 33.67,
            "temp_max": 33.67,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 1008,
            "humidity": 80,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 89
          },
          "wind": {
            "speed": 14.92,
            "deg": 228
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-01-21 15:00:00"
        },
        {
          "dt": 1611252000,
          "main": {
            "temp": 37.56,
            "feels_like": 26.82,
            "temp_min": 37.56,
            "temp_max": 37.56,
            "pressure": 1005,
            "sea_level": 1005,
            "grnd_level": 1005,
            "humidity": 71,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 95
          },
          "wind": {
            "speed": 12.01,
            "deg": 242
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-01-21 18:00:00"
        },
        {
          "dt": 1611262800,
          "main": {
            "temp": 39.4,
            "feels_like": 30.52,
            "temp_min": 39.4,
            "temp_max": 39.4,
            "pressure": 1004,
            "sea_level": 1004,
            "grnd_level": 1003,
            "humidity": 69,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 53
          },
          "wind": {
            "speed": 8.93,
            "deg": 258
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-01-21 21:00:00"
        }
      ],
      "city": {
        "id": 5128581,
        "name": "New York",
        "coord": {
          "lat": 40.7143,
          "lon": -74.006
        },
        "country": "US",
        "population": 8175133,
        "timezone": -18000,
        "sunrise": 1611144911,
        "sunset": 1611179922
      }
    });


  const fetchWeather = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=imperial&APPID=${api.key}`)
        .then(res =>
          res.json())
        .then(result => {
          if (result.cod !== "404") {
            setWeather(result);
            fetchForecast();
            setCity('');
          } else {
            window.alert("Invalid City Name");
            setCity('');
          };
        });
    }
  }
  const fetchForecast = () => {
    fetch(`${api.base}forecast?q=${city}&units=imperial&APPID=${api.key}&cnt=8`)
      .then(res =>
        res.json())
      .then(result => {
        console.log(result);
        setForecast(result);
      });
  };
  const getBackground = (c) => {
    if (c === "Clear") {
      return 'app sunny';
    } else if (c === "Clouds") {
      if (typeof weather.main != "undefined" && weather.weather[0].id > 802) {
        return 'app cloudy';
      } else {
        return 'app partlyCloudy';
      }
    } else if (c === "Rain" || c === "Drizzle") {
      if (typeof weather.main != "undefined" && weather.main.temp > 55) {
        return 'app warmRain'
      } else {
        return 'app coldRain';
      }
    } else if (c === "Thunderstorm") {
      return 'app thunder';
    } else if (c === "Snow") {
      return 'app snow';
    } else return 'app fog'
  };
 const getWeatherIcon = (w) => {
   //add weather icons to assets and then return their img address.
 }
  return (
    <div>
      <div className={(typeof weather.main != "undefined") ? getBackground(weather.weather[0].main) : 'app sunny'}>
        <main>

          <div className="date-box">
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>


          <div className="weather-box">
            <div className='location'>{weather.name}</div>
            <div className="temp">{Math.round(weather.main.temp)}°</div>
            <div className="conditions" >{weather.weather[0].description}</div>
          </div>


          <div className="forecast-box">
            <div className="hr" value={forecast.list[0]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[0].dt * 1000))}
              </div>
              <span>{Math.round(forecast.list[0].main.temp)}°</span>
              <p>{forecast.list[0].weather.main}</p>
            </div>
            <div className="hr" value={forecast.list[1]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[1].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[1].main.temp)}°</span>
              <span>{forecast.list[1].weather.main}</span>
            </div>
            <div className="hr" value={forecast.list[2]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[2].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[2].main.temp)}°</span>
              <span>{forecast.list[2].weather.main}</span>
            </div>
            <div className="hr" value={forecast.list[3]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[3].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[3].main.temp)}°</span>
              <span>{forecast.list[3].weather.main}</span>
            </div>
            <div className="hr" value={forecast.list[4]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[4].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[4].main.temp)}°</span>
              <h6>{forecast.list[4].weather.main}</h6>
            </div>
            <div className="hr" value={forecast.list[5]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[5].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[5].main.temp)}°</span>
              <span>{forecast.list[5].weather.main}</span>
            </div>
            <div className="hr" value={forecast.list[6]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[6].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[6].main.temp)}°</span>
              <span>{forecast.list[6].weather.main}</span>
            </div>
            <div className="hr" value={forecast.list[7]}>
              <div className="forecastTime">{timeBuilder(new Date(forecast.list[7].dt * 1000))}
              </div>
            <span>{Math.round(forecast.list[7].main.temp)}°</span>
              <span>{forecast.list[7].weather.main}</span>
            </div>
          </div>


          <input
            type="text"
            className="search"
            placeholder="Search City"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={fetchWeather}
          />
        </main>
      </div>
    </div>
  );
}
export default App;
