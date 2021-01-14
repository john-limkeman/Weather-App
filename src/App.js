import React, {Component} from 'react';
const api = {
  key: "fd25d9fc51079308797eba529304b260",
  base: "api.openweathermap.org/data/2.5/"
}
const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month}, ${year}`

}
const fetchWeather = (evt) => {
  if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${this.state.city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        this.setState({weather: result});
        console.log(result);
      });
}
}
class App extends Component {

  state = {
    weather: [],
    city: []

  }

render(){
  return (
    <div className="app sunny">
      <main>
        <div className="date-box">
          <div className='date'>{dateBuilder (new Date())}</div>
        </div>
          <div className='location'> Chicago, IL</div>


        <input
        type="text"
        className="search"
        placeholder="Search Area"
        onChange={e => this.setState({city: e.target.value})}
        value={this.state.city}
        onKeyPress={fetchWeather}
        />
      </main>
    </div>
  );
}
}
export default App;
