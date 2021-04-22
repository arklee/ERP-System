import React, {Component} from 'react';
import {Row, Col} from 'antd';
import { Liquid } from '@ant-design/charts';

class DemoLiquid extends Component {

    percent=()=>{
        const {dataSource} = this.props;
        const all = [0,0,0]
        dataSource.map(dataItem => {
            all[0] = all[0] + dataItem.absence
            all[1] = all[1] + dataItem.late
            all[2] = all[2] + dataItem.days
            return 0
        })
        console.log(all[0],all[1],all[2])
        return [all[0]/all[2], all[1]/all[2]]
    }

    render() {
        const percentBoth = this.percent()
        const configLack = {
            height: 250,
            percent: percentBoth[0],
            statistic: {
                title: {
                    formatter: function formatter() {
                        return '缺勤率';
                    },
                    style: function style(_ref) {
                        var percent = _ref.percent;
                        return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' };
                    },
                },
                content: {
                    style: {
                        fontSize: 60,
                        fill: 'black',
                        lineHeight: 1,
                    },
                },
            },
        };
        const configLate = {
            height: 250,
            percent: percentBoth[1],
            statistic: {
                title: {
                    formatter: function formatter() {
                        return '迟到率';
                    },
                    style: function style(_ref) {
                        var percent = _ref.percent;
                        return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' };
                    },
                },
                content: {
                    style: {
                        fontSize: 60,
                        fill: 'black',
                        lineHeight: 1,
                    },
                },
            },
        };
        return (
            <Row gutter={[64, 16]}>
            <Col span={12}>
                <Liquid {...configLack} />
            </Col>
            <Col span={12}>
                <Liquid {...configLate} />
            </Col>
        </Row>
        )
    }
}


export default DemoLiquid;
