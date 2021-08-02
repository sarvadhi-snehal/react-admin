import React from 'react'
import Weather from './Weather'
import Qoute from './Qoute'
import './WeatherQuote.scss'
function WeatherQoute() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 flex-view bg-light flex-column justify-content-between   ">
            <Weather/>
          <Qoute />
        </div>
    )
}

export default WeatherQoute
