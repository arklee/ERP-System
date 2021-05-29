import React, {Component} from 'react';
import {PageHeader} from 'antd';
import Content from "./Content";
import MyCollectionsPage from "./MyCollectionsPage";
import axios from "axios";


class InfoHeader extends Component {
    state = {hrInfo:{
            hrname: "请求错误",
            sex: "请求错误",
            id: "请求错误",
            idcompany: "请求错误",
            number: "请求错误",
            email: "请求错误",
            password: "请求错误",
        }}

    componentDidMount() {
        axios.get(`/default/search_stuff?user=${this.props.user}`).then(
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
                title={hrInfo.hrname + "的账户信息"}
                subTitle="查看我的账户信息"
                extra={<MyCollectionsPage hrInfo={hrInfo}/>}>
                <Content hrInfo={hrInfo}/>
            </PageHeader>
        );
    }
}

export default InfoHeader;
