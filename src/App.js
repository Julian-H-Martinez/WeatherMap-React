import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const key = process.env.REACT_APP_API_KEY;
    const lat = 29.424349;
    const lon = -98.491142;

    const urlGeo = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
    const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    const urlCityState = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${key}&units=imperial`

    const searchLocation = (e) => {
        if(e.key === 'Enter'){
            axios.get(urlCity)
                .then((response) => {
                    setData(response.data);
                    setCity('');
                    console.log(response.data);
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
                <div className="location">
                    <h2>{data.name}</h2>
                </div>
                <div className="temp">
                    {data.main ? <h4>{data.main.temp.toFixed()}°F</h4> : null}
                </div>
                <div className="description">
                    {data.weather ? <h5>{data.weather[0].main}</h5> : null}
                </div>
            </div>

            {data.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        <p className="bold text">110°F</p>
                        <p className='text'>Feels Like</p>
                    </div>
                    <div className="humidity">
                        <p className='bold text'>85%</p>
                        <p className='text'>Humidity</p>
                    </div>
                    <div className="wind">
                        <p className="bold text">2mph</p>
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