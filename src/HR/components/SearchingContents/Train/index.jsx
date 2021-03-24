import React, { Component } from 'react'
import {Table, Divider, PageHeader, Button} from 'antd';

const dataSource = [
    {
        id: '#21332',
        from: '2020-01-07',
        to: '2020-02-07',
        content: '......',
        result: 'A',
        detail: '查看详情'
    },
    {
        id: '#21333',
        from: '2020-03-07',
        to: '2020-04-07',
        content: '......',
        result: 'B',
        detail: '查看详情'
    },
    {
        id: '#21334',
        from: '2020-08-07',
        to: '2020-09-07',
        content: '......',
        result: 'C',
        detail: '查看详情'
    }
];

const columns = [
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
        dataIndex: 'detail',
        key: 'detail',
        render: text => <Button type="primary">{text}</Button>
    }
];

export default class Train extends Component {
    render() {
        return(
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="人才培训管理"
                    subTitle="记录员工所接受的所有培训内容"
                />
                <Divider />
                <Table dataSource={dataSource} columns={columns}/>
            </>
        )
    }
}
