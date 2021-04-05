import React, {Component} from 'react';
import {Descriptions, Badge, PageHeader, Divider} from 'antd';
import axios from 'axios'

class Document extends Component {

    state = {
        info:{}
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/document`).then(
            response => {
                this.setState({info:response.data})
            },
            error => {
                this.setState({info:{
                        name:'请求失败',
                        id:'请求失败',
                        sex:'请求失败',
                        nationality:'请求失败',
                        nation:'请求失败',
                        degree:'请求失败',
                        major:'请求失败',
                        College:"请求失败",
                        graduatedTime:"请求失败",
                        event:"请求失败"
                }})
            }
        )
    }

    render() {
        const {info} = this.state
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="人才档案管理"
                    subTitle="记录员工的个人信息、学历、重大事件"
                />
                <Divider />
                <Descriptions title="李翔用户信息" bordered>
                    <Descriptions.Item label="姓名">{info.name}</Descriptions.Item>
                    <Descriptions.Item label="性别">{info.sex}</Descriptions.Item>
                    <Descriptions.Item label="国籍">{info.nationality}</Descriptions.Item>
                    <Descriptions.Item label="身份证号" span={2}>
                        {info.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="民族">{info.nation}</Descriptions.Item>
                    <Descriptions.Item label="状态" span={2}>
                        <Badge status="processing" text="求职中" />
                    </Descriptions.Item>
                    <Descriptions.Item label="学历">{info.degree}</Descriptions.Item>
                    <Descriptions.Item label="院校">{info.College}</Descriptions.Item>
                    <Descriptions.Item label="专业">{info.major}</Descriptions.Item>
                    <Descriptions.Item label="毕业时间">{info.graduatedTime}</Descriptions.Item>
                    <Descriptions.Item label="重大事件">{info.event}</Descriptions.Item>
                </Descriptions>
            </>
        );
    }
}

export default Document;
