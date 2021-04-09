import React from 'react'

const CountryList = ({countries,handleClick, setCountryData}) => {
    if(countries.length > 10)
        return <p>Too many matches, specify another filter</p>
    else if(countries.length > 1)
        return countries.map( country => <p key={country.name}>{country.name} <button onClick={()=>handleClick(country)}>show</button></p> )
    else if(countries.length === 1)
    {
        setCountryData(countries[0])
        return <div></div>
    }
    else
        return <p>No match found</p>
}

export default CountryList