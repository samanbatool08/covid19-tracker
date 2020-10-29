import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph() {
    const [data, setData] = useState({});
    
    // endpoint: https://disease.sh/v3/covid-19/historical/all?lastdays=120
    
    const buildChartData = (data, casesType) => {
        console.log('data', typeof data)
        
     
        const chartData = [];
        let lastDataPoint;
        for (let date in data.cases) {
            if (lastDataPoint) {
                let newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint)
            }
            lastDataPoint = data[casesType][date]
        }
        return chartData; 
    };
 

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(response => response.json())
        .then(data => {
            console.log('line', data)
            const chartData = buildChartData(data)
            setData(chartData)
        })
    }, [])

    return (
        <div>
            <h1>I am a graph</h1>
            {/* <Line data options /> */}
        </div>
    )
}

export default LineGraph;
