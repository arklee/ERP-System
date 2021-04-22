import React, { Component } from 'react'
import {Row, Col, Table, Divider, PageHeader, Button, Modal, message} from 'antd';
import AddTrain from "./AddTrain";
import axios from 'axios'
import EditTrain from "./EditTrain";
import qs from "qs";

export default class Train extends Component {

    state = {dataSource: [], detail:false, id:0}

    info = (record) => () => {
        Modal.info({
            title: '培训id为'+record.idtrain+'的详细信息',
            content: (
                <div>
                    <p>培训id: {record.idtrain}</p>
                    <p>时间: {record.begin}-{record.to}</p>
                    <p>考核结果: {record.end}</p>
                    <p>考核内容: {record.content}</p>
                </div>
            ),
            onOk() {},
        });
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/train?id=${this.props.id}`)
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    delete = (record) => () => {
        axios.post(`http://localhost:3000/train/delete?idhr=${this.props.user}&id=${this.props.id}&idtrain=${record.id}`)
            .then(response => {
                message.warning('删除成功')
                this.setState({dataSource:response.data})
            })
    }

    add = (record) => {
        axios.post(`http://localhost:3000/train/add?idhr=${this.props.user}&id=${this.props.id}`, qs.stringify({json1:record}))
            .then(response => {
                message.success('添加成功')
                this.setState({dataSource:response.data})
            })
    }

    edit = (record) => {
        axios.post(`http://localhost:3000/train/edit?idhr=${this.props.user}&id=${this.props.id}`, qs.stringify({json1:record}))
            .then(response => {
                message.success('修改成功')
                this.setState({dataSource:response.data})
            })
    }

    columns = [
        {
            title: '培训ID',
            dataIndex: 'idtrain',
            key: 'idtrain',
        },
        {
            title: '开始时间',
            dataIndex: 'begin',
            key: 'begin',
        },
        {
            title: '结束时间',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: '考核内容',
            dataIndex: 'content',
            key: 'content',
            render: () => <>......（点击详情查看）</>
        },
        {
            title: '考核结果',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: '详细信息',
            dataIndex: 'event',
            key: 'event',
            render: (text, record) => <Button type="primary" onClick={this.info(record)}>查看详情</Button>
        },
        {
            title: '',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) =>(
                <Button onClick={this.delete(record)} type="dashed" danger>删除</Button>)
        },
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            render: (text, record) => <EditTrain edit={this.edit} record={record}/>
        }
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
                            title="人才培训管理"
                            subTitle="记录员工所接受的所有培训内容"
                        />
                    </Col>
                    <Col>
                        <AddTrain add={this.add}/>
                    </Col>
                </Row>
                <Divider />
                <Table dataSource={dataSource} columns={this.columns}/>
            </>
        )
    }
}
