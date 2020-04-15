import React, { Component } from 'react';
import {Card,Chart,CountryPicker} from './components'
import styles from './App.module.css';

import {fetchData} from './api'

class App extends Component {
    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchData1=await fetchData();
        //  console.log('fetch data response',fetchData1);
         this.setState({
             data:fetchData1
         })

    }

    handleCountryChange=async (country)=>{
        console.log(country)
        const fetchData1=await fetchData(country);
        console.log(fetchData1);
        this.setState({
            data:fetchData1,
            country:country

        })
     

    }

    render() { 
        const {data,country}=this.state
        return (
            <div className={styles.container}>
                {/* <h1>App</h1> */}
                <Card data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}  />
                <Chart data={data} country={country}/>
            </div>
          );
    }
}
 
export default App;