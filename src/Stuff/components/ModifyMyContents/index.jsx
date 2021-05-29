import React, {Component} from 'react';
import {Breadcrumb, Button, Divider, Layout, Modal, Table} from "antd";
import InfoHeader from "./InfoHeader";
import axios from "axios";

const { Content } = Layout;

class ModifyMyContents extends Component {

    state = {dataSource:[], detail:false, id:0}

    columns = [
        {title: '评价id', dataIndex: 'idevaluation', key: 'idevaluation',},
        //{title: '评分', dataIndex: 'credit', key: 'credit',},
        {title: '评价内容', dataIndex: 'feed', key: 'feed',render: () =><>......（点击详情查看）</>},
        {title: '我的评分', dataIndex: 'score', key: 'score',},
        {title: '详细信息', dataIndex: 'evaluationinclusion', key: 'evaluationinclusion', render: (text,record) => <Button type="primary" onClick={this.info(record)}>查看详情</Button>}
    ];

    info =(record) => () => {
        Modal.info({
            title: '员工'+record.id+'的反馈内容',
            content: (
                <div>
                    <p>评价id: {record.idevaluation}</p>
                    <p>员工id: {record.id}</p>
                    {/*<p>评分: {record.credit}</p>*/}
                    <p>评价内容: {record.evaluationinclusion}</p>
                </div>
            ),
            onOk() {},
        });
    }

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
                        <div className="feed-title">我做出的评分</div>
                        <Table dataSource={dataSource} columns={this.columns}/>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default ModifyMyContents;
