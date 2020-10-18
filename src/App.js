import React, { useState, useEffect } from 'react';
import {
  MenuItem, 
  FormControl,
  Select, 
  Card,
  CardContent,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const countries = data.map((country) => ({
              name: country.country, // United States, United Kingdom
              value: country.countryInfo.iso2, // UK, USA, FR
            }));
        setCountries(countries)
      })};
    getCountriesData()
  }, [])

  const onCountryChange =  (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className='app__header'>
        <h1>COVID-19 TRACKER</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' onChange={onCountryChange} value={country}>
            <MenuItem value='worldwide'>Worldwide</MenuItem>           
           {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
     
     <div className='app__stats'>
      <InfoBox />
      <InfoBox />
      <InfoBox />
     </div>

      {/* Table */}
      {/* Graph */}

    </div>
  );
}

export default App;
