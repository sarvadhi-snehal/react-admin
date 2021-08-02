import React from 'react'
import Chart from '../../Chart/Chart'

import WeatherQoute from '../../Weather&Qoute/WeatherQoute'
function ChartWeather() {
    return (
        <div className="row bg-transparent w-100  my-4 ">
            <Chart />
            <WeatherQoute />
        </div>
    )
}

export default ChartWeather
