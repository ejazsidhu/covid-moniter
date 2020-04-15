import React, { Component } from 'react';
import {Card,Chart,CountryPicker} from './components'
import styles from './App.module.css';

import {fetchData} from './api'

class App extends Component {
    state={
        data:{}
    }

    async componentDidMount(){
        const fetchData1=await fetchData();
        //  console.log('fetch data response',fetchData1);
         this.setState({
             data:fetchData1
         })

    }

    render() { 
        const {data}=this.state
        return (
            <div className={styles.container}>
                {/* <h1>App</h1> */}
                <Card data={data} />
                <CountryPicker/>
                <Chart/>
            </div>
          );
    }
}
 
export default App;