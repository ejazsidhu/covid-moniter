import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'
import { StylesProvider } from '@material-ui/core';
import styles from './Charts.module.css'

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
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
    const barChart=(
confirmed?(
    <Bar
    data={{
        labels:['Infected','Recovered','Deaths'],
        datasets:[{
            label:'People',
            backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
            data:[confirmed.value,recovered.value,deaths.value]
        }]

    }}
    options={{
        legend:{display:false},
        title:{display:true,text:`Current state in ${country}`}
    }}
    />
):null
    );
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}

        </div>
    )
}

export default Chart;