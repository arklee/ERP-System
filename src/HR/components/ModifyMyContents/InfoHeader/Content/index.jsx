import React, {Component} from 'react';
import {Descriptions} from "antd";

class Content extends Component {
    render() {
        const {hrInfo} = this.props
        return (
            <div >
                <Descriptions size="small" column={2}>
                    <Descriptions.Item label="姓名">{hrInfo.hrname}</Descriptions.Item>
                    <Descriptions.Item label="帐号id">{hrInfo.idCard}</Descriptions.Item>
                    <Descriptions.Item label="电话号码">{hrInfo.number}</Descriptions.Item>
                    <Descriptions.Item label="性别">{hrInfo.sex}</Descriptions.Item>
                    <Descriptions.Item label="所在公司ID">{hrInfo.idcompany}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{hrInfo.email}</Descriptions.Item>
                    <Descriptions.Item label="密码">**********</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default Content;
