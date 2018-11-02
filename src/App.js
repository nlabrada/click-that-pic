import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

class App extends Component {    
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/game" component={Game}/>
                </Switch>
            </HashRouter>
        )
    };
};

export default App;
