import React from 'react';
import {
  MenuItem, 
  FormControl,
  Select, 
  Card,
  CardContent,
} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className='app__dropdown'>
        <Select 
          variant='outlined'
          value='abc'
          >
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          <MenuItem value='worldwide'>Worldwide</MenuItem>

        </Select>
      </FormControl>
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
