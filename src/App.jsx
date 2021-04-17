import React, {Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import HR from "./HR";
import Login from "./Login";
import './App.css';
import Stuff from "./Stuff";
import Company from "./Company"

export default class App extends Component {

    state = {id:null}

    getID = (userID) => {
        this.setState({id:userID})
    }

    render() {
        return (
            <Switch>
                <Route path="/hr" render={(props) => (<HR {...props} id={this.state.id}/>)}/>
                <Route path="/stuff" render={(props) => (<Stuff {...props} id={this.state.id}/>)}/>
                <Route path="/login" render={(props) => (<Login {...props} getID={this.getID}/>)}/>
                <Route path="/company" render={(props) => (<Company {...props} id={this.state.id}/>)}/>
                <Redirect to="/login"/>
            </Switch>
        )
    }
}
