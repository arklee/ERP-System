import React, { Component } from 'react'
import {Layout, Space, Row, Divider, Typography, Input} from "antd";
import axios from 'axios'

import './index.css'

const { Search } = Input;
const { Text } = Typography;
const {Header} = Layout

export default class Headbar extends Component {

    state = {
        current:{name:null,id:null},
    }

    onSearch = value => {
        axios.get(`http://localhost:3000/searchid?id=`+value).then(
            response => {
                this.setState({current:response.data})
                this.props.isSearch(this.state.current.id)
            }
        )
    }

    render() {
        const {current} = this.state
        return (
            <Header style={{background: '#ffffff'}}>
                <Row justify="end">
                    <Space align="center">
                        <Text type="secondary">当前查询员工：</Text>
                        <Divider type="vertical" />
                        <Text>姓名：{current.name===null? '未查询':current.name}</Text>
                        <Divider type="vertical" />
                        <Text>身份证号：{current.id===null? '未查询':current.id}</Text>
                        <Divider type="vertical" />
                        <Search
                            className="search-bar"
                            placeholder="输入身份证号以查询"
                            allowClear
                            enterButton="查询"
                            size="large"
                            onSearch={this.onSearch}
                        />
                    </Space>
                </Row>
            </Header>
        )
    };
}
