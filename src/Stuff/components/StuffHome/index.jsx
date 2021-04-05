import React, {Component} from 'react';
import Home from '../../../HR/components/SearchingContents/Home'
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

class StuffHome extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', minHeight: '80vh', background: '#fff' }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Home/>
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default StuffHome;
