import React, {Component} from 'react';
import {Divider, Row, Col, PageHeader, Button, Table} from 'antd';
import { StatisticCard } from '@ant-design/pro-card';
import LiquidP from './LiquidP';
import Ring from './Ring';

const columns = [
    {title: '绩效ID', dataIndex: 'id', key: 'id',},
    {title: 'HR', dataIndex: 'hr', key: 'hr',},
    {title: '公司', dataIndex: 'company', key: 'company',},
    {title: '季度', dataIndex: 'season', key: 'season'},
    {title: '绩效等级', dataIndex: 'result', key: 'result',},
    {title: '详细信息', dataIndex: 'detail', key: 'detail', render: text => <Button type="primary">{text}</Button>}
];

class Exam extends Component {

    state = {dataSource:[
            {id: '#21333', hr: '网大为', company: '钓鱼公司', season: '2019-01', result: 'A', detail: '查看详情'},
            {id: '#21334', hr: '李大象', company: '钓鱼公司', season: '2019-02', result: 'A', detail: '查看详情'},
            {id: '#21335', hr: '养志', company: '钓鱼公司', season: '2019-03', result: 'B', detail: '查看详情'},
            {id: '#21336', hr: '吴雪药', company: '钓鱼公司', season: '2019-04', result: 'B', detail: '查看详情'},
            {id: '#21337', hr: '吴雪药', company: '钓鱼公司', season: '2019-05', result: 'B', detail: '查看详情'},
            {id: '#21338', hr: '网大为', company: '钓鱼公司', season: '2019-06', result: 'C', detail: '查看详情'},
            {id: '#21339', hr: '李大象', company: '钓鱼公司', season: '2019-07', result: 'C', detail: '查看详情'},
            {id: '#21330', hr: '养志', company: '钓鱼公司', season: '2019-08', result: 'E', detail: '查看详情'},
            {id: '#21321', hr: '吴雪药', company: '钓鱼公司', season: '2019-09', result: 'E', detail: '查看详情'},
            {id: '#21323', hr: '吴雪药', company: '钓鱼公司', season: '2019-010', result: 'E', detail: '查看详情'},
            {id: '#21362', hr: '网大为', company: '钓鱼公司', season: '2019-11', result: 'F', detail: '查看详情'},
            {id: '#21342', hr: '李大象', company: '钓鱼公司', season: '2019-12', result: 'D', detail: '查看详情'},
            {id: '#21332', hr: '吴雪药', company: '钓鱼公司', season: '2020-01', result: 'A', detail: '查看详情'},
        ]}

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
