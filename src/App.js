import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const key = process.env.REACT_APP_API_KEY;
    const lat = 29.424349;
    const lon = -98.491142;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`

  return (
    <div className="app">
        <div className="location">
            <h2>San Antonio</h2>
        </div>
        <div className="temp">
            <h4>110°F</h4>
        </div>
        <div className="humidity">
            85%
        </div>

    </div>
  );
}

export default App;
