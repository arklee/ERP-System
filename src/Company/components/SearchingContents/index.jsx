import React, {Component} from 'react';
import { Layout, Breadcrumb } from 'antd';
import {Route,Switch,Redirect} from 'react-router-dom'
import CompanyInfo from "./CompanyInfo";
import HrAccount from "./HrAccount";

import SidebarQuery from "./SidebarQuery";

const { Content } = Layout;

class SearchingContents extends Component {

    state = {query:"home"}

    query = {
        info:'公司基本信息',
        hr:'HR账户管理'
    }

    handleQuery = (key) => {
        this.setState({query:key})
    }

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>公司信息管理</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.query[this.state.query]}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <SidebarQuery handleQuery={this.handleQuery} id={this.props.id}/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Switch>
                            <Route path="/company/search/info" render={() => <CompanyInfo user={this.props.user}/>}/>
                            <Route path="/company/search/hr" render={() => <HrAccount user={this.props.user}/>}/>
                            <Redirect to="/company/search/info"/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default SearchingContents;
