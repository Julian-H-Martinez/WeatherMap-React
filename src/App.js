import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    // const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);
    const key = process.env.REACT_APP_API_KEY;
    // const lat = 29.424349;
    // const lon = -98.491142;

    // const urlGeo = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
    const urlCity = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&exclude=minutely,hourly,alerts&cnt=5&appid=${key}`;
    // const urlCityState = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${key}&units=imperial`

    const searchLocation = (e) => {
        if(e.key === 'Enter'){
            axios.get(urlCity)
                .then((response) => {
                    setData(response.data);
                    setList(response.data.list);
                    setCity('');
                    console.log(response.data);
                    console.log(response.data.list);
                })
        }
    }

  return (
    <div className="app">
        <div className="search">
            <input
                type="text"
                value={city}
                onChange={event => setCity(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter City'
            />
        </div>
        <div className="container">
            <div className="top">
                <div className="location text">
                    <h2>{data.name}</h2>
                </div>
                <div className="temp text">
                    {data.main ? <h3>{data.main.temp.toFixed()}°F</h3> : null}
                </div>
                <div className="description text">
                    {data.weather ? <h3>{data.weather[0].main}</h3> : null}
                </div>
            </div>


            {list.map(day => (
                <p>
                    {day.dt_txt}
                </p>
            ))}



            {data.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className="bold text">{data.main.feels_like.toFixed()}°F</p> : null}
                        <p className='text'>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold text'>{data.main.humidity}%</p> : null}
                        <p className='text'>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className="bold text">{data.wind.speed.toFixed()}</p> : null}
                        <p className='text'>Wind Speed</p>
                    </div>
                </div>
            }
        </div>
    </div>
  );
}

export default App;


/*
https://api.openweathermap.org/data/2.5/forecast?lat=29.424349&lon=-98.491142&appid=e36460df7ac92f34e5766229d1a0601e
 */                                  