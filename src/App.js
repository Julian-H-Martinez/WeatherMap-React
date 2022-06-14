import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
    const key = process.env.REACT_APP_API_KEY;
    const lat = 29.424349;
    const lon = -98.491142;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units`

  return (
    <div className="app">
        <div className="container">
            <div className="top">
                <div className="location">
                    <h2>San Antonio</h2>
                </div>
                <div className="temp">
                    <h4>98.5°F</h4>
                </div>
                <div className="description">
                    <h5>Clouds</h5>
                </div>
            </div>
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
        </div>
    </div>
  );
}

export default App;


/*
https://api.openweathermap.org/data/2.5/forecast?lat=29.424349&lon=-98.491142&appid=e36460df7ac92f34e5766229d1a0601e
 */                                  