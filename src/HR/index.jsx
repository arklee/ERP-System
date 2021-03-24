import React, {Component} from 'react'
import {Layout} from 'antd';
import Headbar from "./components/Headbar";
import SidebarAll from "./components/SidebarAll";
import SearchingContents from "./components/SearchingContents"
import ModifyMyContents from "./components/ModifyMyContents";
import InputContents from "./components/InputContents";
import {Redirect, Route, Switch} from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidebarAll/>
                <Layout>
                    <Headbar/>
                    <Switch>
                        <Route path="/hr/search" component={SearchingContents}/>
                        <Route path="/hr/account" component={ModifyMyContents}/>
                        <Route path="/hr/input" component={InputContents}/>
                        <Redirect to="/hr/search"/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}

