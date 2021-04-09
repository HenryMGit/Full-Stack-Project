import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DisplayCountryData from './components/DisplayCountryData'
import CountryList from './components/CountryList'



function App() {
  //States
  const [countriesData, setCountriesData] = useState([])
  const [searchedCountry, setSearchedCountry] = useState('')
  const [countryData, setCountryData] = useState([])
 

  useEffect( () =>{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response =>setCountriesData(response.data))
  },[])


  const handleSearchedCountry = (event) => {
    setSearchedCountry(event.target.value)
  }

  const handleClick = (data) =>{
    setCountryData(data);
  }

  const countriesMatch = countriesData.filter(country => {
    let countryName = country.name.toLowerCase()
    return countryName.indexOf(searchedCountry.toLowerCase()) > -1
  })
  
  
  return (
    <div>
      find countries <input value={searchedCountry} onChange={handleSearchedCountry}/>
      {countriesMatch.length === 0  ? '': <CountryList  countries={countriesMatch} handleClick={handleClick} setCountryData={setCountryData} />}
      {countryData.length !== 0?   <DisplayCountryData countryData={countryData} />   :  ' '}
      
    </div>
  );
}

export default App;
