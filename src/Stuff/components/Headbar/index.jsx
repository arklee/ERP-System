import React, { Component } from 'react'
import {Layout, Space, Row} from "antd";

const {Header} = Layout

export default class Headbar extends Component {
    render() {
        return (
            <Header style={{background: '#ffffff'}}>
                <Row justify="end">
                    <Space align="center"></Space>
                </Row>
            </Header>
        )
    };
}
