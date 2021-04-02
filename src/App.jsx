import React, {Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import HR from "./HR";
import Login from "./Login";
import './App.css';
import Stuff from "./Stuff";


export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/hr" component={HR}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/login" component={Login}/>
                <Redirect to="/login"/>
            </Switch>
        )
    }
}
