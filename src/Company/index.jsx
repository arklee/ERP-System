import React, {Component} from 'react'
import {Layout} from 'antd';
import Headbar from "./components/Headbar";
import SidebarAll from "./components/SidebarAll";
import {Redirect, Route, Switch} from "react-router-dom";
import SearchingContents from "./components/SearchingContents";

class Company extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidebarAll/>
                <Layout>
                    <Headbar id={this.props.id}/>
                    <Switch>
                        <Route path="/company/search" component={SearchingContents}/>
                        <Redirect to="/company/search"/>
                    </Switch>
                </Layout>
            </Layout>
        );
    }
}

export default Company;
