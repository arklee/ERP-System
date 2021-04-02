import React, { Component } from 'react'
import {Layout, Menu} from "antd";
import {
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
        this.props.history.push('/stuff/search/home')
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" onClick={this.toHome}/>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={'dark'}
                >
                    <Menu.Item key="account" icon={<UserOutlined />}>我的账户信息</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SidebarAll)
