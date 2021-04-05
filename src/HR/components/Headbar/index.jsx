import React, { Component } from 'react'
import {Button, AutoComplete, Layout, Space, Row, Divider, Typography } from "antd";

const { Text } = Typography;
const {Header} = Layout

export default class Headbar extends Component {
    state = {
        current:{name:'李翔',id:'xxxx-0715'},
        options:[
            {value: '李翔'},
            {value: '张三'},
            {value: '李小平'},
        ]
    }
    render() {
        const {current,options} = this.state
        return (
            <Header style={{background: '#ffffff'}}>
                <Row justify="end">
                    <Space align="center">
                        <Text type="secondary">当前查询员工：</Text>
                        <Divider type="vertical" />
                        <Text>姓名：{current.name}</Text>
                        <Divider type="vertical" />
                        <Text>身份证号：{current.id}</Text>
                        <Divider type="vertical" />
                        <AutoComplete
                            style={{
                                width: 200,
                            }}
                            options={options}
                            placeholder="请输入身份证号或姓名..."
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                        <Button type="primary">查询</Button>
                    </Space>
                </Row>
            </Header>
        )
    };
}
