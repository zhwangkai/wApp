import React, { Component } from "react";
import ReactDOM from "react-dom";
import Swirl from './cps/Swirl';

class App extends Component {

    render() {
        return (
            <div className='container'>
            <p>Welcome!</p>
            <Swirl />
            </div>
        )
    }
}

export default App;