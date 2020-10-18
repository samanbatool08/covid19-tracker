import React, {useState} from 'react';
import {
  MenuItem, 
  FormControl,
  Select, 
  Card,
  CardContent,
} from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    "USA", "UK", "INDIA"
  ]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3​/covid-19​/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
            {
              name: country.country, // United States, United Kingdom
              value: country.countryInfo.iso2 // UK, USA, FR

            }
        ))
      })
    }
  }, [])

  return (
    <div className="app">
      <div className='app__header'>
        <h1>COVID-19 TRACKER</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' value='abc'>
            {/* Loop through list of countries and show a dropdown list of country options */}
           
           {
            countries.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
            ))

           }
           
            {/* <MenuItem value='worldwide'>Worldwide</MenuItem>
            <MenuItem value='worldwide'>Option 2</MenuItem>
            <MenuItem value='worldwide'>Option 3</MenuItem>
            <MenuItem value='worldwide'>Option 4</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Ttitle + Select Input dropdown field */}

      {/* Infobox */}
      {/* Infobox */}
      {/* Infobox */}

      {/* Table */}
      {/* Graph */}

    </div>
  );
}

export default App;
