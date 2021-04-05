import React, {Component} from 'react'
import {Layout} from 'antd';
import Headbar from "./components/Headbar";
import SidebarAll from "./components/SidebarAll";
import ModifyMyContents from "./components/ModifyMyContents";
import {Redirect, Route, Switch} from "react-router-dom";
import StuffHome from './components/StuffHome'

class Stuff extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidebarAll/>
                <Layout>
                    <Headbar/>
                    <Switch>
                        <Route path="/stuff/account" component={ModifyMyContents}/>
                        <Route path="/stuff/home" component={StuffHome}/>
                        <Redirect to="/stuff/account"/>
                    </Switch>
                </Layout>
            </Layout>
        );
    }
}

export default Stuff;
