import React ,{useState,useEffect}from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountryData} from '../../api';

const CountryPicker =({handleCountryChange})=>{
    const [countriesData,setCountriesData]=useState([]);

    useEffect(()=>{
        (async ()=>{
            setCountriesData(await fetchCountryData())
        })();
        console.log("countries data",countriesData)
    },[setCountriesData])

    return (
       <FormControl className={styles.FormControl}>
           <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
               <option value="">Global</option>
               {
                   countriesData.map((data,i)=>{
                       return (
                        <option key={i} value={data}>{data}</option>
                       )
                   })
               }
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker;