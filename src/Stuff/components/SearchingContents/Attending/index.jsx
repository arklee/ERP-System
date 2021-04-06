import React, {Component} from 'react';
import {Divider, PageHeader, Table} from "antd";
import DemoLiquid from "./DemoLiquid";
import axios from "axios";

class Attending extends Component {

    state = {dataSource: []}

    columns = [
        {title: '公司ID', dataIndex: 'id', key: 'id',},
        {title: '公司', dataIndex: 'company', key: 'company',},
        {title: '入职时间', dataIndex: 'employTime', key: 'employTime'},
        {title: '缺勤次数', dataIndex: 'lack', key: 'lack',},
        {title: '迟到次数', dataIndex: 'late', key: 'late',},
        {title: '总在职天数', dataIndex: 'days', key: 'days'},
    ];

    componentDidMount() {
        axios.get('http://localhost:3000/attending')
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
                    title="考勤管理"
                    subTitle="记录员工在职期间考勤情况"
                />
                <DemoLiquid dataSource={dataSource}/>
                <Divider/>
                <Table dataSource={dataSource} columns={this.columns}/>
            </>
        );
    }
}

export default Attending;