import React, {Component} from 'react';
import {PageHeader} from 'antd';
import Content from "./Content";
import MyCollectionsPage from "./MyCollectionsPage";
import Extra from "./Extra";
import axios from "axios";


class InfoHeader extends Component {
    state = {companyInfo:{
            name: "请求错误",
            id: "请求错误",
            foundTime: "请求错误",
            intro: "请求错误",
            location: "请求错误",
            password: ""
        }}

    componentDidMount() {
        axios.get(`http://localhost:3000/companyInfo?user=${this.props.user}`).then(
            response=>{
                this.setState({companyInfo:response.data})
                this.props.getIntro(response.data.intro)
            }
        )
    }

    render() {
        const {companyInfo} = this.state
        return (
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={companyInfo.name + "的账户信息"}
                subTitle="查看我的账户信息"
                extra={<MyCollectionsPage companyInfo={companyInfo}/>}>
                <Content companyInfo={companyInfo}/>
                <Extra companyInfo={companyInfo}/>
            </PageHeader>
        );
    }
}

export default InfoHeader;
