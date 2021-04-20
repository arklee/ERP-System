import React, {Component} from 'react';
import {Statistic} from "antd";

class Extra extends Component {
    render() {
        const {companyInfo} = this.props
        return (
            <div
                style={{
                    display: 'flex',
                    width: 'max-content',
                    justifyContent: 'flex-end',
                }}
            >
                <Statistic title="HR人数" value={companyInfo.hrAccount} style={{marginRight: 32,}}/>
                <Statistic title="当前积分" value={companyInfo.score} style={{marginRight: 32,}}/>
            </div>
        );
    }
}

export default Extra;
