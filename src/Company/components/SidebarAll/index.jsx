import React, { Component } from 'react'
import {Layout, Menu} from "antd";
import {SnippetsOutlined} from '@ant-design/icons';
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

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo"/>
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    theme={'dark'}
                    defaultSelectedKeys={"search"}
                >
                    <Menu.Item key="search" icon={<SnippetsOutlined/>}>公司管理</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SidebarAll)
