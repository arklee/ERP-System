import React, { Component } from 'react'
import {Layout, Menu} from "antd";
import {
    PlusCircleOutlined,
    SnippetsOutlined,
    UserOutlined
} from '@ant-design/icons';
import './index.css'
import logo from './logo.png'
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
        this.props.history.push('/main/home')
    }

    handleClick = e => {
        this.props.history.push('/hr/'+e.key)
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <a style={{
                        lineHeight: '64rpx',
                        display: 'flex',
                        height: 64,
                        color: 'rgba(255, 255, 255, 0.65)',
                        alignItems: 'center',
                    }}
                    href="https://preview.pro.ant.design/dashboard/analysis"
                >
                    <img src={logo} style={{
                        width: 32,
                        height: 32,
                        margin: '16px',
                    }} alt=''/>
                    <div>员工查</div>
                </a>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={'dark'}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="search" icon={<SnippetsOutlined />}>查看员工信息</Menu.Item>
                    <Menu.Item key="account" icon={<UserOutlined />}>我的账户信息</Menu.Item>
                    <Menu.Item key="input" icon={<PlusCircleOutlined />}>录入员工信息</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SidebarAll)
