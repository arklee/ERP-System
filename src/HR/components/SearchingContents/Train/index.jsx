import React, { Component } from 'react'
import {Table, Divider, PageHeader, Button, Modal} from 'antd';
import axios from 'axios'

export default class Train extends Component {

    state = {dataSource: [], detail:false, id:0}

    info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    }

    componentDidMount() {
        axios.get('http://localhost:3000/train')
            .then(response => {
                this.setState({dataSource:response.data})
            })
    }

    columns = [
        {
            title: '培训ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '开始时间',
            dataIndex: 'from',
            key: 'from',
        },
        {
            title: '结束时间',
            dataIndex: 'to',
            key: 'to',
        },
        {
            title: '考核内容',
            dataIndex: 'content',
            key: 'content'
        },
        {
            title: '考核结果',
            dataIndex: 'result',
            key: 'result',
        },
        {
            title: '详细信息',
            dataIndex: 'event',
            key: 'event',
            render: () => <Button type="primary" onClick={this.info}>查看详情</Button>
        }
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
