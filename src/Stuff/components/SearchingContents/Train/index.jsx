import React, { Component } from 'react'
import {Table, Divider, PageHeader, Button, Modal} from 'antd';
import axios from 'axios'

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
    ];

    render() {
        const {dataSource} = this.state
        return(
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="人才培训管理"
                    subTitle="记录员工所接受的所有培训内容"
                />
                <Divider />
                <Table dataSource={dataSource} columns={this.columns}/>
            </>
        )
    }
}
