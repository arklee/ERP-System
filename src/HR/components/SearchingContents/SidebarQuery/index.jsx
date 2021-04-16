import React, { Component } from 'react'
import {message, Layout, Menu} from "antd";
import { Consumer } from "../../SearchingContents"
import {
    FileTextFilled,
    HourglassFilled,
    IdcardFilled,
    ScheduleFilled,
    StarFilled,
    LockFilled
} from '@ant-design/icons';
import { withRouter } from "react-router-dom";

const { Sider } = Layout

class Sidebar extends Component {

    state = {
        current: '1',
    };

    handleClick = id => e => {
        if (id===null) {
            message.warning('请先进行查询');
        }
        else {
            this.props.history.push('/hr/search/'+e.key)
            this.props.handleQuery(e.key)
        }

    };

    render() {
        return (
            <Consumer>
                {(id)=>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            style={{ height: '100%' }}
                            onClick={this.handleClick(id)}
                        >
                            <Menu.Item key="document" icon={<FileTextFilled />}>人才档案查询</Menu.Item>
                            <Menu.Item key="train" icon={<HourglassFilled />}>人才培训查询</Menu.Item>
                            <Menu.Item key="exam" icon={<IdcardFilled />}>绩效信息查询</Menu.Item>
                            <Menu.Item key="attending" icon={<ScheduleFilled />}>考勤信息查询</Menu.Item>
                            <Menu.Item key="judge" icon={<StarFilled />}>评价查询</Menu.Item>
                            <Menu.Item key="overall" icon={<LockFilled />}>总览</Menu.Item>
                        </Menu>
                    </Sider>
                }
            </Consumer>
        )
    }
}

export default withRouter(Sidebar)
