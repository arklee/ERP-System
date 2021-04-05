import React, { Component } from 'react'
import {Layout, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons';
import './index.css'
import { withRouter } from "react-router-dom";

const { Sider } = Layout

class SidebarAll extends Component {
    toHome = () => {
        this.props.history.push('/stuff/home')
    }

    handleClick = e => {
        this.props.history.push('/stuff/'+e.key)
    };

    render() {
        return (
            <Sider>
                <div className="logo" onClick={this.toHome}/>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['account']}
                    defaultOpenKeys={['account']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={'dark'}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="account" icon={<UserOutlined/>}>我的账户信息</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SidebarAll)
