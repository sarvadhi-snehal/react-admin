import React,{useState,useEffect} from 'react'

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
        <div className="weather bg-success w-100">
          <p>Surat</p>
          <p>{weather.icon}</p>
          <p>{weather.main}</p>
        </div>
    )
}

export default Weather
