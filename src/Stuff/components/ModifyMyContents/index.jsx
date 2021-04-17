import React, {Component} from 'react';
import {Breadcrumb,Divider, Layout, Table} from "antd";
import InfoHeader from "./InfoHeader";
import axios from "axios";

const { Content } = Layout;

class ModifyMyContents extends Component {

    state = {dataSource:[], detail:false, id:0}

    columns = [
        {title: 'HR ID', dataIndex: 'hr_id', key: 'hr_id',},
        {title: '评价id', dataIndex: 'judge_id', key: 'judge_id',},
        {title: '详细信息', dataIndex: 'content', key: 'content'}
    ];

    componentDidMount() {
        axios.get(`http://localhost:3000/StuffFeed?user=${this.props.user}`)
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    render() {
        const {dataSource} = this.state
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>个人信息</Breadcrumb.Item>
                    <Breadcrumb.Item>修改个人信息</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <InfoHeader/>
                    <Divider/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <div className="feed-title">我发起的申诉</div>
                        <Table dataSource={dataSource} columns={this.columns}/>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default ModifyMyContents;
