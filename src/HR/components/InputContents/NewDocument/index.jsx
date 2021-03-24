import React, {Component} from 'react';
import {Descriptions} from 'antd';

class NewDocument extends Component {
    render() {
        const {name,id,sex,nationality,nation,degree,major,College,graduatedTime} = this.props.info
        return (
            <Descriptions title="李翔用户信息" bordered>
                <Descriptions.Item label="姓名">{name}</Descriptions.Item>
                <Descriptions.Item label="性别">{sex}</Descriptions.Item>
                <Descriptions.Item label="国籍">{nationality}</Descriptions.Item>
                <Descriptions.Item label="身份证号" span={2}>
                    {id}
                </Descriptions.Item>
                <Descriptions.Item label="民族">{nation}</Descriptions.Item>
                <Descriptions.Item label="学历">{degree}</Descriptions.Item>
                <Descriptions.Item label="毕业院校">{College}</Descriptions.Item>
                <Descriptions.Item label="专业">{major}</Descriptions.Item>
                <Descriptions.Item label="毕业时间">{graduatedTime.toString()}</Descriptions.Item>
            </Descriptions>
        );
    }
}

export default NewDocument;
