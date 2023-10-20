import React,{useState} from 'react'

const WeatherDisplay = () => {
  const [latitude,setLatitude]=useState("")
  const [longitude,setLongitude]=useState("")
  const [hemisphere,setHemisphere]=useState("")

  function geolocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          if(position.coords.latitude>0){
            setHemisphere("Northern Hemisphere")
          }
          else if(position.coords.latitude<0){
            setHemisphere("Southern Hemisphere")
          }
          else{
            setHemisphere("Equator")
          }
        })
    }
  }
  return (
    <div>
        <h1>Weather App</h1>

        <h3>Latitude:{latitude}</h3>
        <h3>Longitude:{longitude}</h3>
        <h3>Hemisphere:{hemisphere}</h3>

        <button onClick={geolocation}>Get Location</button>
    </div>
  )
}


export default WeatherDisplay