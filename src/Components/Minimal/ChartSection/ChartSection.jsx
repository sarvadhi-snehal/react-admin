import React from 'react'
import ChartContainer from '../../Charts/ChartContainer'
import WeatherQoute from '../../Weather&Qoute/WeatherQoute'
function ChartSection() {
    return (
        <div className="row d-flex align-items-center justify-content-center w-100 pb-4  vh-80 px-2">
            <ChartContainer />
            <WeatherQoute/>
        </div>
    )
}

export default ChartSection
