import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './WeatherDetails.css'
 

function WeatherDetails() {

  const { name } = useParams();
  const [weatherData, setWeatherData] = useState("")


  console.log("Data",weatherData.data)

  const fetchData = async () => {
    try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/energy?city=${name}&start_date=2024-03-03&end_date=2024-03-10&threshold=63&units=I&key=8ff6b1c427824112b02b9f92f1485bbb&tp=daily`)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data =  await response.json()
        setWeatherData(data)
    
    } catch (error) {
      console.log("error in fetching data",error)
    }
  }

  useEffect(() => {
   fetchData()
  }, []);

  function findDay(dateString){
    const dateObject = new Date(dateString);
    const dayOfWeek = dateObject.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[dayOfWeek];
    return dayName
}

  return (
    
    <div className="weather-details-container">
    <h1 className="weather-details-title">Weather Details for {name}</h1>
    {weatherData &&
      Array.isArray(weatherData.data) &&
      weatherData.data.map((item, index) => (
        <div key={index} className="weather-item">
          <h2 className="weather-temp">
            Temp: {Math.trunc((item.temp - 32) * 5 / 9)} degree
          </h2>
          <h3 className="weather-day">Day: {findDay(item.date)}</h3>
          <p>Date: {item.date}</p>
        </div>
      ))}
  </div>
  )
}

export default WeatherDetails
