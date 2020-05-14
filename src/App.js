import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from "./cps/homepage/homepage";
import Reminder from "./cps/reminder/reminder";

class App extends Component {
    render() {
        return (
            <Router>
				<Route path='/' exact component={Homepage} />
				<Route path='/reminder' exact component={Reminder} />
        	</Router> 
        )
    }
}

export default App;
