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
        axios.get(`http://localhost:3000/stuff/searchid?id=${this.props.id}`).then(
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
                        <Text type="secondary">我的信息：</Text>
                        <Divider type="vertical" />
                        <Text>姓名：{current.name===null? '请求错误':current.name}</Text>
                        <Divider type="vertical" />
                        <Text>身份证号：{current.id===null? '请求错误':"**************-"+current.id.slice(-4)}</Text>
                        <Divider type="vertical" />
                    </Space>
                </Row>
            </Header>
        )
    };
}
