import React, {Component} from 'react'
import {Layout} from 'antd';
import Headbar from "./components/Headbar";
import SidebarAll from "./components/SidebarAll";
import SearchingContents from "./components/SearchingContents"
import ModifyMyContents from "./components/ModifyMyContents";
import InputContents from "./components/InputContents";
import {Redirect, Route, Switch} from "react-router-dom";

export default class Main extends Component {

    state = {id:null}

    isSearch = (id) => {
        this.setState({id:id})
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidebarAll/>
                <Layout>
                    <Headbar isSearch={this.isSearch}/>
                    <Switch>
                        <Route path="/hr/search" render={() => <SearchingContents user={this.props.id} id={this.state.id}/>}/>
                        <Route path="/hr/account" render={() => <ModifyMyContents user={this.props.id}/>}/>
                        <Route path="/hr/input" render={() => <InputContents user={this.props.id}/>}/>
                        <Redirect to="/hr/search"/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}

