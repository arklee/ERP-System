import React, { Component } from 'react'
import {Layout, Space, Row, Divider, Typography} from "antd";
import axios from "axios";

const {Header} = Layout
const { Text } = Typography;

export default class Headbar extends Component {

    state = {
        current:{name:null,id:null},
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/company/searchid?id=${this.props.id}`).then(
            response => {
                this.setState({current:response.data})
            }
        )
    }

    render() {
        const {current} = this.state
        return (
            <Header style={{background: '#ffffff'}}>
                <Row justify="end">
                    <Space align="center">
                        <Divider type="vertical" />
                        <Text>公司名：{current.name===null? '请求错误':current.name}</Text>
                        <Divider type="vertical" />
                        <Text>公司ID：{current.id===null? '请求错误':current.id}</Text>
                        <Divider type="vertical" />
                    </Space>
                </Row>
            </Header>
        )
    };
}
