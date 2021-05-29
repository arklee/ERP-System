import React, {Component} from 'react';
import {Breadcrumb, Col, Row, Divider, Layout, Button, Table, Modal} from "antd";
import InfoHeader from "./InfoHeader";
import './index.css'
import ComplainRate from "./ComplainRate";
import axios from "axios";

const { Content } = Layout;

class ModifyMyContents extends Component {

    //state = {dataSource:[], detail:false, id:0, evaluatenumber:1}
    state = {dataSource:[], rate: 0}

    columns = [
        {title: '员工ID', dataIndex: 'id', key: 'id',},
        {title: '评价id', dataIndex: 'idevaluation', key: 'idevaluation',},
        //{title: '评分', dataIndex: 'credit', key: 'credit',},
        {title: '评价内容', dataIndex: 'feed', key: 'feed',render: () =><>......（点击详情查看）</>},
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

    getNumber = (evaluatenumber) => {
        this.setState({evaluatenumber:evaluatenumber})
    }

    componentDidMount() {
        axios.get(`/default/hr_recieve_appeal?idhr=${this.props.user}`).then(
            response=>{
                this.setState({dataSource:response.data.data,rate:response.data.rate})
            })
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        this.rate = this.state.dataSource.length/parseInt(this.state.evaluatenumber)
    }*/

    render() {
        const {dataSource,rate} = this.state
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>个人信息</Breadcrumb.Item>
                    <Breadcrumb.Item>修改个人信息</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <InfoHeader user={this.props.user} getNumber={this.getNumber}/>
                    <Divider/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <div className="feed-title">我收到的员工反馈/差评率</div>
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
