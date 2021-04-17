import React, {Component} from 'react'
import {Layout} from 'antd';
import Headbar from "./components/Headbar";
import SidebarAll from "./components/SidebarAll";
import ModifyMyContents from "./components/ModifyMyContents";
import {Redirect, Route, Switch} from "react-router-dom";
import SearchingContents from "./components/SearchingContents";

class Stuff extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidebarAll/>
                <Layout>
                    <Headbar id={this.props.id}/>
                    <Switch>
                        <Route path="/stuff/account" component={ModifyMyContents}/>
                        <Route path="/stuff/search" component={SearchingContents}/>
                        <Redirect to="/stuff/search"/>
                    </Switch>
                </Layout>
            </Layout>
        );
    }
}

export default Stuff;
