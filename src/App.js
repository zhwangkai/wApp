import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";
import Blog from "./pages/blog/blog";
import Tools from "./pages/tools/tools";
import Nav from "./cps/nav/nav";
import I77 from "./pages/i77/i77";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='app-container'>
            <Nav />
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/tools' exact component={Tools} />
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/i77' exact component={I77} />
                </Switch>
            </div>
        )
    }
}

export default App;