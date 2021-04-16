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

export const {Provider,Consumer} = React.createContext("默认名称");

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
        let id = this.props.id
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>查看员工信息</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.query[this.state.query]}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <Provider value={id}>
                    <SidebarQuery handleQuery={this.handleQuery}/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Switch>
                            <Route path="/hr/search/home" component={Home}/>
                            <Route path="/hr/search/train" component={Train}/>
                            <Route path="/hr/search/document" component={Document}/>
                            <Route path="/hr/search/attending" component={Attending}/>
                            <Route path="/hr/search/exam" component={Exam}/>
                            <Route path="/hr/search/overall" component={Overall}/>
                            <Route path="/hr/search/judge" component={Judge}/>
                            <Redirect to="/hr/search/home"/>
                        </Switch>
                    </Content>
                    </Provider>
                </Layout>
            </Content>
        );
    }
}

export default SearchingContents;
