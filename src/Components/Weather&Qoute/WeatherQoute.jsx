import React from 'react'
import Weather from './Weather'
import Qoute from './Qoute'
import './WeatherQuote.scss'
function WeatherQoute() {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-column justify-content-between align-items-center  ">
            <Weather/>
          <Qoute />
        </div>
    )
}

export default WeatherQoute
