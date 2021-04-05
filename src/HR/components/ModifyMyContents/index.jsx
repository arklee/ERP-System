import React, {Component} from 'react';
import {Breadcrumb, Col, Row, Divider, Layout, Button, Table, Modal} from "antd";
import InfoHeader from "./InfoHeader";
import './index.css'
import ComplainRate from "./ComplainRate";
import axios from "axios";

const { Content } = Layout;

class ModifyMyContents extends Component {

    state = {dataSource:[], rate:0.025, detail:false, id:0}

    columns = [
        {title: '员工ID', dataIndex: 'stuff_id', key: 'stuff_id',},
        {title: '员工姓名', dataIndex: 'stuff_name', key: 'stuff_name',},
        {title: '评价id', dataIndex: 'judge_id', key: 'judge_id',},
        {title: '反馈内容', dataIndex: 'content', key: 'content',},
        {title: '详细信息', dataIndex: 'detail', key: 'detail', render: () => <Button type="primary" onClick={this.info}>查看详情</Button>}
    ];

    info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    }

    componentDidMount() {
        axios.get('http://localhost:3000/account')
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    render() {
        const {dataSource,rate} = this.state
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
                        <div className="feed-title">我收到的员工反馈/投诉率</div>
                        <Row>
                            <Col span={18}>
                                <Table dataSource={dataSource} columns={this.columns}/>
                            </Col>
                            <Col span={6}>
                                <ComplainRate rate={rate}/>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default ModifyMyContents;
