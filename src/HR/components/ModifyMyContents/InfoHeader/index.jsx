import React, {Component} from 'react';
import {PageHeader, Tabs, Divider} from 'antd';
import Content from "./Content";
import Extra from "./Extra";
import MyCollectionsPage from "./MyCollectionsPage";

const { TabPane } = Tabs;

class InfoHeader extends Component {
    state = {
        hrInfo: {
            name: "李大翔",
            sex: "男",
            idCard: "342401200001070815",
            company: "肯特牛",
            number: "13966306031",
            id: "12138",
            email: "412344324@xx.com",
            password: "1234567",
            isVIP: true,
            searchTimes: 20
        }
    }

    render() {
        const {hrInfo} = this.state
        return (
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={hrInfo.name + "的账户信息"}
                subTitle="查看我的账户、VIP、公司信息"
                extra={<MyCollectionsPage hrInfo={hrInfo}/>}
                footer={
                    <>
                        <Divider/>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="待定" key="1"/>
                            <TabPane tab="待定" key="2"/>
                        </Tabs>
                    </>
                }>
                <Content hrInfo={hrInfo}/>
                <Extra hrInfo={hrInfo}/>
            </PageHeader>
        );
    }
}

export default InfoHeader;
