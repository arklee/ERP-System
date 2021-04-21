import React, {Component} from 'react';
import {Divider, Row, Col, PageHeader, Table, message, Button} from 'antd';
import { StatisticCard } from '@ant-design/pro-card';
import LiquidP from './LiquidP';
import Ring from './Ring';
import axios from "axios";
import EditExam from "./EditExam";
import AddExam from "./AddExam"

class Exam extends Component {

    state = {dataSource:[]}

    componentDidMount() {
        axios.get(`http://localhost:3000/default/perform_inquiry?id=${this.props.id}`)
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    delete = (record) => () => {
        axios.post(`http://localhost:3000/default/perform_delete?idhr=${this.props.user}&id=${this.props.id}`, record)
            .then(response => {
                message.warning('删除成功')
                this.setState({dataSource:response.data})
            })
    }

    add = (record) => {
        axios.post(`http://localhost:3000/default/perform_add?idhr=${this.props.user}&id=${this.props.id}`, record)
            .then(response => {
                message.success('添加成功')
                this.setState({dataSource:response.data})
            })
    }

    edit = (record) => {
        axios.post(`http://localhost:3000/default/perform_edit?idhr=${this.props.user}&id=${this.props.id}`, record)
            .then(response => {
                message.success('修改成功')
                this.setState({dataSource:response.data})
            })
    }

    columns = [
        {title: '绩效ID', dataIndex: 'id', key: 'id',},
        {title: 'HR', dataIndex: 'hr', key: 'hr',},
        {title: '公司', dataIndex: 'company', key: 'company',},
        {title: '季度', dataIndex: 'season', key: 'season'},
        {title: '绩效等级', dataIndex: 'result', key: 'result',},
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
            render: (text, record) => <EditExam edit={this.edit} record={record}/>
        }
    ];

    render() {
        const {dataSource} = this.state
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="绩效管理"
                    subTitle="记录员工在职期间绩效考核"
                />
                <Divider/>
                <Row gutter={[64, 16]}>
                    <Col span={10}>
                        <StatisticCard title="全部绩效占比情况" chart={<Ring dataSource={dataSource}/>}/>
                    </Col>
                    <Col span={10}>
                        <StatisticCard title="合格率" chart={<LiquidP dataSource={dataSource}/>} />
                    </Col>
                    <Col>
                        <AddExam add={this.add}/>
                    </Col>
                </Row>
                <Divider/>
                <Table dataSource={dataSource} columns={this.columns}/>
            </>
        );
    }
}

export default Exam;
