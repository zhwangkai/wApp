import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";
import Blog from "./pages/blog/blog";
import Tools from "./pages/tools/tools";
import Nav from "./cps/nav/nav";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='app-container'>
            <Nav />
            <Router>
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/tools' exact component={Tools} />
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/reminder' exact component={Tools} />
                </Switch>
            </Router> 
            </div>
        )
    }
}

export default App;