import React, {Component} from 'react';
import { Layout, Breadcrumb } from 'antd';
import {Route,Switch,Redirect} from 'react-router-dom'

import SidebarQuery from "./SidebarQuery";
import Train from "./Train";
import Document from "./Document";
import Attending from "./Attending";
import Exam from "./Exam";
import Overall from "./Overall";
import Judge from "./Judge";
import Home from "./Home";

const { Content } = Layout;

class SearchingContents extends Component {

    state = {query:"home"}

    query = {
        home:'首页',
        document:'人才档案查询',
        train:'人才培训查询',
        exam:'绩效信息查询',
        attending:'考勤信息查询',
        judge:'评价查询',
        overall:'总览'
    }

    handleQuery = (key) => {
        this.setState({query:key})
    }

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>查看员工信息</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.query[this.state.query]}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <SidebarQuery handleQuery={this.handleQuery} id={this.props.id}/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Switch>
                            <Route path="/stuff/search/home" render={(props) => (<Home {...props} id={this.props.id}/>)}/>
                            <Route path="/stuff/search/train" render={(props) => (<Train {...props} id={this.props.id}/>)}/>
                            <Route path="/stuff/search/document" render={(props) => (<Document {...props} id={this.props.id}/>)}/>
                            <Route path="/stuff/search/attending" render={(props) => (<Attending {...props} id={this.props.id}/>)}/>
                            <Route path="/stuff/search/exam" render={(props) => (<Exam {...props} id={this.props.id}/>)}/>
                            <Route path="/stuff/search/overall" render={(props) => (<Overall {...props} id={this.props.id}/>)}/>
                            <Route path="/stuff/search/judge" render={(props) => (<Judge {...props} id={this.props.id}/>)}/>
                            <Redirect to="/stuff/search/home"/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default SearchingContents;
