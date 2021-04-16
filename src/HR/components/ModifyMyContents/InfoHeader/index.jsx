import React, {Component} from 'react';
import {PageHeader} from 'antd';
import Content from "./Content";
import Extra from "./Extra";
import MyCollectionsPage from "./MyCollectionsPage";
import axios from 'axios'


class InfoHeader extends Component {
    state = {hrInfo:{
            name: "请求错误",
            sex: "请求错误",
            idCard: "请求错误",
            company: "请求错误",
            number: "请求错误",
            id: "请求错误",
            email: "请求错误",
            password: "请求错误",
            isVIP: false,
            searchTimes: 0,
            score: 0
        }}

    componentDidMount() {
        axios.get(`http://localhost:3000/account?user=${this.props.user}`).then(
            response=>{
                this.setState({hrInfo:response.data})
            }
        )
    }

    render() {
        const {hrInfo} = this.state
        return (
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={hrInfo.name + "的账户信息"}
                subTitle="查看我的账户、VIP、公司信息"
                extra={<MyCollectionsPage hrInfo={hrInfo}/>}>
                <Content hrInfo={hrInfo}/>
                <Extra hrInfo={hrInfo}/>
            </PageHeader>
        );
    }
}

export default InfoHeader;
