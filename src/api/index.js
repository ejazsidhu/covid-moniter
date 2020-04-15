import axios from 'axios';

const url="https://covid19.mathdro.id/api";

export const fetchData=async (country)=>{
    let modifiedURL=url;
    if(country){
        modifiedURL=`${url}/countries/${country}`
    }
    try {
        const { data:{confirmed, recovered,deaths,lastUpdate} } = await axios.get(modifiedURL);
        
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

export const fetchCountryData=async ()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map(country=>country.name)
        
    } catch (error) {
        
    }

}