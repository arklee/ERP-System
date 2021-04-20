import React, { Component } from 'react'
import {Layout, Menu} from "antd";
import {
    FileTextFilled,
    HourglassFilled,
} from '@ant-design/icons';
import { withRouter } from "react-router-dom";

const { Sider } = Layout

class Sidebar extends Component {

    state = {
        current: '1',
    };

    handleClick = e => {
        this.props.history.push('/company/search/'+e.key)
        this.props.handleQuery(e.key)
    };

    render() {
        return (
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                    onClick={this.handleClick}
                    defaultSelectedKeys="info"
                >
                    <Menu.Item key="info" icon={<FileTextFilled />}>公司基本信息</Menu.Item>
                    <Menu.Item key="hr" icon={<HourglassFilled />}>HR账户管理</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(Sidebar)
