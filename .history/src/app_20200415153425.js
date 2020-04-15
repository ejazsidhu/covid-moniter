import React, { Component } from 'react';
import {Card,Chart,CountryPicker} from './components'

class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>App</h1>
                <Card/>
                <Chart/>
                <CountryPicker/>
            </div>
          );
    }
}
 
export default App;