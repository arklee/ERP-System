import React, { Component } from 'react'
import {Table, Divider, PageHeader, Button, Modal, message, Col, Row} from 'antd';
import axios from 'axios'
import qs from 'qs';
import AddHR from "./AddHR";

export default class HrAccount extends Component {

    state = {dataSource: [], detail:false, id:0}

    info = (record) => () => {
        Modal.info({
            title: 'id为'+record.idhr+'的HR信息',
            content: (
                <div>
                    <p>HR ID: {record.idhr}</p>
                    <p>时间: {record.from}-{record.to}</p>
                    <p>考核结果: {record.result}</p>
                    <p>考核内容: {record.detail}</p>
                </div>
            ),
            onOk() {},
        });
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/hrAccount?idcompany=${this.props.user}`)
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    add = (record) => {
        axios.post(`http://localhost:3000/hrAccount/add?idcompany=${this.props.user}`, qs.stringify({json1: record}))
            .then(response => {
                message.success('添加成功')
                this.setState({dataSource:response.data})
            })
    }

    delete = (record) => () => {
        axios.post(`http://localhost:3000/hrAccount/delete?idcompany=${this.props.user}$idhr=${record.idhr}`)
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
