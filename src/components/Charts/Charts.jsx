import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'
import { StylesProvider } from '@material-ui/core';
import styles from './Charts.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        (async () => {
            setDailyData(await fetchChartData());
        })();
        console.log(dailyData)
    },[])
    const lineChart = (
        dailyData.length ? (
            <Line
                data={
                    {
                    labels :dailyData.map(({date})=>date),
                    datasets:[
                        {data:dailyData.map(({confirmed})=>confirmed),
                        label:'Infected',
                        borderColor:'#3333ff',
                        fill:true    
                    },
                        {data:dailyData.map(({deaths})=>deaths),
                        label:'Recovered',
                        borderColor:'red',
                        backgroundColor:'rgba(255,0,0,0.5)',
                        fill:true }
                 ]
                }}
            />

        ) : null
    )
    return (
        <div className={styles.container}>
            {lineChart}

        </div>
    )
}

export default Chart;