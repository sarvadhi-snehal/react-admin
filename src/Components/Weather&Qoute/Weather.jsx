import React,{useState,useEffect} from 'react'
import './WeatherQuote.scss'
function Weather() {
    const [weather,setWeather] =useState()


    const getWeather = ()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q=surat&appid=9f87375ab8e759c8b3ec2e7a9fb9469a")
        .then(response => response.json())
        .then(data =>{
            console.log(data.weather[0])
            setWeather(data.weather[0])
        })
    }
    useEffect(()=>{
        getWeather();
    },[])
    return (
        <div className=" card bg-info w-100 flex-view h-50 justify-content-center bg-pinch mb-1">
            <div className="temp">
          {/* <p>{weather.main}</p> */}
          <p>Surat</p>

            </div>
            <div className="icon">

          {/* <p>{weather.icon}</p> */}
            </div>
        </div>
    )
}

export default Weather
