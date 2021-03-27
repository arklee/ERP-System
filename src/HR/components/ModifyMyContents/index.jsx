import React, {Component} from 'react';
import {Breadcrumb, Layout} from "antd";
import InfoHeader from "./InfoHeader";

const { Content } = Layout;

class ModifyMyContents extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>个人信息</Breadcrumb.Item>
                    <Breadcrumb.Item>修改个人信息</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <InfoHeader/>
                </Layout>
            </Content>
        );
    }
}

export default ModifyMyContents;
