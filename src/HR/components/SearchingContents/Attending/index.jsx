import React, {Component} from 'react';
import {Button, Divider, PageHeader, Table} from "antd";
import DemoLiquid from "./DemoLiquid";

const columns = [
    {title: '公司ID', dataIndex: 'id', key: 'id',},
    {title: '公司', dataIndex: 'company', key: 'company',},
    {title: '入职时间', dataIndex: 'employTime', key: 'employTime'},
    {title: '缺勤次数', dataIndex: 'lack', key: 'lack',},
    {title: '迟到次数', dataIndex: 'late', key: 'late',},
    {title: '总在职天数', dataIndex: 'days', key: 'days'},
    {title: '详细信息', dataIndex: 'detail', key: 'detail', render: text => <Button type="primary">{text}</Button>}
];

class Attending extends Component {

    state = {dataSource:[
            {id: '#21333', company: '钓鱼公司', employTime: '2019-01', lack: 8, late: 25, days: 360, detail: '查看详情'},
            {id: '#21334', company: '李翔企业', employTime: '2019-02', lack: 6, late: 10, days: 725, detail: '查看详情'},
            {id: '#21335', company: '阿里巴巴', employTime: '2019-03', lack: 4, late: 12, days: 228, detail: '查看详情'},
        ]}

    render() {
        const {dataSource} = this.state
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="考勤管理"
                    subTitle="记录员工在职期间考勤情况"
                />
                <DemoLiquid dataSource={dataSource}/>
                <Divider/>
                <Table dataSource={dataSource} columns={columns}/>
            </>
        );
    }
}

export default Attending;
