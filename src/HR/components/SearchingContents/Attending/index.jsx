import React, {Component} from 'react';
import {Divider, message, PageHeader, Table} from "antd";
import DemoLiquid from "./DemoLiquid";
import axios from "axios";
import qs from 'qs';
import EditAttending from "./EditAttending";

class Attending extends Component {

    state = {dataSource: []}

    columns = [
        {title: '公司ID', dataIndex: 'idcompany', key: 'idcompany',},
        {title: '入职时间', dataIndex: 'induction', key: 'induction'},
        {title: '缺勤次数', dataIndex: 'absence', key: 'absence',},
        {title: '迟到次数', dataIndex: 'late', key: 'late',},
        {title: '总在职天数', dataIndex: 'days', key: 'days'},
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            render: (text, record) => <EditAttending edit={this.edit} record={record}/>
        }
    ];

    edit = (record) => {
        record.id = this.props.id
        axios.post(`/default/attendance_modify?idhr=${this.props.user}`, qs.stringify({json1:JSON.stringify(record)}))
            .then(response => {
                message.success('修改成功')
                this.setState({dataSource:response.data})
            })
    }

    componentDidMount() {
        axios.get(`/default/attendance_inquiry?id=${this.props.id}`)
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
