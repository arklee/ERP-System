import React, {Component} from 'react';
import {Descriptions} from "antd";

class Content extends Component {
    render() {
        const {hrInfo} = this.props
        return (
            <div >
                <Descriptions size="small" column={2}>
                    <Descriptions.Item label="姓名">{hrInfo.name}</Descriptions.Item>
                    <Descriptions.Item label="帐号id">{hrInfo.id}</Descriptions.Item>
                    <Descriptions.Item label="电话号码">{hrInfo.number}</Descriptions.Item>
                    <Descriptions.Item label="性别">{hrInfo.sex}</Descriptions.Item>
                    <Descriptions.Item label="所在公司">{hrInfo.company}</Descriptions.Item>
                    <Descriptions.Item label="身份证号">{hrInfo.idCard}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{hrInfo.email}</Descriptions.Item>
                    <Descriptions.Item label="密码">{hrInfo.password}</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default Content;
