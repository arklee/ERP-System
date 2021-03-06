import React, { Component } from 'react'
import {message, Layout, Menu} from "antd";
import {
    FileTextFilled,
    HourglassFilled,
    IdcardFilled,
    ScheduleFilled,
    StarFilled
} from '@ant-design/icons';
import { withRouter } from "react-router-dom";

const { Sider } = Layout

class Sidebar extends Component {

    state = {
        current: '1',
    };

    handleClick = e => {
        if (this.props.id===null) {
            message.warning('请先进行查询');
        }
        else {
            this.props.history.push('/hr/search/'+e.key)
            this.props.handleQuery(e.key)
        }

    };

    render() {
        return (
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="document" icon={<FileTextFilled />}>人才档案管理</Menu.Item>
                    <Menu.Item key="train" icon={<HourglassFilled />}>人才培训管理</Menu.Item>
                    <Menu.Item key="exam" icon={<IdcardFilled />}>绩效信息管理</Menu.Item>
                    <Menu.Item key="attending" icon={<ScheduleFilled />}>考勤信息管理</Menu.Item>
                    <Menu.Item key="judge" icon={<StarFilled />}>评价管理</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(Sidebar)
