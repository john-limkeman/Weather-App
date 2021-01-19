import React, {useState} from 'react';

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

function App() {
  // const [background, setBackground] = useState('');
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
  const [temp, setTemp] = useState('');
  const [currentCondition, setCurrentCondition] = useState('');

  
  const fetchWeather = (evt) => {
    if (evt.key === "Enter") { 
      fetch(`${api.base}weather?q=${city}&units=imperial&APPID=${api.key}`)
      .then(res =>
        res.json())
        .then(result => {
          setWeather(result);
          setCity('');
          if (typeof weather.main != "undefined"){
          setTemp(weather.main.temp);
          setCurrentCondition(weather.weather[0].main);
          } else {
            setTemp('75');
            setCurrentCondition('Sunny with a high of');
            getBackground('Clear');
          };
          console.log({weather});
          
        });
        
      }
    };
      const getBackground = (c) =>  {
        if (c === "Clear"){
          return 'app sunny';
        } else if( c === "Clouds"){
          if (typeof weather.main != "undefined" && weather.weather[0].id > 802){
            return 'app cloudy';
          } else {
            return 'app partlyCloudy';
          }
        }else if(c === "Rain" || c === "Drizzle"){
          if (typeof weather.main != "undefined" && weather.main.temp > 55){
            return 'app warmRain'
          } else {
          return 'app coldRain';
          }
        }else if(c === "Thunderstorm"){
          return 'app thunder';
        }else if(c === "Snow"){
          return 'app snow';
        } else return 'app fog'
      };
  return (
    <div className={(typeof weather.main != "undefined") ? getBackground (weather.weather[0].main) : 'app sunny'}>
      <main>
        <div className="date-box">
          <div className='date'>{dateBuilder (new Date())}</div>
        </div>
        <div className="weather-box">
          <div className='location'>{weather.name}</div>
          <div className="temp">{Math.round(temp)}°</div>
          <div className="conditions" >{currentCondition}</div>
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
  );
}
export default App;
