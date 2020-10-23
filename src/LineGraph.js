import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph() {
    const [data, setData] = useState({});

    // endpoint: https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(response => response.json())
        .then(data => {
            console.log('line', data)
        })
    }, [])

    return (
        <div>
            <h1>I am a graph</h1>
            {/* <Line 

            /> */}
        </div>
    )
}

export default LineGraph;
