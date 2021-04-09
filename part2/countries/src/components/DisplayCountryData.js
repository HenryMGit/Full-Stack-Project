import React, {useEffect,useState} from 'react'
import axios from 'axios'

const DisplayCountryData = ({countryData}) =>{
  //State
  const [countryWeather, setCountryWeather] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY
  useEffect( () => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countryData.capital}`)
    .then( response => setCountryWeather(response.data.current))
    .catch(error => console.log(error))

  },[countryData.capital,API_KEY])
  return ( 
    <div>
      <h1>{countryData.name}</h1>
      <div>capital {countryData.capital}</div>
      <div>population {countryData.population}</div>
      <h1>languages</h1><ul>{countryData.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
      <img src={countryData.flag} width="200" height="300" alt="Country's Flag"/>
      <h1>Weather in {countryData.captial}</h1>
      <div><strong>temperature:</strong> {countryWeather.temperature} Celcius</div>
      <img src={countryWeather.weather_icons} alt="Weather icon" />
      <div><strong>wind:</strong> {countryWeather.wind_speed} mph direction {countryWeather.wind_dir} </div>
    </div>
  )
}

export default DisplayCountryData