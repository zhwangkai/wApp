import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from "./cps/homepage/homepage";
import Reminder from "./cps/reminder/reminder";

class App extends Component {
    render() {
        return (
            <Router>
				<Route path='/' exact Component={Homepage} />
				<Link to='/reminder'>Reminder</Link>
				<Route path='/reminder' exact Component={Reminder} />
        	</Router> 
        )
    }
}

export default App;