import React, {Component} from 'react';
import {Descriptions, Badge, PageHeader, Divider} from 'antd';
import axios from 'axios'

class Document extends Component {

    state = {
        info:{}
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/default/dossier?id=${this.props.id}`).then(
            response => {
                this.setState({info:response.data})
            },
            () => {
                this.setState({info:{
                        username:'请求失败',
                        id:'请求失败',
                        sex:'请求失败',
                        nationality:'请求失败',
                        ethnicity:'请求失败',
                        education:'请求失败',
                        major:'请求失败',
                        school:"请求失败",
                        graduated_time:"请求失败",
                        majorevents:"请求失败"
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
                    <Descriptions.Item label="姓名">{info.username}</Descriptions.Item>
                    <Descriptions.Item label="性别">{info.sex}</Descriptions.Item>
                    <Descriptions.Item label="国籍">{info.nationality}</Descriptions.Item>
                    <Descriptions.Item label="证件" span={2}>
                        {info.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="民族">{info.ethnicity}</Descriptions.Item>
                    <Descriptions.Item label="状态" span={2}>
                        <Badge status="processing" text="求职中" />
                    </Descriptions.Item>
                    <Descriptions.Item label="学历">{info.education}</Descriptions.Item>
                    <Descriptions.Item label="院校">{info.school}</Descriptions.Item>
                    <Descriptions.Item label="专业">{info.major}</Descriptions.Item>
                    <Descriptions.Item label="毕业时间">{info.graduated_time}</Descriptions.Item>
                    <Descriptions.Item label="重大事件">{info.majorevents}</Descriptions.Item>
                </Descriptions>
            </>
        );
    }
}

export default Document;
