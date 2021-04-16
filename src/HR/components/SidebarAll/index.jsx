import React, { Component } from 'react'
import {Layout, Menu} from "antd";
import {
    PlusCircleOutlined,
    SnippetsOutlined,
    UserOutlined
} from '@ant-design/icons';
import './index.css'
import { withRouter } from "react-router-dom";

const { Sider } = Layout

class SidebarAll extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    toHome = () => {
        this.props.history.push('/hr/search/home')
    }

    handleClick = e => {
        this.props.history.push('/hr/'+e.key)
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" onClick={this.toHome}/>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['search']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={'dark'}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="search" icon={<SnippetsOutlined />}>员工信息查询</Menu.Item>
                    <Menu.Item key="account" icon={<UserOutlined />}>我的账户信息</Menu.Item>
                    <Menu.Item key="input" icon={<PlusCircleOutlined />}>录入员工信息</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SidebarAll)
