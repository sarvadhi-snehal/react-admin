import React from 'react'
import Weather from './Weather'
import Qoute from './Qoute'
function WeatherQoute() {
    return (
        <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-column justify-content-between align-items-center bg-dark">
            <Weather/>
          <Qoute />
        </div>
    )
}

export default WeatherQoute
