import React, {Component} from 'react';
import {Typography,Breadcrumb, Divider, Layout} from "antd";
import InfoHeader from "./InfoHeader";

const { Title, Text} = Typography;
const { Content } = Layout;

class CompanyInfo extends Component {

    state = {info:"请求错误"}

    getIntro = (info) => {
        this.setState({info:info})
    }

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>公司管理</Breadcrumb.Item>
                    <Breadcrumb.Item>公司基本信息</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <InfoHeader user={this.props.user} getIntro={this.getIntro}/>
                    <Divider/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Title level={3}>公司简介</Title>
                        <Text>{this.state.info}</Text>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default CompanyInfo;
