import React, {Component} from 'react';
import {Breadcrumb, Col, Row, Divider, Layout, Button, Table} from "antd";
import InfoHeader from "./InfoHeader";
import './index.css'
import ComplainRate from "./ComplainRate";

const { Content } = Layout;

const columns = [
    {title: '员工ID', dataIndex: 'stuff_id', key: 'stuff_id',},
    {title: '员工姓名', dataIndex: 'stuff_name', key: 'stuff_name',},
    {title: '评价id', dataIndex: 'judge_id', key: 'judge_id',},
    {title: '反馈内容', dataIndex: 'content', key: 'content',},
    {title: '详细信息', dataIndex: 'detail', key: 'detail', render: text => <Button type="primary">{text}</Button>}
];

class ModifyMyContents extends Component {

    state = {dataSource:[
            {stuff_name:"茗栋",stuff_id:"135",judge_id:"123",content:"我认为，该评价中xxxxxxxxxxx不符实际",detail: '查看详情'},
            {stuff_name:"翔",stuff_id:"425",judge_id:"125",content:"我认为，该评价中xxxasddasd不符实际",detail: '查看详情'},
            {stuff_name:"方舟",stuff_id:"235",judge_id:"433",content:"我认为，该评价中xxv32424xxx不符实际",detail: '查看详情'}],
        rate:0.025
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
                                <Table dataSource={dataSource} columns={columns}/>
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
