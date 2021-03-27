import React, {Component} from 'react';
import {Statistic} from "antd";

class Extra extends Component {
    render() {
        const {hrInfo} = this.props
        return (
            <div
                style={{
                    display: 'flex',
                    width: 'max-content',
                    justifyContent: 'flex-end',
                }}
            >
                <Statistic title="会员状态" value={hrInfo.isVIP? "VIP用户":"普通用户"} style={{marginRight: 32,}}/>
                <Statistic title="可查寻次数" value={hrInfo.isVIP? "不限":hrInfo.searchTimes} />
            </div>
        );
    }
}

export default Extra;
