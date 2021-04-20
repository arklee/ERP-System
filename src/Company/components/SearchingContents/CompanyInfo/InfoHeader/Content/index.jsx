import React, {Component} from 'react';
import {Descriptions} from "antd";

class Content extends Component {
    render() {
        const {companyInfo} = this.props
        return (
            <div >
                <Descriptions size="small" column={2}>
                    <Descriptions.Item label="公司名称">{companyInfo.name}</Descriptions.Item>
                    <Descriptions.Item label="公司ID">{companyInfo.id}</Descriptions.Item>
                    <Descriptions.Item label="成立时间">{companyInfo.foundTime}</Descriptions.Item>
                    <Descriptions.Item label="地址">{companyInfo.location}</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default Content;
