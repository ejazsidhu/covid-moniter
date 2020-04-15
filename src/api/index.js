import axios from 'axios';

const url="https://covid19.mathdro.id/api";

export const fetchData=async ()=>{
    try {
        const { data:{confirmed, recovered,deaths,lastUpdate} } = await axios.get(url);
        
        return {            confirmed,            recovered,            deaths,            lastUpdate       };

    } catch (error) {
        
    }
}

export const fetchChartData=async ()=>{
    try {
        const {data}= await axios.get(`${url}/daily`);
        const modifiedDat=data.map(d=>({
            confirmed:d.confirmed.total,
            deaths:d.deaths.total,
            date:d.reportDate
        }))
       return modifiedDat;

    } catch (error) {
        
    }
}