import React, {Component} from 'react';
import {Divider, Row, Col, PageHeader, Table} from 'antd';
import { StatisticCard } from '@ant-design/pro-card';
import LiquidP from './LiquidP';
import Ring from './Ring';
import axios from "axios";

const columns = [
    {title: '绩效ID', dataIndex: 'id', key: 'id',},
    {title: 'HR', dataIndex: 'hr', key: 'hr',},
    {title: '公司', dataIndex: 'company', key: 'company',},
    {title: '季度', dataIndex: 'season', key: 'season'},
    {title: '绩效等级', dataIndex: 'result', key: 'result',},
];

class Exam extends Component {

    state = {dataSource:[]}

    componentDidMount() {
        axios.get('http://localhost:3000/exam')
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

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
                    <Col span={12}>
                        <StatisticCard title="全部绩效占比情况" chart={<Ring dataSource={dataSource}/>}/>
                    </Col>
                    <Col span={12}>
                        <StatisticCard title="合格率" chart={<LiquidP dataSource={dataSource}/>} />
                    </Col>
                </Row>
                <Divider/>
                <Table dataSource={dataSource} columns={columns}/>
            </>
        );
    }
}

export default Exam;
