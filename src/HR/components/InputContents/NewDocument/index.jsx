import React, {Component} from 'react';
import {Descriptions} from 'antd';

class NewDocument extends Component {
    render() {
        const {username,id,sex,nationality,ethnicity,education,major,school,/*graduated_time*/} = this.props.info
        return (
            <Descriptions title={username+"用户信息"} bordered>
                <Descriptions.Item label="姓名">{username}</Descriptions.Item>
                <Descriptions.Item label="性别">{sex}</Descriptions.Item>
                <Descriptions.Item label="国籍">{nationality}</Descriptions.Item>
                <Descriptions.Item label="身份证号" span={2}>{id}</Descriptions.Item>
                <Descriptions.Item label="民族">{ethnicity}</Descriptions.Item>
                <Descriptions.Item label="学历">{education}</Descriptions.Item>
                <Descriptions.Item label="毕业院校">{school}</Descriptions.Item>
                <Descriptions.Item label="专业">{major}</Descriptions.Item>
                <Descriptions.Item label="毕业时间">2021-04-22</Descriptions.Item>
            </Descriptions>
        );
    }
}

export default NewDocument;
