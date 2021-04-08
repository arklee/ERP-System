import React, {Component} from 'react';
import {Divider, message, PageHeader, Table} from "antd";
import DemoLiquid from "./DemoLiquid";
import axios from "axios";
import EditAttending from "./EditAttending";

class Attending extends Component {

    state = {dataSource: []}

    columns = [
        {title: '公司ID', dataIndex: 'id', key: 'id',},
        {title: '公司', dataIndex: 'company', key: 'company',},
        {title: '入职时间', dataIndex: 'employTime', key: 'employTime'},
        {title: '缺勤次数', dataIndex: 'lack', key: 'lack',},
        {title: '迟到次数', dataIndex: 'late', key: 'late',},
        {title: '总在职天数', dataIndex: 'days', key: 'days'},
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            render: (text, record) => <EditAttending edit={this.edit} record={record}/>
        }
    ];

    delete = (record) => () => {
        axios.post('http://localhost:3000/attending/delete', record)
            .then(response => {
                message.warning('删除成功')
                this.setState({dataSource:response.data})
            })
    }

    add = (record) => {
        axios.post('http://localhost:3000/attending/add', record)
            .then(response => {
                message.success('添加成功')
                this.setState({dataSource:response.data})
            })
    }

    edit = (record) => {
        axios.post('http://localhost:3000/attending/edit', record)
            .then(response => {
                message.success('修改成功')
                this.setState({dataSource:response.data})
            })
    }

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
