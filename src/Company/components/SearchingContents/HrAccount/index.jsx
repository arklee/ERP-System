import React, { Component } from 'react'
import {Table, Divider, PageHeader, Button, Modal, message, Col, Row} from 'antd';
import axios from 'axios'
import AddHR from "./AddHR";

export default class HrAccount extends Component {

    state = {dataSource: [], detail:false, id:0}

    info = (record) => () => {
        Modal.info({
            title: '培训id为'+record.id+'的详细信息',
            content: (
                <div>
                    <p>培训id: {record.id}</p>
                    <p>时间: {record.from}-{record.to}</p>
                    <p>考核结果: {record.result}</p>
                    <p>考核内容: {record.detail}</p>
                </div>
            ),
            onOk() {},
        });
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/hrAccount?id=${this.props.id}`)
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    add = (record) => {
        axios.post(`http://localhost:3000/hrAccount/add?user=${this.props.user}`, record)
            .then(response => {
                message.success('添加成功')
                this.setState({dataSource:response.data})
            })
    }

    delete = (record) => () => {
        axios.post(`http://localhost:3000/hrAccount/delete?user=${this.props.user}`, record)
            .then(response => {
                message.warning('移除成功')
                this.setState({dataSource:response.data})
            })
    }

    columns = [
        {title: 'HR名', dataIndex: 'name', key: 'name',},
        {title: 'HRID', dataIndex: 'id', key: 'id',},
        {title: 'HR积分', dataIndex: 'score', key: 'score',},
        {title: '', dataIndex: 'delete', key: 'delete', render: (text, record) =>(<Button onClick={this.delete(record)} type="dashed" danger>移除权限</Button>)},
    ];

    render() {
        const {dataSource} = this.state
        return(
            <>
                <Row>
                    <Col span={21}>
                        <PageHeader
                            className="site-page-header"
                            onBack={()=>this.props.history.goBack()}
                            title="HR账户管理"
                            subTitle="添加/移除HR管理权限"
                        />
                    </Col>
                    <Col>
                        <AddHR add={this.add}/>
                    </Col>
                </Row>
                <Divider />
                <Table dataSource={dataSource} columns={this.columns}/>
            </>
        )
    }
}
