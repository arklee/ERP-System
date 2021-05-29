import React, {Component} from 'react';
import {message, PageHeader} from 'antd';
import Content from "./Content";
import Extra from "./Extra";
import MyCollectionsPage from "./MyCollectionsPage";
import axios from 'axios'
import qs from "qs";


class InfoHeader extends Component {
    state = {hrInfo:{
            hrname: "请求错误",
            sex: "请求错误",
            id: "请求错误",
            idcompany: "请求错误",
            number: "请求错误",
            email: "请求错误",
            password: "请求错误",
            vip: false,
            searchtimes: 0,
            score: 0
        }}

    componentDidMount() {
        axios.get(`/default/search_hr?id=${this.props.user}`).then(
            response=>{
                this.setState({hrInfo:response.data})
                this.props.getNumber(response.data.evaluatenumber)
            }
        )
    }

    edit = (record) => {
        axios.post(`http://localhost:3000/default/hr_modify?`,qs.stringify({json1:JSON.stringify(record)}))
            .then(response => {
                message.success('修改成功')
                this.setState({hrInfo:response.data})
            })
    }

    render() {
        const {hrInfo} = this.state
        return (
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title={hrInfo.hrname + "的账户信息"}
                subTitle="查看我的账户、VIP、公司信息"
                extra={<MyCollectionsPage hrInfo={hrInfo} edit={this.edit}/>}>
                <Content hrInfo={hrInfo}/>
                <Extra hrInfo={hrInfo}/>
            </PageHeader>
        );
    }
}

export default InfoHeader;
